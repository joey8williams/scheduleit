import React, {Component} from 'react';
//styling imports
import styled from 'styled-components';
import 'tachyons';
//imported components
import Month from './Month';



const Wrapper = styled.div.attrs({
    className:'pa1'
})`
    background-color:inherit
`;

class Calendar extends Component{

    
    render(){
        return(
            <Wrapper>
                <Month date={this.props.date} />
            </Wrapper>
        );
    }
    
    
    
}

export default Calendar;