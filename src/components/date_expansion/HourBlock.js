import React, {Component} from 'react';
import styled from 'styled-components';

class HourBlock extends Component{
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className}`

    })``;

    return (
      <Wrapper>
      
      </Wrapper>
    );
  }
}

export default HourBlock;