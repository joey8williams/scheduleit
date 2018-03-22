import React, {Component} from 'react';
import styled from 'styled-components';
import getHours from 'date-fns/get_hours';
import format from 'date-fns/format';
import KeyValueBlock from '../../theme/elements/KeyValueBlock';
import RouteMap from '../RouteMap';
import ExpansionActions from './ExpansionActions';
import PaymentTracker from '../PaymentTracker';
import CustomerBio from '../customer_data/CustomerBio';


class DisplayAgenda extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:'tc fl w-100'
        })`
            
            
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
               <CustomerBio className='fl w-100 tl' />

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