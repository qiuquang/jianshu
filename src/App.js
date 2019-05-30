import React from 'react';
import Header from './common/header'
import store from './store'
import { GlobalStyle }  from './style';
import { GlobalIconStyle }  from './static/iconfont/iconfont';
import { Provider } from 'react-redux';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <GlobalIconStyle/>
      <Provider store={ store }>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
