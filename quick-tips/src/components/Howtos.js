import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getHowtos} from '../actions1/index';
import Howto from './Howto';

class Howtos extends Component {
       
    componentDidMount(){
        this.props.getHowtos()
    }

    render(){
        return (
        <div>
            <div className="how-tos-container"></div>
            <h3>All lifehacks</h3>
            <div className="how-tos">
            {Howtos.map(howto => {
                return <Howto howto={howto}/>
            })}
            </div>
        </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        Howtos: state.Howtos,
        loading: state.gettingHowtos
    }
}
export default connect(
    mapStateToProps,{getHowtos}
)(Howtos)