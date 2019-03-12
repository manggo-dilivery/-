// pages/discount-ticket2/discount-ticket2.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    coupon:[],
    userinfo: {} //用户信息
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var openid = wx.getStorageSync(app.config.key + '_openid');
    if (!openid) {
      app.getUserInfo(this.init_userinfo);
    } else {
      this.init_userinfo();
    }
    app.apiGet(app.apiList.find_coupon_list, { uid: app.config.uid }, this.init_coupon);
  },
  /**
  * 初始化用户信息
 */
  init_userinfo: function () {
    let userinfo = wx.getStorageSync('userInfo');
    this.setData({ userinfo: userinfo });
    console.log(userinfo);
  },
  init_coupon: function (res) {

    console.log(res.data);
    if (res.code) {
      this.setData({ coupon: res.data });
    }
  },
  /**
   * 领取优惠券
   */
  get_coupon:function(e){
    debugger;
    let coupon_id =  e.currentTarget.dataset.id;
    let userinfo = wx.getStorageSync('userInfo');
    var openid = wx.getStorageSync(app.config.key + '_openid');
    let params = {
      uid:app.config.uid,
      coupon_id: coupon_id,
      uid:app.config.uid,
      nickname: userinfo.nickName,
      avatar:userinfo.avatarUrl,
      openid: openid
    };

    app.apiPost(app.apiList.add_my_coupon, params, this.coupon_back);
    //app.alert("领取优惠券！");
  },
  /**
   * 优惠券领取成功回调
   */
  coupon_back:function(res){
      if(res.code){
        app.showToast(res.msg);
      }else{
        app.showToast(res.msg,'none');
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