import React, {Component} from 'react';
import styled from 'styled-components';
import getMonth from 'date-fns/get_month';
import getDaysInMonth from 'date-fns/get_days_in_month';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import addDays from 'date-fns/add_days';
import range from 'lodash/range';

import Week from './Week';

const Wrapper = styled.div.attrs({})`
    background-color:inherit;
`;

class Month extends Component{

    render(){
        return(
            <Wrapper>
                {this.renderWeeks()}   
            </Wrapper>    
        )
    }
    renderWeeks(){
        const currentMonth = getMonth(this.props.date);
        const start = startOfMonth(this.props.date);
        const dayNums = range(getDaysInMonth(this.props.date));
        let weeklyStartDates = new Set();
        
        dayNums.forEach(dayNum => {
            let weeklyStart = startOfWeek(addDays(start,dayNum));
            if(getMonth(weeklyStart) !== currentMonth)
                weeklyStart = start; 
            
            weeklyStartDates.add(weeklyStart.toLocaleDateString());
        });
        
        return [...weeklyStartDates].map(date => 
            <Week key={date} date={date} swapDate={this.props.swapDate}></Week>
        );
    }
}

export default Month;