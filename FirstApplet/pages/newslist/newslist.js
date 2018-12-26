var postsData = require("../../data/post-data.js") //获取数据库中的数据
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //小程序总是会读取data对象来做数据绑定，这个动作我们成为动作A
    //而这个动作A的执行，是在onLoad事件执行之后发生的
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {// 页面初始化 options 为页面跳转所带来的参数
    //this.data.postList = postsData.postList  //wxml调用时 wx:for={{postList}}
    this.setData({
      posts_key:postsData.postList
    }); 

  },

})