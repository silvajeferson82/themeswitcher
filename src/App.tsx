import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle from './styles/global'
import Header from './components/header';



function App() {

  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={light}>
    <div className="App">
      <GlobalStyle/>
      <Header/>
    </div>
    </ThemeProvider>
  );
}

export default App;
