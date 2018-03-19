import React, {Component} from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import HourBlock from './HourBlock';
import DisplayAgenda from './DisplayAgenda';




class DailyAgenda extends Component{
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className} mid-gray ph2 mv3 f5 sf`
    })`
      height:55vh
      

    `;

    return (
      <Wrapper>
        {!this.props.hasData 
          ? <h4>You have nothing scheduled today.</h4> 
          : <DisplayAgenda />
         
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