// pages/clockin/clockin.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  
  
  /**
   * 页面的初始数据
   */
  data: {
      card:'未打卡',
      userinfo:{},
      sign_msg: '未打卡',
      sign_data:{
        
        'sign_total_score' :0,
        'sign_total_day':0,
        'sign_list':[]
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息
    var openid = wx.getStorageSync(app.config.key + '_openid');
    if(!openid){
      app.getUserInfo(this.init_userinfo);
    }else{
      this.init_userinfo();
    }
  },
  /**
   * 初始化用户信息
   */
  init_userinfo:function(){
    let userinfo = wx.getStorageSync('userInfo');
    this.setData({ userinfo: userinfo});
    console.log(userinfo);
    var openid = wx.getStorageSync(app.config.key + '_openid');
    app.apiGet(app.apiList.find_my_signup, { uid: app.config.uid, openid: openid }, this.init_signup);
  },
  /**
   * 查询打卡数据
   */
  init_signup:function(res){
    console.log(res);
    if(res.code){
      if (res.data.is_today_sign){
        this.setData({ sign_msg:'已打卡'});
      }
      this.setData({sign_data:res.data});
    }
  },
  gowork:function(){
    var that = this;
    //处理打卡逻辑
    var openid = wx.getStorageSync(app.config.key + '_openid');
    let userinfo = wx.getStorageSync('userInfo');
    let params = { 
        uid: app.config.uid, 
        openid: openid,
        nickname: userinfo.nickName,
        avatar:userinfo.avatarUrl
    }
    app.apiGet(app.apiList.add_sign_up, params, this.deal_signup);
   
  },
  /**
   * 处理打卡成功结果
   */
  deal_signup:function(res){
      console.log(res);
      let that = this;
      if(res.code){
        app.showToast(res.msg);
        that.setData({
          card: '已打卡'
        })
        //刷新当前页面
        that.init_userinfo();
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