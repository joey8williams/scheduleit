import React, {Component} from 'react';
import styled from 'styled-components';
import 'animate.css';

import HeaderMenu from './HeaderMenu';
import DailyAgenda from './DailyAgenda';


class DateExpansion extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            isExpanded:false,
            viewSchedule:false
        };
        this.toggleExpansion = this.toggleExpansion.bind(this);
        this.toggleScheduleView = this.toggleScheduleView.bind(this);
    }
    render(){
        const Wrapper = styled.div.attrs({
            className: `br2 shadow-4 fixed bottom-0 left-0 w-100 sf bg-moon-gray`
        })`
            transition: height 3s;
            height:${this.state.isExpanded ? '91vh' : '10vh'}

        `;
        return (
            <Wrapper data-expanded={this.state.isExpanded}>
                <HeaderMenu className='fl w-100 pa2 br2' selectedDate = {this.props.selected} expanded ={this.state.isExpanded} onClick={this.toggleExpansion} toggleSchedule={this.toggleScheduleView}/>
                <DailyAgenda className='fl w-100 scrollable-y' hasData={true} canSchedule={this.state.viewSchedule}></DailyAgenda>
            </Wrapper>    
        );
    }
    
    toggleExpansion(){
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded
        }));
    }
    
    toggleScheduleView(){
        this.setState(prevState => ({
            viewSchedule: !prevState.viewSchedule
        }))
    }
}

export default DateExpansion;