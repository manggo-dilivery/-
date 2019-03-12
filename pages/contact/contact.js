// pages/contact/contact.js
var app = getApp();
var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    school:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询关于我们的信息
    app.apiGet(app.apiList.find_about_us, { uid: app.config.uid}, this.init_about_us);
  },
  /**
   * 初始化关于我们的信息
   */
  init_about_us:function(res){
    let that =this;
    console.log(res);
    if(res.code){
      var article = 'res.data.description';
      WxParse.wxParse('article', 'html', res.data.description, that,0);
      this.setData({school:res.data});
    }
    console.log(res);
  },
  /**
   * 一键导航
   */
  open_location:function(){
    let that = this
   
    wx.openLocation({
      latitude: parseFloat(that.data.school.latitude),
      longitude: parseFloat(that.data.school.longitude),
    })
  },
  /**
   * 一键拨号
   */
  make_phone:function(){
    let that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.school.mobile //仅为示例，并非真实的电话号码
    })
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: app.config.channel,
      path: '/pages/contact/contact',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})