import React from 'react';
import Header from './common/header'
import { GlobalStyle }  from './style';
import { GlobalIconStyle }  from './static/iconfont/iconfont';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <GlobalIconStyle/>
      <Header/>
    </div>
  );
}

export default App;
