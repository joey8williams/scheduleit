import React, {Component} from 'react';
import getDate from 'date-fns/get_date';


class Day extends Component{
    render(){
        const classes = `fl pa1 ma1 tc ba  bs1 dark-gray br2 pointer day-cube`;
        return(
            <div className={this.props.disabled ? `bg-mid-gray ${classes}` : `bg-moon-gray ${classes}`}>
                <p className='f6'>{this.props.disabled ? '' : getDate(this.props.date)}</p>
            </div>    
        );
    }
}

export default Day;