import React, {Component} from 'react';
import styled from 'styled-components';
import GoogleApiComponent from './GoogleApiComponent';

import Map from './Map';

export class Container extends Component{
    render(){
        console.log(this.props);

        const style={
            width:'90vw',
            height:'30vh'
        }
       
        return(
            <div style={style}>
                <Map google={this.props.google}/>
            </div>
            
        );
    }
    
}

export default GoogleApiComponent({
    apiKey:'AIzaSyAw0632ZXRpbeTiNBgLWszvppvZBMxOkW4'
})(Container);