// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'24.4795100000',
    longitude:'118.0894800000',
    markers: [{
      id: '0',
      latitude: '116.40',
      longitude: '50.90',
      callout: {
        content: 'bj',
        iconPath: '/image/biaoz.png'
      }
    },
    {
      id: '1',
      x: '98.40',
      y: '60.90',
      callout: {
        content: 'bj',
        iconPath: '/image/biaoz.png'
      }
    },
    {
      id: '2',
      x: '96.40',
      y: '70.90',
      callout: {
        content: 'bj',
        iconPath: '/image/biaoz.png'
      }
    },
    {
      id: '3',
      x: '106.40',
      y: '75.90',
      callout: {
        content: 'bj',
        iconPath: '/image/biaoz.png'
      }
    },
    {
      id: '4',
      x: '126.40',
      y: '43.90',
      callout: {
        content: 'bj',
        iconPath: '/image/biaoz.png'
      }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  location: function () {
    var o = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
      },
    })
  }
})