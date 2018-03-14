import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div.attrs({
    className: 'pa1 br2 shadow-4 bg-light-red fixed bottom-0 left-0 w-100'
})``;

class DateExpansion extends Component{
    render(){
        return (
            <Wrapper></Wrapper>    
        );
    }
}

export default DateExpansion;