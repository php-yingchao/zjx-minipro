// pages/classify/classify.js
var X = getApp();
var crypto = require('../../utils/pass.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sj:[],
    list:[],
    goods:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    console.log(X)
    console.log(crypto)
    var cs={
       'cid':1,
       'sonCid':13
    }
    console.log(JSON.stringify(cs))
    console.log(crypto.encrypt(JSON.stringify(cs)))
    var encryptData = crypto.encrypt(JSON.stringify(cs))
    wx.request({
      url: 'https://apitest.discoverer.top/v1/list/info',
      data: encryptData,
      success(res) {
        console.log(res)
        // console.log(res.data.data)
        var decryptData=crypto.decrypt(res.data.data);
        var index = decryptData.lastIndexOf("}");
        decryptData = decryptData.substring(0,index+1);
        var str = JSON.parse(decryptData)
        // console.log(decryptData)
        // console.log(decryptData===str)
        // var data = eval('(' + decryptData + ')'); 
        // cosnole.log(data)
        console.log(str)
        that.setData({
          sj: str.parentCate,
          list: str.sonCate,
          goods:str.goods
        })
      },
      fail(err){
        console.log(err)
      }
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
    return {
      title: '玩鸭',
      path: 'pages/index/index',
      imageUrl: 'http://cdn-download.insblr.com/insblr/wy_logo.png',
      success: function (t) {
        console.log('转发成功' + JSON.stringify(t));
      },
      fail: function (err) {
        console.log('转发失败' + JSON.stringify(err))
      }
    }
  }
})