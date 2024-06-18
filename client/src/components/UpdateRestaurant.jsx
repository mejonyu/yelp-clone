import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RestaurantFinder from '../apis/RestaurantFinder';

const UpdateRestaurant = () => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async (id) => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                const restaurantData = response.data.data.restaurant;
                setName(restaurantData.name);
                setLocation(restaurantData.location);
                setPriceRange(restaurantData.price_range);
            } catch (error) {
                console.log(error);
            };
        };
        fetchData(id);
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedRestaurant = await RestaurantFinder.put(`/${id}`, {
                name,
                location,
                price_range: priceRange,
            });
            console.log(updatedRestaurant);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="container">
            <form>
                <div className='mb-3'>
                    <label htmlFor='name'>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} id='name' type='text' className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='location'>Location</label>
                    <input value={location} onChange={e => setLocation(e.target.value)} id='location' type='text' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label htmlFor='price_range'>Price Range</label>
                    <select value={priceRange} onChange={e => setPriceRange(e.target.value)} id='price_range' className='form-select'>
                        <option value="1">$</option>
                        <option value="2">$$</option>
                        <option value="3">$$$</option>
                        <option value="4">$$$$</option>
                        <option value="5">$$$$$</option>
                    </select>
                </div>
                <button type='submit' onClick={e => handleSubmit(e)} className="btn btn-primary">Submit</button>
            </form>
        </div>
        
    )
}

export default UpdateRestaurant;