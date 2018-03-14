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
    render(){
        return (
            <Wrapper>
             <Calendar />
            </Wrapper>    
        );
    }
}

export default Body;