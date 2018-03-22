import React, {Component} from 'react';
import styled from 'styled-components';

class PaymentTracker extends Component{
    render(){
        const Wrapper = styled.div.attrs({
            className:`${this.props.className} bg-moon-gray ba b--mid-gray bw2 br4 light-red fw7 f3`
        })`
            height:${this.props.styledHeight};
        `;
        const Progress = styled.div.attrs({
            className:'bg-green br3'
        })`
            height:100%;
            width:${(this.props.amountPaid/this.props.amountOwed)*100}%
        `;

        
        return (
            <Wrapper>
                
                <Progress><p className='mv0 pv2'>{`$${this.props.amountPaid}/${this.props.amountOwed}`}</p></Progress>
            </Wrapper>
        );
    }
}

export default PaymentTracker;