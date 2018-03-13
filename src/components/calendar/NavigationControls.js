import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';

const Wrapper = styled.div.attrs({})``;

const LeftNav = styled.span.attrs({
    className:"chevron-circle-left"
})``;

class NavigationControls extends Component{

    
    render(){
        return(
            <Wrapper>
            <div>
                <FontAwesome name='chevron-circle-left' />
            </div>
           </Wrapper>    
        );
    }
    
}

export default NavigationControls;