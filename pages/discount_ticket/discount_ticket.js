// pages/discount_ticket/discount_tickrt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:[
      { url: '../../images/teacher.jpg', name: '音乐课', price: '60', condition: '满300可用', receive: '立即领取'},
      { 'url': '../../images/teacher.jpg', name: '数学课', price: '40', condition: '满300可用', receive: '立即领取'}
    ],
    
  },
receive:function(){
  var that = this;
  var re = this.data.receive=='立即领取'?'立即领取':'已领取';
  this.setData({
    receive:re
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