import React, {Component} from 'react';
import styled from 'styled-components';

class CustomerBio extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:``
        })`
            p.customer-name::before{
                font-family:'FontAwesome';
                content:"\f007";
            }
            p.phone-number::before{
                font-family:'FontAwesome';
                content:"\f095";
            }       
        `;

        return(
            <Wrapper className={this.props.className} id='customerBio'>
                <div id='contact'>
                    <div className='fl w-50'>
                        <p className='mv0 f5 fw6 customer-name'> Jane Doe</p>
                    </div>
                    <div className='fr w-50'>
                        <p className='mv0 f5 fw6 phone-number'> (582) 603-2447</p>
                    </div>
                </div>
                <div className='fl w-100 tl'>
                    <p className='mv0 f6 fw5'>Jane is an awful human being. She hates everything that has to do with happiness. Jane specializes in correcting children's mistakes and yelling at small animals.</p>
                </div>
            </Wrapper>    
        );
    }
}

export default CustomerBio;