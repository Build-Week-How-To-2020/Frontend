import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Review from './review';
import { FetchReviews} from '../actions1';

function AllReviews(props) {
    
    
    useEffect(()=> {
        props.addReview()
    }, [])

    return(
        <div>
            {props.Review.map((review) => (
                <review review={review}></review>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        review: state.Reviews,
        isFetching: state.isFetching,
        error:state.error
    }
}
export default connect(mapStateToProps, {FetchReviews})(AllReviews)