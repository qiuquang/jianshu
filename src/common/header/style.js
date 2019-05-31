import styled from 'styled-components';
import logoPic from '../../static/logo.png'

export const HeaderWapper = styled.div`
  height: 58px;
  border: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 130px;
  height: 56px;
  width: 100px;
  display: block;
  background: url(${logoPic});
  background-size: contain;
`

export const Nav = styled.div`
  height: 100%;
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const SearchWapper = styled.div`
  float: left;
  position: relative;
  .iconfont{
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align:center;
    &.focused{
      background-color: #777;
      color: #fff;
    }
  }  
`

export const NavSearch = styled.input.attrs(
  {
    placeholder: '搜索'
  }
)`
  width: 160px;
  height: 38px;
  padding: 0 35px 0 20px;
  margin-top: 9px;
  border: none;
  outline: none;
  box-size: border-box;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
   &::placeholder{
    color: #999;
   }
   &.focused{
    width: 280px;
   }
  &.slide-enter {
    transition: all .2s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit{
    transition: all .2s ease-out;
  }
  &.slide-exit-active{
    width: 160px;
  }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); 
`
export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
`
export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem = styled.a`
  display: block;
  float: left;
  line-height: 20px;
  padding: 0 5px;
  margin-right: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd
  font-size: 12px;
  color: #787878;
  border-radius: 3px;
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const Addition = styled.div`
 position: absolute;
 right: 0;
 top: 0;
 height: 56px;
`
export const Button = styled.div`
float: right;
width: 80px;
text-align: center;
margin-top: 9px;
line-height: 38px;
border-radius: 19px;
border: 1px solid #ec6149;
margin-right:20px;
font-size: 14px;
 &.reg{
  color: #ec6149;
 }
 &.writting{
  color: #fff;
  background-color: #ec6149;
 }
`