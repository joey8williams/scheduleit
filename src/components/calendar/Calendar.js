import React, {Component} from 'react';
import styled from 'styled-components';
import 'tachyons';


const Wrapper = styled.div.attrs({
    className:'pa1'
})``;

class Calendar extends Component{
    constructor(props){
        super(props);
        this.names = ["Jim", "Jane", "Tina","Trina"];
    }

    
    render(){
        return(
            <Wrapper>
                {this.names.map(name => <p>{name}, I'm Home!</p>)}
            </Wrapper>
        );
    }
    
    
}

export default Calendar;