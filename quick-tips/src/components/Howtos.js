import React, { Component, useEffect } from 'react';
import {connect} from 'react-redux';
import {getHowtos} from '../actions1/index';
import Howto from './Howto';
import {deleteHowto, editHowto} from '../actions1/index';
import '../review.css';

function Howtos (props){

    

   useEffect(() => {
       props.getHowtos()
   }, [])
       
   if (props.loading){
       return <h2>Loading...</h2>
   }
    return (
       <> <div className="container">
             <p><h2 className="font head">Lifehacks</h2></p>
            <div className="how-tos-container">
           
            
            
            {Array.from(props.Howtos).map((howto) => {
                return <Howto key={howto.id} howto={howto} deleteHowto={props.deleteHowto} editHowto={props.editHowto}/>
            })}
           
            
            </div>
        </div>
        </>
        )

}
const mapStateToProps = state => {
    return {
        Howtos: state.Howtos,
        loading: state.gettingHowtos
    }
}
export default connect(
    mapStateToProps,{getHowtos, deleteHowto, editHowto}
)(Howtos)