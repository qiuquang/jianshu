import { fromJS } from 'immutable';

const defaultState = fromJS({ // fromJS把js对象转成immutable对象
  topicList: [ // 输入框动画标志
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'    },
    {
      id: 3,
      title: '手绘',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
    },
  ],
  articleList: [
    {
      id: 1,
      title: '给爸妈钱，儿子给还是媳妇给，都一样？那真不一样！',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      desc: '周末，大明带着老婆孩子一起回乡下看爸妈。爷爷奶奶看到大孙子回来了，那叫一个高兴，忙里忙外地张罗着。 午饭后，小丽和孩子在房间里看电视，大明陪着老',
    },
    {
      id: 2,
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      title: '给爸妈钱，儿子给还是媳妇给，都一样？那真不一样！',
      desc: '周末，大明带着老婆孩子一起回乡下看爸妈。爷爷奶奶看到大孙子回来了，那叫一个高兴，忙里忙外地张罗着。 午饭后，小丽和孩子在房间里看电视，大明陪着老',
    },
    {
      id: 3,
      imgUrl: '//upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
      title: '给爸妈钱，儿子给还是媳妇给，都一样？那真不一样！',
      desc: '周末，大明带着老婆孩子一起回乡下看爸妈。爷爷奶奶看到大孙子回来了，那叫一个高兴，忙里忙外地张罗着。 午饭后，小丽和孩子在房间里看电视，大明陪着老',
    },
  ]
}); // 默认值

export default (state = defaultState, action) => { // 返回纯函数
  switch (action.type) {
    default:
      return state;
  }
}