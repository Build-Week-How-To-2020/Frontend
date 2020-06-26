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
    <div>
        <div>
        <h2 className="h2">Create Review</h2>
        </div>
        <form>
           <span className="span">
           <Rating start={4}
  stop={10}
        />
           </span>
            <div className="input-container">
            <Divbox
            type='text'
            placeholder='Was this hack practical and effective? Why or why not?'
            className="input"
            ></Divbox>
            </div>
           <button className="deepBlue">Submit</button>
        </form>
    </div>
)

}


export default connect(null, {addReview})(Reviews)

const Divbox = styled.input`height:130px; border: solid gray 1px; width: 40%; border-radius: 1%; `; 

