import React, {Component} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div.attrs({
    className:'fl pa1 ma1 tc ba bg-moon-gray bs1 b--dark-gray dark-gray'
})`
    width:100px;
    height:75px;
`;


class Day extends Component{
    render(){
        return(
            <Wrapper>
                <p>{this.props.date.toLocaleDateString()}</p>
            </Wrapper>    
        );
    }
}

export default Day;