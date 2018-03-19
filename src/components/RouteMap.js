import React, {Component} from 'react';
import styled from 'styled-components';


class RouteMap extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:`${this.props.className} light-red fw7 f3`
        })`
            min-height:30vh
        `;
        
        return (
            <Wrapper>
            TODO: Google maps
            
            </Wrapper>
        );
    }
}

export default RouteMap;