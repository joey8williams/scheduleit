import React ,{Component} from 'react';
import styled from 'styled-components';


class KeyValueBlock extends Component{
    
    render(){
        const Wrapper = styled.div.attrs({
            className:`${this.props.className} ba bw1 b-moon-gray`
        })``;
        
        return (
            <Wrapper>
                <p className='mv0 f5 fw6 pa1'>{this.props.valueName}</p>
                <p className='mv0 f6 bg-mid-gray moon-gray pa1'>{this.props.keyName}</p>
            </Wrapper>
        );
    }
}

export default KeyValueBlock;