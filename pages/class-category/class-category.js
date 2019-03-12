// pages/recipe/recipe.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /** 
        * 页面配置 
        */
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    list1: [],
    tabs: ['特色英语', '文化课程', '美术课程', '舞蹈课程', '音乐课程', '其他课程'],
    currentTabsIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /** 
     * 获取系统信息 
     */
    // wx.getSystemInfo({

    //   success: function (res) {
    //     that.setData({
    //       winWidth: res.windowWidth,
    //       winHeight: res.windowHeight
    //     });
    //   }

    // });
    app.apiGet(app.apiList.find_course_list, { uid: app.config.uid, type: that.data.course_list }, this.course_list);
  },
  course_list: function (res) {
  
    console.log(res.data);
    if (res.code) {
      this.setData({ list1: res.data });
    }
  },
  appointment:function(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/appointment/appointment?course_id='+id,
    })
    console.log()
  },

  /** 
      * 滑动切换tab 
      */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  onTabChange: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    that.setData({
      currentTabsIndex: index
    })
  },

  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
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