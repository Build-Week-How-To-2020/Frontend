import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {deleteHowto, editHowto} from '../actions1/index';
import '../review.css';

const Howto = props => {

    
    const deleteNow = () => {
        props.deleteHowto(props.howto.id);
        
    }

    const editNow = () => {
        props.editHowto(props.howto.id)
    }
return (
    <div className="how-to">
     
    
     <p className="font size">ID: {props.howto.id} </p>
     <p className="font size">{props.howto.last_name} {props.howto.first_name}</p>
     
     <img className="cursor"  src={props.howto.avatar}></img>
   
        
     <div className="button-box">
     <button className="cursor button" onClick={deleteNow}>Delete</button>
     <button className="cursor button" onClick={editNow}>Edit</button>
     </div>
    </div>
)

}

const mapStateToProps = state => {
    return {
        Howto: state.Howto,
        Howtos: state.Howtos
    }
}

export default connect(
    mapStateToProps,
    {deleteHowto, editHowto}
)(Howto)