import React, {Component} from 'react';
//utility imports
import addMonth from 'date-fns/add_months';
import subMonth from 'date-fns/sub_months';
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
    constructor(props){
        super(props);
        
        this.state = {
            date:new Date()
        }
        
        this.moveBackward = this.moveBackward.bind(this);
        this.moveForward = this.moveForward.bind(this);
    }


    
    render(){
        return(
            <Wrapper>
                <NavigationControls date={this.state.date} moveForward={this.moveForward} 
                                                           moveBackward={this.moveBackward}/>
                <Month date={this.state.date} />
            </Wrapper>
        );
    }
    
    moveForward(){
        this.setState((prevState, props) => ({
            date: addMonth(prevState.date,1)
        }));
        
    }
    moveBackward(){
         this.setState((prevState, props) => ({
            date: subMonth(prevState.date,1)
        }));       
        
    }
    
    
    
    
    
    
    
}

export default Calendar;