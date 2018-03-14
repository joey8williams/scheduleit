import React, { Component } from 'react';
import theme from './theme/theme';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import 'tachyons';

//nested components
import Header from './components/Header';
import Body from './components/Body';

const Wrapper = styled.div.attrs({
  className:"bg-mid-gray"
})`
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header></Header>
          <Body></Body>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
