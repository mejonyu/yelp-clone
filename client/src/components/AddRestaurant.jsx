import React, { useState, useContext } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
    const { addRestaurant } = useContext(RestaurantsContext);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        // Prevent page reload on submit
        e.preventDefault();
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange
            });
            addRestaurant(response.data.data.restaurant);
            console.log(response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="mb-4">
            <form action="">
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-5">
                            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control" placeholder="Location" />
                        </div>
                        <div className="col-2">
                            <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)} className="form-select w-100">
                                <option disabled>Price Range</option>
                                <option value="1">$</option>
                                <option value="2">$$</option>
                                <option value="3">$$$</option>
                                <option value="4">$$$$</option>
                                <option value="5">$$$$$</option>
                            </select>
                        </div>
                        <div className="col-1">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary w-100">Add</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant;