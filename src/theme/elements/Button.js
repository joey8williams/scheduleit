import styled from 'styled-components';

const Button = styled.div.attrs({
    className:props => props.primary ? 'b--light-red light-red f4 fw5 ba br3 bw1' : props.default ? 'bg-mid-gray mid-gray' : 'bg-moon-gray moon-gray'
})`
    min-height:${props => props.heightSpec};
    

`;

export {Button};