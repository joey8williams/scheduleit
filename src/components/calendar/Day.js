import React, {Component} from 'react';
import getDate from 'date-fns/get_date';


class Day extends Component{
    constructor(props){
        super(props);
        
        this.selectDay = this.selectDay.bind(this);
    }
    render(){
        const classes = `fl pa1 ma1 tc ba  bs1 dark-gray br2 pointer day-cube`;
        return(
            <div onClick={this.selectDay} className={this.props.disabled ? `bg-mid-gray ${classes}` : `bg-moon-gray ${classes}`}>
                <p className='f6 mid-gray'>{this.props.disabled ? '' : getDate(this.props.date)}</p>
            </div>    
        );
    }
    
    selectDay(){
        console.log('selecting');
        
        this.props.swapDate(this.props.date);
        
    }
}

export default Day;