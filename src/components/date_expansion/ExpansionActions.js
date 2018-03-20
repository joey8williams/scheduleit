import React, {Component} from 'react';
import styled from 'styled-components';

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
                    <Button primary heightSpec="10vh"><span>test</span></Button>
            
            </Wrapper>
        );
    }
}

export default ExpansionActions;