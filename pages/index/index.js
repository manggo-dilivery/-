//index.js
//获取应用实例
var app = getApp();
console.log(app) 
Page({ 
 
  /** 
   * 页面的初始数据
   */
  data: {
    slide_thumbs: [],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    article:[] ,
    current_page:1,
    last_page:0
  },

 
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) { 
    //调用幻灯片接口
    var that = this;
    app.apiGet(app.apiList.find_slide, { uid: app.config.uid}, this.init_slide);
    this.design_article_list();
  },
  /**
   * 初始化幻灯片数据
   */
  init_slide: function (res) {
    console.log(res);
    if (res.code) {
      this.setData({ slide_thumbs: res.data }); 
    }
  },
  design_article_list:function(){
    var that = this;
    if(this.data.current_page == this.data.last_page){
      return false;
    }
    app.apiGet(app.apiList.find_article_list, { uid: app.config.uid,  page: this.data.current_page }, this.init_article);
  },
  init_article: function (res) {
    console.log(res);
    var that = this;
    
    if (res.code) {
      if(res.data){
        let list = that.data.article
        list = list.concat(res.data.data);
        that.setData({
          last_page:res.data.last_page,
          current_page:that.data.current_page+1,
          article:list
        })
      }
    
    }
  },
  nav1:function(){
    wx.navigateTo({
      url: '/pages/contact/contact',
    })
  },
  clockin: function () {
    wx.navigateTo({
      url: '/pages/clockin/clockin',
    })
  },
  schedule: function () {
    wx.navigateTo({
      url: '/pages/class-category/class-category',
    })
  },
  recipe: function () {
    wx.navigateTo({
      url: '/pages/recipe/recipe',
    })
  },
  discount_ticket2: function () {
    wx.navigateTo({
      url: '/pages/discount-ticket2/discount-ticket2',
    })
  },
  column: function () {
    wx.navigateTo({
      url: '/pages/column/column',
    })
  },
  column_detail: function (e) {
    debugger;
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/column-detail/column-detail?id='+id,
    })
  },
  headline: function () {
    wx.navigateTo({
      url: '/pages/headline/headline?id=38',
    })
  },
  /**
   * 多校区管理
   */
  mutil_school:function(){
    console.log("多校区管理");
    wx.navigateTo({
      url: '/pages/multi_school/multi_school',
    })
  },
  /**
   * 动态
   */
  news_list:function(){
    wx.navigateTo({
      url: '/pages/news_list/news_list',
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
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
