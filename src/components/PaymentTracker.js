import React, {Component} from 'react';
import styled from 'styled-components';

class PaymentTracker extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:`${this.props.className} bg-green br4 light-red fw7 f3`
        })`
            min-height:${this.props.styledHeight};
        `;
        
        return (
            <Wrapper>
            TODO: PaymentTracker progress bar
            </Wrapper>
        );
    }
}

export default PaymentTracker;