import React, {Component} from 'react';
import styled from 'styled-components';
import 'tachyons';

const Wrapper = styled.div.attrs({
    className:'shadow-4 pa1 bg-light-red br2 w-100'
})`
    top:0px;
    left:0px;
    height:10vh;
`;


class Header extends Component{
    render(){
        return(
            <Wrapper>
                <h1 className="dib f3 fw6 mt1 mb1 link mid-gray fl mr2">Schedule</h1>
            </Wrapper>
            );
    }
}
export default Header;