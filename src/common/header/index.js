import React, { Component } from 'react';
import {
  HeaderWapper,
  Logo,
  Nav,
  NavItem,
  SearchWapper,
  NavSearch,
  Addition,
  Button
} from './style'

class Header extends Component {
  render() {
    return (
      <HeaderWapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
          <SearchWapper>
            <NavSearch>
            </NavSearch>
            <i className="iconfont">&#xe6cf;</i>
          </SearchWapper>
        </Nav>
        <Addition>
          <Button className='writting'><i className="iconfont">&#xe670;</i>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWapper>
    )
  }
}
export default Header;