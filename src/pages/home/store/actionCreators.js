import axios from 'axios';
import * as contants from './constants';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
  type: contants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
});

const addHomeList = (list) => ({
  type: contants.ADD_ARTICLE_LIST,
  list: fromJS(list)
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res) => {
      console.log(res);
      const result = res.data.data;
      dispatch(addHomeList(result));
    })
  }
};