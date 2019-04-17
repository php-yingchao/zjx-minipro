// pages/welcome/welcome.js
var X = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx:wx.login({
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {},
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
  onShareAppMessage: function () {

  },
  onGotUserInfo: function () {
    wx.getSetting({
      success(res) {
        if(res.authSetting['scope.userInfo']){

        }
        console.log(res)
        wx.getUserInfo({
          success(res) {
            console.log(res);
            X.globalData.user=res.userInfo;
            console.log(X.globalData.user)
            wx.showModal({
              title: '',
              content: '万能家修需要获取头像，昵称',
              showCancel: true,
              cancelText: '取消',
              confirmText: '确认授权',
              success(res) {
                console.log(res)
                if (res.confirm) {
                  console.log('确认')
                  wx.hideLoading(), wx.reLaunch({
                    url: '/pages/index/index',
                  })
                } else if (res.cancel) {
                  console.log('点击取消')
                }
              },

            })
          }
        })
      }
    })
  }
})