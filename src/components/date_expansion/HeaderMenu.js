import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';


class HeaderMenu extends Component{
  constructor(props){
    super(props);

    this.toggleExpansion = this.toggleExpansion.bind(this);
  }
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className} bg-light-red`
    })`
      height:10vh;
    `;
    return (
      <Wrapper onClick={this.toggleExpansion}>
        <div id='date-exp_heading-date' className="fl w-30" onClick={this.toggleExpansion}>
            <h4 className='f3  mid-gray mv0'>{this.props.selectedDate.toLocaleDateString()}</h4>
        </div>
        <div id='date-exp_slide-toggle' className="fl w-40 tc " onClick={this.toggleExpansion}>
            <FontAwesome name={this.props.expanded ? 'angle-down' : 'angle-up'} 
                          size="2x"
                          className="mid-gray mv0"/>
        </div>
      </Wrapper>
    );
  }

  toggleExpansion(){
    this.props.onClick();
  }
}

export default HeaderMenu;