//app.js
var app = getApp()
App({
  alert: function (msg) {
    wx.showModal({
      content: msg,
      showCancel: false,
    });
  },
  showToast: function (msg, icon) {
    if (!icon) { icon = 'success'; }
    wx.showToast({
      title: msg,
      icon: icon,
      duration: 2000
    })
  },
  //显示加载中
  showloading: function (msg) {
    wx.showLoading({
      title: msg,
      icon: 'loading',
      duration: 800
    })
  },
  //隐藏加载中效果
  hideloading: function (msg) {
    wx.hideLoading()
  },
  config: {
    //接口host
    host: 'https://shixiaozhang.cn',
    //版本
    version: "1.0",
    //app名称
    channel: '地森外语',
    //appid
    key: "wx34b44d081dcc8220",
    uid: 294 //企业展示类小程序需要修改的参数
  },
  apiList: {
    //接口
    find_slide: '/api/wxapp/wxapp/find_slide',//幻灯片查询接口
    find_food_list: '/api/wxapp/wxapp/find_food_list',//食谱查询接口
    find_article_list: '/api/wxapp/wxapp/find_article_list',//文章查询接口
    find_article: '/api/wxapp/wxapp/find_article',//文章查询接口
    find_teacher_list: '/api/wxapp/wxapp/find_teacher_list',//教师信息查询接口
    find_teacher: '/api/wxapp/wxapp/find_teacher',//教师信息查询接口
    find_course_list: '/api/wxapp/wxapp/find_course_list',//课程查询接口
    find_course: '/api/wxapp/wxapp/find_course',//课程查询接口
    find_coupon_list: '/api/wxapp/wxapp/find_coupon_list',//课程查询接口
    add_appointment: '/api/wxapp/wxapp/add_appointment',//课程查询接口
    find_my_appointment: '/api/wxapp/wxapp/find_my_appointment',//课程查询接口
    find_my_signup: '/api/wxapp/wxapp/find_my_signup',//课程查询接口
    add_sign_up: '/api/wxapp/wxapp/add_sign_up',//课程查询接口
    add_my_coupon: '/api/wxapp/wxapp/add_my_coupon',//课程查询接口
    find_my_coupon: '/api/wxapp/wxapp/find_my_coupon',//课程查询接口
    find_about_us: '/api/wxapp/wxapp/find_about_us',//关于我们查询接口
    find_school_list: '/api/wxapp/wxapp/find_school_list',//多校区查询接口
    // find_nav: '/api/wxapp/weisite/find_nav',//导航管理查询
    // find_articlecategory: '/api/wxapp/weisite/find_articlecategory',//查询文章分类
    // find_article_list: '/api/wxapp/youhuo/find_article_list', //查询文章列表 
    // find_article: '/api/wxapp/weisite/find_article',//查询文章详情    
    // find_workers_list: "/api/wxapp/youhuo/find_workers_list",//工人列表
    // find_workers_detail: "/api/wxapp/youhuo/find_workers_detail",//工人详情
    // find_goodscategory: "/api/wxapp/youhuo/find_goodscategory",//商品分类
    // find_goods_list: "/api/wxapp/youhuo/find_goods_list",//商品分类下的商品
    // find_goods_detail: "/api/wxapp/youhuo/find_goods_detail",//商品详情
    // order_list: "/api/wxapp/youhuo/order_list",//订单列表
    // register: "/api/wxapp/youhuo/register",//入驻
    // add_appointment: "/api/wxapp/youhuo/add_appointment",//新增预约信息
    // add_order: "/api/wxapp/youhuo/add_order",//生成订单
    // find_workertype: "/api/wxapp/youhuo/find_workertype",//查询工种
  },
  apiGet: function (url, data, callback) {
    wx.request({
      url: this.config.host + url,
      data: data, 
      method: 'GET',
      dataType: 'json',
      header: { 'content-type': 'application/json;charset=UTF-8' },
      success: function (res) {
        callback(res.data)
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
    })
  },
  apiPost: function (url, data, callback) {
    wx.request({
      url: this.config.host + url,
      data: data,
      method: 'POST',
      dataType: 'json',
      header: { 'content-type': 'application/json;charset=UTF-8' },
      success: function (res) {
        callback(res.data)
      },
      fail: function (res) {
      },
      complete: function (res) {
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this;
    var userInfo = wx.getStorageSync('userInfo');
    this.globalData.userInfo = userInfo;
    var token = wx.getStorageSync(this.config.key + '_token');
    var openid_id = wx.getStorageSync(this.config.key + '_openid');
    if (userInfo && token && openid_id) {
      typeof cb == "function" && cb(that.globalData.url)
    } else {
      //调用登录接口
      wx.login({
        fail: function (fail_res) {
          wx.showModal({
            content: "您点击了拒绝授权，将无法正常使用,请稍后再试!",
            showCancel: false
          })
          return false;
        },
        success: function (res1) {
          wx.getUserInfo({
            fail: function (res1) {
              wx.showModal({
                content: "授权失败，请稍后再试!",
                showCancel: false
              })
            },
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              wx.setStorageSync('userInfo', res.userInfo)
              wx.request({
                url: 'https://shixiaozhang.cn/api/wxapp/public/login',
                data: {
                  appId: 'wx34b44d081dcc8220',
                  appSecret: '214445aafabe25b9da3c0a26c2a0d54e',
                  code: res1.code,
                  iv: res.iv,
                  encrypted_data: res.encryptedData,
                  iv: res.iv,
                  raw_data: res.rawData,
                  signature: res.signature
                },
                success: function (res2) {
                  if (res2.data.code == 1) {
                    wx.setStorageSync(that.config.key + '_token', res2.data.data.token)
                    wx.setStorageSync(that.config.key + '_openid', res2.data.data.openid)
                    typeof cb == "function" && cb(that.globalData.url)
                  }

                  // that.globalData.token = res2.data.data.token

                }
              })
            }
          })
        }
      });
    }
  },
  globalData: {
    url: "",
    userInfo: "",
    text: "",
    appid: "11",
    user_id: "1"
  }
})