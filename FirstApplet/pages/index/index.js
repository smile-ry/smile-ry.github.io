Page({
  onTap:function(){
   
    //wx.navigateTo({//从父级页面跳转到子页面，只能有5级，上一级页面呈现隐藏状态
    //  url:"../newslist/newslist"
    //});
    

    wx.redirectTo({//跳转到另一个主页面,两个页面之间平行跳转,上一个页面呈现关闭状态
      url: '../newslist/newslist',
    })
    //console.log("onTap")
    
  },
  
})