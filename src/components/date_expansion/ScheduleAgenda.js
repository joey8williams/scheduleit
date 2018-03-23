import React, {Component} from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome'

import CustomerBio from '../customer_data/CustomerBio';
import DriverDropper from '../driver_data/DriverDropper';
import Collapsible from '../../theme/elements/Collapsible';
import KeyValueBlock from '../../theme/elements/KeyValueBlock';

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `Driver ${k}`,
  }));


class ScheduleAgenda extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:``
        })`
            //overflow-y:scroll;
            .height-ems{
                height:10vh
            }
            .location-pickup::after{
                content:" Pickup:";
                font-family:'georgia'
            }
            .location-dropoff::after{
                content:" Dropoff: ";
                font-family:'georgia'
            }
            .text-money::before{
                Content:"$";
            }
            .text-percent::after{
                Content:"%";
            }
        `;
        
        return (
            <Wrapper>
                <CustomerBio className='fl w-100'/>
                <div className='fl w-100'>
                    <div className='fl w-25'>
                        <p className='fw5 f6 '>
                            <FontAwesome name='map-marker'
                                         className='location-pickup fw5 f6'/></p>
                    </div>
                    <div className='fl w-75'>
                        <p className='fw6 f6'>1234 Sycamore Ln</p>
                    </div>
                </div>
                <div className='fl w-100'>
                    <div className='fl w-25'>
                        <p className='fw5 f6 '>
                            <FontAwesome name='map-marker'
                                         className='location-dropoff fw5 f6'/></p>
                    </div>
                    <div className='fl w-75'>
                        <p className='fw6 f6'>Double Dutch World Championship, Some Giant Arena</p>
                    </div>
                </div>
                
                <div className='mv1 fl w-100  '>
                <Collapsible title="Scheduled Driver" expanded={false} className='mv3 fl w-100 '>
                    <div className='fl w-100'>
                        <DriverDropper key='SelectedDriver' selectedDrivers={getItems(1)} drivers={getItems(3)}/>
                    </div>
            
                    
                </Collapsible>
                </div>
                <div className='mv1 fl w-100 '>
                <Collapsible title="Driver's Scheduled Hours" expanded={false} className='fl w-100 '>
                    <div className='fl w-third mh2'>
                        <KeyValueBlock keyName='Start Time' valueName={new Date().toLocaleTimeString()} className='' />
                    </div>
                     <div className='fl w-third mh2'>
                        <KeyValueBlock keyName='End Time' valueName={new Date().toLocaleTimeString()} className='' />
                    </div>                   
                </Collapsible>
                </div>
                <div className='mv1 fl w-100 height-ems'>
                <Collapsible title="Driver's Commission" expanded={false} className=''>
                    <div className='fl w-third tc'>
                        <p className='text-money f5 fw6'>300</p>
                        <p className='f6 fw5'>Amount Paid</p>
                    </div>
                    <div className='fl w-third tc'>
                        <p className='text-percent f5 fw6'>83.33</p>
                        <p className='f6 fw5'>Multiplier</p>
                    </div>
                     <div className='fl w-third tc'>
                        <p className='text-money f5 fw6'>250</p>
                        <p className='f6 fw5'>Amount Due</p>
                    </div>                   
                </Collapsible>
                </div>
            </Wrapper>    
        );
    }
}

export default ScheduleAgenda;