import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import RestaurantInfo from '../components/RestaurantInfo';
import AddReview from '../components/AddReview';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from '../components/StarRating';

const RestaurantDetailPage = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, [])
    
    return (selectedRestaurant && selectedRestaurant.restaurant.id === id &&
        <>
            <h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>
            <div className="div text-center">
                <StarRating rating={selectedRestaurant.restaurant.average_rating}/>
                <span className='text-warning mx-1'>
                    {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
                </span>
            </div>
            <RestaurantInfo />
            <AddReview />
        </>
    )
}

export default RestaurantDetailPage;