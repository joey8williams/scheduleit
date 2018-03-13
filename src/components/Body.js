import React, {Component} from 'react';
import styled from 'styled-components';
import 'tachyons';

import Calendar from './calendar/Calendar'
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
            date: new Date()
        }
    }
    render(){
        return (
            <Wrapper>
             <Calendar date={this.state.date}></Calendar>   
            </Wrapper>    
        );
    }
}

export default Body;