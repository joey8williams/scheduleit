import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'pa1 br2 shadow-4 bg-light-red fixed bottom-0 left-0 w-100'
})``;

class DateExpansion extends Component{
    render(){
        return (
            <Wrapper>
            <h4 className='f6 sf mid-gray mv0'>{this.props.selected.toLocaleDateString()}</h4>
            </Wrapper>    
        );
    }
}

export default DateExpansion;