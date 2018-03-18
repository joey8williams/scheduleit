import React, {Component} from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

import HourBlock from './HourBlock';




class DailyAgenda extends Component{
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className} mid-gray ph2 mv3 f5 sf`
    })`
      height:55vh
      overflow-y:scroll;
    `;

    return (
      <Wrapper>
        {!this.props.hasData 
          ? <h4>You have nothing scheduled today.</h4> 
          :
          <div className='tc fl w-100'>

          <h4 className='f4 mv3'>Daily Schedule: John Doe</h4>
          <div className='fl w-50' id='startBlock'>
            <div className='fl w-100'>
              <p className='mv0'>{new Date().toLocaleTimeString()}</p>
            </div>
            <div className='fl w-100'>
              <p className='mv0 f6'>start</p>
            </div>
          </div>
          <div className='fl w-50' id='endBlock'>
            <div className='fl w-100'>
              <p className='mv0'>{new Date().toLocaleTimeString()}</p>
            </div>
            <div className='fl w-100'>
              <p className='mv0 f6'>end</p>
            </div>
          </div>
          </div>
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