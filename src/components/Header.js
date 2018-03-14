import React, {Component} from 'react';
import styled from 'styled-components';
import 'tachyons';

const Wrapper = styled.div.attrs({
    className:'shadow-4 pa1 bg-dark-red br2'
})`
    top:0px;
    left:0px;
    height:10vh;
    width:100%;
`;


class Header extends Component{
    render(){
        return(
            <Wrapper>
                <h1 className="f4 georgia">Welcome to the header</h1>
            </Wrapper>
            );
    }
}
export default Header;