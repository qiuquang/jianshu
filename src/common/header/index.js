import React from 'react';
import { connect } from 'react-redux'; // 建立连接
import { CSSTransition } from 'react-transition-group';
import { actionCreator } from './store'
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

const Header = (props) => {
  return (
    <HeaderWapper>
      <Logo/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
        <SearchWapper>
          <CSSTransition
            timeout={200}
            in={props.focused}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i  className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
        </SearchWapper>
      </Nav>
      <Addition>
        <Button className='writting'><i className="iconfont">&#xe670;</i>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWapper>
    )
}

// class Header extends Component {
//
//   render() {
//     return (
//       <HeaderWapper>
//         <Logo/>
//         <Nav>
//           <NavItem className="left active">首页</NavItem>
//           <NavItem className="left">下载App</NavItem>
//           <NavItem className="right">登陆</NavItem>
//           <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
//           <SearchWapper>
//             <CSSTransition
//               timeout={200}
//               in={this.props.focused}
//               classNames="slide"
//             >
//               <NavSearch
//                 className={this.props.focused ? 'focused' : ''}
//                 onFocus={this.props.handleInputFocus}
//                 onBlur={this.props.handleInputBlur}
//               >
//               </NavSearch>
//             </CSSTransition>
//             <i  className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6cf;</i>
//           </SearchWapper>
//         </Nav>
//         <Addition>
//           <Button className='writting'><i className="iconfont">&#xe670;</i>写文章</Button>
//           <Button className='reg'>注册</Button>
//         </Addition>
//       </HeaderWapper>
//     )
//   }
//
// }

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  }
}
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus',
      };
      dispatch(actionCreator.searchFoucs())
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur',
      };
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);