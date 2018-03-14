import React, {Component} from 'react';
import format from 'date-fns/format'
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome/lib/index';
import 'font-awesome/css/font-awesome.css';

const Wrapper = styled.div.attrs({
    className:"pa3"
})`
    background-color:inherit;
`;


class NavigationControls extends Component{
    constructor(props){
        super(props);
        
        this.backward = this.backward.bind(this);
        this.forward = this.forward.bind(this);
    }
    render(){
        return(
            <Wrapper>
                <div className="fl w-10 mv3">
                <FontAwesome name="chevron-circle-left"
                             size="2x"
                             className="moon-gray pointer fr"
                             onClick={this.backward}/>
                </div>
                <div className="fl w-80 tc">
                    <h2 class="georgia f3 solid moon-gray">{format(this.props.date,"MMMM")}, {format(this.props.date,"YYYY")}</h2>
                </div>
                <div className="fl w-10 mv3">
                <FontAwesome name="chevron-circle-right"
                             size="2x"
                             className="moon-gray pointer"
                             onClick={this.forward}/>
                </div>
            </Wrapper>    
        );
    }
    
    backward(){
        this.props.moveBackward();
    }
    forward(){
        this.props.moveForward();
    }
}

export default NavigationControls;