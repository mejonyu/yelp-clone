import React, { useContext } from 'react';
import StarRating from './StarRating';
import { RestaurantsContext } from '../context/RestaurantsContext';

const Reviews = () => {
    const { selectedRestaurant } = useContext(RestaurantsContext);

    return (
        <div className='container'>
            <div className='row row-cols-3'>
                {Object.keys(selectedRestaurant).length !== 0 && selectedRestaurant.reviews.map((review) => {
                    return (<div key={review.id} className='col'>
                        <div className="card text-white bg-primary mb-3">
                            <div className="card-header d-flex justify-content-between">
                                <span>{review.name}</span>
                                <span>
                                    <StarRating rating={review.rating}/>
                                </span>
                            </div>
                            <div className='card-body'>
                                <p className='card-text'>{review.review}</p>
                            </div>
                        </div>
                    </div>)
                })}
            </div>
        </div>
        
    );
};

export default Reviews;