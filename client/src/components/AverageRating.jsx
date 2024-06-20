import React from 'react';
import StarRating from './StarRating';

const AverageRating = ({ restaurant }) => {

    const renderRating = () => {
        if (!restaurant.count) {
                return <span className='text-warning'>0 Reviews</span>
            }
        return (
            <>
                <StarRating rating={restaurant.average_rating} />
                <span className='text-warning mx-1'>({restaurant.count})</span>
            </>
        )
    }

    return (
        <>
            {renderRating(restaurant)}
        </>
    );
};

export default AverageRating;