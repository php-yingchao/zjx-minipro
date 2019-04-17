// pages/my/my.js
var X = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userUrl:'',
    userName:'',
    sj: [{
      icon: 'http://fastican.oss-cn-beijing.aliyuncs.com/web/dd.png',
      text: '我的订单',
      href: 'order'
    },
    {
      icon: 'http://fastican.oss-cn-beijing.aliyuncs.com/web/dz.png',
      text: '优惠券',
      href: 'discounts'
    },
    {
      icon: 'http://fastican.oss-cn-beijing.aliyuncs.com/web/yhj.png',
      text: '服务地址',
      href: 'site'
    },]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(X.globalData.user)
    this.setData({
      userUrl: X.globalData.user.avatarUrl,
      userName: X.globalData.user.nickName
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(JSON.parse(X.globalData.user))
    console.log('----------------' + this.data.userUrl,this.data.userName)
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

  },
  order:function(e){
    wx.navigateTo({
      url: '/pages/my/area/order/order',
    })
  },
  discounts:function(e){
    wx.navigateTo({
      url: '/pages/my/area/discounts/discounts',
    })
  },
  site:function(e){
    wx.navigateTo({
      url: '/pages/my/area/site/site',
    })
  },
  maintain:function(e){
    wx.navigateTo({
      url: '/pages/my/area/maintain/maintain',
    })
  }
})