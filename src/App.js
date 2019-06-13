import React from 'react';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle }  from './style';
import { GlobalIconStyle }  from './static/iconfont/iconfont';
import { Provider } from 'react-redux';
import home from './pages/home'
import detail from './pages/detail'

function App() {
  return (
    <div>
      <GlobalStyle/>
      <GlobalIconStyle/>
      <Provider store={ store }>
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path="/" exact component={home}></Route>
              <Route path="/detail" exact component={detail}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    </div>
  );
}
// 敲到第7-12
export default App;
