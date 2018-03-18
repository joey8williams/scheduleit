import React, {Component} from 'react';
import getDate from 'date-fns/get_date';
import styled from 'styled-components';


class Day extends Component{
    constructor(props){
        super(props);
        
        this.selectDay = this.selectDay.bind(this);
    }
    render(){
        return this.content(
            <p className='f6 mid-gray'>{this.props.disabled ? '' : getDate(this.props.date)}</p>
        );
    }
    
    selectDay(){
        this.props.swapDate(this.props.date);
    }
    
    content(value){
        const Wrapper = styled.div.attrs({
            className:`${this.props.disabled ? 'bg-mid-gray' : this.props.hasEvent ? 'bg-light-red' : 'bg-moon-gray'} fl pa1 ma1 tc ba  bs1 dark-gray br2 pointer`
        })`
            width:14.28571428%;
            height:50px;
        `;
        return (
            <Wrapper onClick={this.selectDay}>{value}</Wrapper>
            
        )
    }
}

export default Day;