import React, {Component} from 'react';
//styling imports
import styled from 'styled-components';
import 'tachyons';
//imported components
import NavigationControls from './NavigationControls';
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
                <NavigationControls></NavigationControls>
                <Month date={this.props.date} />
            </Wrapper>
        );
    }
    
    
    
}

export default Calendar;