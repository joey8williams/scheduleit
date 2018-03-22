import React, {Component} from 'react';
import styled from 'styled-components';

import GoogleApiComponent from './google_map/Container';



class RouteMap extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:`${this.props.className} light-red fw7 f3`
        })`
            height:30vh;
        `;

        
        return (
            <Wrapper>
                <GoogleApiComponent />
            </Wrapper>
        );
    }
}

export default RouteMap;