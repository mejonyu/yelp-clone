import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RestaurantsContext } from '../context/RestaurantsContext';
import RestaurantFinder from '../apis/RestaurantFinder';
import StarRating from './StarRating';
import Reviews from './Reviews';

const RestaurantInfo = () => {
    const { selectedRestaurant } = useContext(RestaurantsContext);

    return (
        <div>
            {selectedRestaurant && (
                <div className='mt-3'>
                    <Reviews />
                </div>
            )}
        </div>
    )
}

export default RestaurantInfo;