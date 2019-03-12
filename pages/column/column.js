// pages/column/column.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      { url: '../../images/item1.jpg', title: '怎样培养孩子的表达能力', date: '2018-03-23'},
      { url: '../../images/item2.jpg', title: '怎样培养孩子的表达能力', date: '2018-03-23' },
      { url: '../../images/item3.jpg', title: '怎样培养孩子的表达能力', date: '2018-03-23' },
      { url: '../../images/item4.jpg', title: '怎样培养孩子的表达能力', date: '2018-03-23' },
      { url: '../../images/item5.jpg', title: '怎样培养孩子的表达能力', date: '2018-03-23' },
      
    ]
  },
column_detail:function(e){
  debugger;
  app.alert("跳转详情页！");
  wx.navigateTo({
    url: '/pages/column-detail/column-detail',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})