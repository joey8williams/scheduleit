import styled from 'styled-components';

const Button = styled.button.attrs({
    className:props => props.primary ? 'b--light-red light-red f5 fw5 ba br3 bw1' 
                     : props.default ? 'b--mid-gray mid-gray f5 fw5 ba br3 bw1' 
                                     : 'b--moon-gray moon-gray f5 fw5 ba br3 bw1'
})`
    min-height:${props => props.heightSpec};
`;

export {Button};