import React, {Component} from 'react';
import styled from 'styled-components';

class Collapsible extends Component{
    constructor(props){
        super(props);
        this.state = {
            expanded:this.props.expanded
        }
        
        this.toggleExpansion = this.toggleExpansion.bind(this);
    }
    toggleExpansion(){
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }));
    }    
    render(){
        console.log(this.props);
        const Wrapper = styled.div.attrs({
            className:`mv1 `
        })`
            
            &[data-expanded="false"] div.content-wrapper{
                display:none;
            }
            div.collapsed{
                height:10vh;
                & h4::before{
                    content:"\f0da";
                    font-family:'FontAwesome';
                    margin-right:10px;
                }                
            }
            div.expanded{
                & h4::before{
                    content:"\f0d7";
                    font-family:'FontAwesome';
                    margin-right:10px;
                }
            }
            
        `;
        
       
        return(
            <Wrapper  data-expanded={this.state.expanded}>
                <div onClick={this.toggleExpansion} 
                     className={this.state.expanded ? 'fl w-100 bl bt br b--mid-gray pa1  expanded pointer'
                                                    : 'fl w-100 ba b--mid-gray pa1 shadow-5  collapsed pointer' }>
                    <h4 className='mv2 fw5'>{this.props.title}</h4>
                </div>
            
                <div className='fl w-100 content-wrapper bl bb br b--mid-gray '>
                    {this.props.children}
                </div>
            </Wrapper>
        );
    }

}

export default Collapsible;