import React, {Component} from 'react';
import styled from 'styled-components';
import getHours from 'date-fns/get_hours';
import format from 'date-fns/format';

import KeyValueBlock from '../../theme/elements/KeyValueBlock';


class DisplayAgenda extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:'tc fl w-100'
        })`
            
            p.customer-name::before{
                content:"Customer: ";
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
                    <p className='mv0 f5 fw6 underline customer-name'>Jane Doe</p>
                    <p className='mv0 f6 fw5'>Jane is an awful human being. She hates everything that has to do with happiness. Jane specializes in correcting children's mistakes and yelling at small animals.</p>
                </div>
            </Wrapper>    
        );
        
        
    }
}

export default DisplayAgenda;