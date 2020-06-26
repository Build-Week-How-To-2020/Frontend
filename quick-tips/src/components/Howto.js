import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';



const Howto = props => {
return (
    <div className="how-to-container">
     <div className="how-to">
     <Link to={`/how-to/${props.howto.id}`}>
     <h4>{props.howto.title}</h4>
     <p>likes: {props.howto.likes}</p>
     </Link>
        
     </div>
    </div>
)

}

export default Howto;