// pages/order/order.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_id: 0, //课程id
    userinfo: {}, //用户信息
    appointment_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询我的预约记录
    
    var openid = wx.getStorageSync(app.config.key + '_openid');
    if (!openid) {
      app.getUserInfo(this.init_openid);
    } else {
      this.init_openid();
    }
    
  },
  /**
     * 初始化预约信息
  */
  init_openid: function () {
    var openid = wx.getStorageSync(app.config.key + '_openid');
    app.apiGet(app.apiList.find_my_appointment, { uid: app.config.uid, openid: openid }, this.init_appointment);
  },
  /**
   * 查询预约信息回调处理函数
   */
  init_appointment: function(res){
      console.log(res);
      if(res.code){
        this.setData({ appointment_list:res.data});
      }
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