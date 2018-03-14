import React, {Component} from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import addDays from 'date-fns/add_days';
import endOfWeek from 'date-fns/end_of_week';
import getMonth from 'date-fns/get_month';
import endOfMonth from 'date-fns/end_of_month';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import range from 'lodash/range';

import Day from './Day';

const Wrapper = styled.div.attrs({
    className:'fl w-100 flex'
})`
    background-color:inherit
`;

class Week extends Component{
    render(){
        return(
            <Wrapper>{this.renderDaysInWeek()}</Wrapper>
        );
    }
    renderDaysInWeek(){
        const start = parse(this.props.date);
        let end = endOfWeek(this.props.date);
        if(getMonth(start) !== getMonth(end)){
            end = endOfMonth(start);
        }
        
        const dayNums = range(differenceInCalendarDays(addDays(end,1),start));
        
        return dayNums.map(num => 
            <Day date={addDays(start,num)}></Day>
        );
    }
}

export default Week;