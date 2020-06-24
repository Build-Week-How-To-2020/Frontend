import React from 'react';

const review = (props) => {
    return (
        <div>
            <div>{props.review.date}</div>
            <div>{props.review.name}</div>
            <div>{props.review.review}</div>
        </div>
    )
}

export default review;