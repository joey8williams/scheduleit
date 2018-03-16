import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import 'animate.css';



class DateExpansion extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isExpanded:false,
        };
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }
    render(){
        const Wrapper = styled.div.attrs({
            className: `pa1 br2 shadow-4 bg-light-red fixed bottom-0 left-0 w-100 ${this.isExpanded ? 'slideInUp' : 'slideOutDown'}`
        })`
            height:${this.isExpanded ? "50vh" : "10vh"};
        `;
        return (
            <div onClick={this.toggleExpansion} className='pa1 br2 shadow-4 bg-light-red fixed bottom-0 left-0 w-100 {this.isExpanded ? "slideInUp" : "slideOutDown"}'>
                <div id='date-exp_heading-date' className="fl w-30">
                    <h4 className='f3 sf mid-gray mv0'>{this.props.selected.toLocaleDateString()}</h4>
                </div>
                <div id='date-exp_slide-toggle' className="fl w-40 tc ">
                    <FontAwesome name={this.state.isExpanded ? 'angle-down' : 'angle-up'} 
                                 size="2x"
                                 className="mid-gray mv0"/>
                                
                </div>
            </div>    
        );
    }
    
    toggleExpansion(){
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
        
    }
}

export default DateExpansion;