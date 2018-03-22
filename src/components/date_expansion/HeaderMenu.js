import React,{Component} from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';


class HeaderMenu extends Component{
  constructor(props){
    super(props);

    this.toggleExpansion = this.toggleExpansion.bind(this);
    this.toggleSchedule = this.toggleSchedule.bind(this);
  }
  render(){
    const Wrapper = styled.div.attrs({
      className:`${this.props.className} bg-light-red`
    })`
      height:10vh;
      
      .view-toggle{
        display:${this.props.expanded ? 'block': 'none'}
      }
    `;
    return (
      <Wrapper >
        <div id='date-exp_heading-date' className="fl w-30" onClick={this.toggleExpansion}>
            <h4 className='f3  mid-gray mv0'>{this.props.selectedDate.toLocaleDateString()}</h4>
        </div>
        <div id='date-exp_slide-toggle' className="fl w-40 tc " onClick={this.toggleExpansion}>
            <FontAwesome name={this.props.expanded ? 'angle-down' : 'angle-up'} 
                          size="2x"
                          className="mid-gray mv0"/>
        </div>
        <div id='date-exp_schedule-toggle' className='fl w-30 tc view-toggle' onClick={this.toggleSchedule}>
          <p className='f5 fw6 mid-gray mv1 pointer'>Change View</p>
          
        </div>
        
      </Wrapper>
    );
  }

  toggleExpansion(){
    this.props.onClick();
  }
  toggleSchedule(){
    this.props.toggleSchedule();
  }
}

export default HeaderMenu;