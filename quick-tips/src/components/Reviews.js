import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addReview } from '../actions1';
import Rating from 'react-rating';

import '../review.css';
function Reviews (props) {

    const [newReview, setNewReview] = useState({ 
    review: '',
    date:   '',
    rating: ''
    });

    const onChangeHandler = (event) => {
        setNewReview({
            ...newReview,
            [event.target.name]:event.target.value,
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        props.addReview(newReview);
        setNewReview({
            review: '',
            date:   '',
            rating: ''
        })
    }

return (
    <div className="formContainer">
        <div>
        <h2 className='h2'>Create Review</h2>
        </div>
        <form>
           <div><Rating/></div>
            <div className="input-container">
            <Sinput
            name="comment"
            onChange={onChangeHandler}
            type='text'
            placeholder='Was this hack practical and effective? Why or why not?'
            className="input"
            ></Sinput>
            </div>
           <button type="submit" onSubmit={onSubmitHandler} className="deepBlue">Submit</button>
        </form>
    </div>
)

}


export default connect(null, {addReview})(Reviews)

const Sinput = styled.input`height:130px; border: solid gray 1px; width: 40%; border-radius: 1%; `; 

