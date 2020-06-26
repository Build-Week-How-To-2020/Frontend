import React from 'react';

const Review = (props) => {
    return (
        <div>
            {props.review.date}
            {props.review.name}
            {props.review.review}
        </div>
    )
}

export default Review;