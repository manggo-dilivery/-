var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    school_list:[],
    hiddenmodalput: true,
    school: {}
  },
  teacher_detail:function(e){
    var teacher_id= e.currentTarget.dataset.id;
    console.log(teacher_id);
    wx.navigateTo({
      url: '../../pages/teacher_detail/teacher_detail?id=' + teacher_id
    })
  },
  modal_point:function(){
    let that = this;
    wx.showModal({
      content: that.data.school.mobile,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.makePhoneCall({
            phoneNumber: that.data.school.mobile //仅为示例，并非真实的电话号码
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.apiGet(app.apiList.find_school_list, { uid: app.config.uid }, this.init_school);
    app.apiGet(app.apiList.find_about_us, { uid: app.config.uid }, this.init_about_us);
  },
  init_school: function (res) {
    console.log(res)
    var that = this;
    if (res.code) {
      this.setData({ school_list: res.data });
    }
    
  },
  /**
  * 初始化关于我们的信息
  */
  init_about_us: function (res) {
    let that = this;
    if (res.code) {
      this.setData({ school: res.data });
    }
    console.log(res);
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
      path: '/pages/teacher_mien/teacher_mien',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})