import React, { useState } from 'react';

const AddReview = () => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState("Rating");
    const [review, setReview] = useState("");

    return (
        <div className='mb-2'>
            <div className="container">
                <form>
                    <div className='row mb-2'>
                        <div className="col-8">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder='John Doe' />
                        </div>
                        <div className="col-4">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <select value={rating} onChange={(e) => setRating(e.target.value)} className="form-select" id="rating">
                                <option disabled>Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea value={review} onChange={(e) => setReview(e.target.value)} id="review" cols="30" rows="10" className="form-control" />
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col'>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddReview;