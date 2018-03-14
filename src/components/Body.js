import React, {Component} from 'react';
import styled from 'styled-components';
import 'tachyons';

import Calendar from './calendar/Calendar'
import DateExpansion from './DateExpansion';
//import img from '../theme/background.webp';


const Wrapper = styled.div.attrs({
    className:'bg-mid-gray'
})`
    width:100%;
    height:90vh;
`;

class Body extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            selected:new Date()
        }
        
        this.swapSelectedDate = this.swapSelectedDate.bind(this);
    }
    render(){
        return (
            <Wrapper>
             <Calendar swapDate={this.swapSelectedDate}/>
             <DateExpansion selected={this.state.selected}/>
            </Wrapper>    
        );
    }
    swapSelectedDate(date){
        this.setState(({
            selected:date
        }));
    } 
}

export default Body;