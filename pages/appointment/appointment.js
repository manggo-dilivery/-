var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenmodalput: true,
    course:{},
    school:'',
    userinfo:{} //用户信息
  },
  sign_up:function(){
    let course_id = this.data.course.id;
    wx.navigateTo({
      url: '/pages/sign_up/sign_up?course_id=' + course_id,
    })
  },
  modal_point: function () {
    
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
    let course_id = options.course_id;
    console.log(course_id);
    app.apiGet(app.apiList.find_course, { uid: app.config.uid, course_id: course_id }, this.init_course);
    var openid = wx.getStorageSync(app.config.key + '_openid');
    if (!openid) {
      app.getUserInfo(this.init_userinfo);
    } else {
      this.init_userinfo();
    }
    //查询用户电话
    app.apiGet(app.apiList.find_about_us, { uid: app.config.uid }, this.init_about_us);
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
   * 初始化用户信息
  */
  init_userinfo: function () {
    let userinfo = wx.getStorageSync('userInfo');
    this.setData({ userinfo: userinfo });
    console.log(userinfo);
  },
  /**
   * 初始化课程数据
   */
  init_course: function (res) {
    if (res.code) {
      var article = res.data.course_description;
      WxParse.wxParse('article', 'html', article, this, 15);
      this.setData({ course: res.data });
    }
  },
  /**
   * 预览课程图片
   */
  preview_image:function(e){
    let image_src = this.data.course.thumb;
    wx.previewImage({
      current: image_src, // 当前显示图片的http链接
      urls: [image_src] // 需要预览的图片http链接列表
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
    let that = this;
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: that.data.course.name,
      path: '/pages/appointment/appointment?course_id='+that.data.course.id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})