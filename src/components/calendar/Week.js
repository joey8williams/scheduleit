import React, {Component} from 'react';
import styled from 'styled-components';
import parse from 'date-fns/parse';
import getDay from 'date-fns/get_day';
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
        let weekDayIndexes = dayNums.map(num => {
            const currDate = addDays(start,num);
            return {
                date:currDate,
                weekIndex:getDay(currDate)
            };
        });
        let weekIndex = range(7).map(index => {
            const instance = weekDayIndexes.find(item => item.weekIndex === index);
            if(instance === undefined) {
                return{
                    date:new Date(),
                    weekIndex: index,
                    inMonth:false
                };
            }
            return {
                date: instance.date,
                weekIndex:index,
                inMonth: instance.weekIndex === index
            };
        });
        
        return weekIndex.map(item => {
            return <Day key={weekIndex.indexOf(item)}
                        date={item.date} 
                        disabled={!item.inMonth}
                        swapDate={this.props.swapDate}></Day>
        });
    }
}

export default Week;