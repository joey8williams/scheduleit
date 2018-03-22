import React, {Component} from 'react';
import styled from 'styled-components';

import FontAwesome from 'react-fontawesome';
import {Button} from '../../theme/elements/Button';

class ExpansionActions extends Component{
    
    render(){
        
        const Wrapper = styled.div.attrs({
            className:`${this.props.className}`
        })`
            min-height:${this.props.styledHeight};
        `;
        
        return (
            <Wrapper> 
                    <Button primary heightSpec="10vh" className="fl w-third pa3">Reschedule</Button>
                    <Button default heightSpec="10vh" className="fl w-third pa3">
                       {this.props.companyName}<FontAwesome name='phone' /></Button>
                    <Button primary heightSpec="10vh" className="fl w-third pa3">
                        <FontAwesome name='map' /> Route
                    </Button>
            </Wrapper>
        );
    }
}

export default ExpansionActions;