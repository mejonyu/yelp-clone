import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import RestaurantInfo from '../components/RestaurantInfo';
import AddReview from '../components/AddReview';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';

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

    return (
        <>
            <RestaurantInfo />
            <AddReview />
        </>
    )
}

export default RestaurantDetailPage;