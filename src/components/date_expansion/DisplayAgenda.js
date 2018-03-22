import React, {Component} from 'react';
import styled from 'styled-components';
import getHours from 'date-fns/get_hours';
import format from 'date-fns/format';

import KeyValueBlock from '../../theme/elements/KeyValueBlock';
import RouteMap from '../RouteMap';
import ExpansionActions from './ExpansionActions';
import PaymentTracker from '../PaymentTracker';


class DisplayAgenda extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:'tc fl w-100'
        })`
            
            p.customer-name::before{
                content:"Customer: ";
            }
            p.phone-number::before{
                font-family:'FontAwesome';
                content:"\f095";
            }
        `;
        const dummyDate = new Date();
        
        return(
            <Wrapper>
                <div id='header' className='fl w-100 mb3'>
                    <KeyValueBlock className='fl w-25'
                                   key='payBlock'
                                   keyName='Pay'
                                   valueName="$250.00" />
                    <KeyValueBlock className='fr w-25'
                                   key='endBlock'
                                   keyName='End'
                                   valueName={`${getHours(dummyDate)}:${format(dummyDate,'mm')} ${format(dummyDate,'A')}`} />
                    <KeyValueBlock className='fr w-25 mr'
                                   key="startBlock"
                                   keyName="Start" 
                                   valueName={`${getHours(dummyDate)}:${format(dummyDate,'mm')} ${format(dummyDate,'A')}`} />
                </div>
                <div className='fl w-100 tl' id='customerBio'>
                    <div id='contact'>
                        <div className='fl w-50'>
                            <p className='mv0 f5 fw6 underline customer-name'>Jane Doe</p>
                        </div>
                        <div className='fr w-50'>
                            <p className='mv0 f5 fw6 phone-number'> (582) 603-2447</p>
                        </div>
                    </div>
                    <div className='fl w-100 tl'>
                        <p className='mv0 f6 fw5'>Jane is an awful human being. She hates everything that has to do with happiness. Jane specializes in correcting children's mistakes and yelling at small animals.</p>
                    </div>
                </div>
               <RouteMap className='fl w-100 mv2 ba b--light-red bw1' /> 
               
               {dummyDate !== new Date() 
                   ? <ExpansionActions className='fl w-100 mv3' styledHeight="10vh" companyName="SlowRider"/>
                   : <PaymentTracker className='fl w-100 mv3'   styledHeight="10vh" amountOwed={250} amountPaid={162} /> 
               }
               
            </Wrapper>    
        );
        
        
    }
}

export default DisplayAgenda;