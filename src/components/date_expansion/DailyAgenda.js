import React, {Component} from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import HourBlock from './HourBlock';
import DisplayAgenda from './DisplayAgenda';
import ScheduleAgenda from './ScheduleAgenda';




class DailyAgenda extends Component{
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className} mid-gray ph2 mv3 f5 sf`
    })`
      height:77vh
      

    `;

    return (
      <Wrapper>
        {this.props.hasData 
          ? this.props.canSchedule ? <ScheduleAgenda /> : <DisplayAgenda />
          : <h4>You have nothing scheduled today.</h4> 
        }
     
      </Wrapper>
    );
  }

  renderHourBlocks(){

  }
  renderHalfDay(text){

    range(12).map(hour => {
      return <HourBlock key={`hour_${hour}${text}`}
                        hour={hour} />


    });
  }
}

export default DailyAgenda;