var X = getApp();
var crypto = require('../../utils/pass.js');
Page({
  data: {
    focus: false,
    inputValue: '',
    array: ['美国', '中国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    sj: [
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/maintain.png",
        text: "安装到家",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/light.png",
        text: "灯具电路",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/tub.png",
        text: "厨卫洁具",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/washer.png",
        text: "家电维修",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/pipeline.png",
        text: "管道疏通",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/lock.png",
        text: "开锁换锁",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/window.png",
        text: "门窗维修",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/sofa.png",
        text: "家具维修",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/housekeeping.png",
        text: "家政保洁",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/closet.png",
        text: "居家换新",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/ho.png",
        text: "局部翻新",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/recycle.png",
        text: "废品回收",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/preference.png",
        text: "特惠活动",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/all.png",
        text: "全部",
        color: ""
      },
      {
        url: "http://fastican.oss-cn-beijing.aliyuncs.com/someone.png",
        text: "找师傅",
        color: ""
      }
    ],
    dataid: 0,
    dataid1: 0,
    sj1:[
      {
        
      }
    ],
    iconData:[],
    bannerData:[],
    listData:[],
    page:1,
    scrollTop:0,
    scrollH:0
  },
  tick(e) {
    console.log(e.target.dataset.id)
    this.setData({
      dataid: e.target.dataset.id
    })
  },
  change(e) {
    this.setData({
      dataid: e.detail.current
    })
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  bindReplaceInput(e) {
    const value = e.detail.value
    let pos = e.detail.cursor
    if (pos != -1) {
      // 光标在中间
      const left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  test(){
    let i=0;
    i++;
    console.log(i)
  },
  search:function(){
    wx.switchTab({
      url: '/pages/search/search',
    })
  },
  map:function(){
    console.log('1111')
    wx.navigateTo({
      url: '/pages/conmon/map/map',
    })
  },
  onLoad:function(){
    var that = this
    //获取home的icon
    wx.request({
      url: 'https://apitest.discoverer.top/v1/home/banner',
      success(res){
        console.log(res.data.data);
        var decryptData = crypto.decrypt(res.data.data);
        that.setData({
          iconData: JSON.parse(decryptData)
        });
      }
    })
    //获取首页的banner
    wx.request({
      url: 'https://apitest.discoverer.top/v1/home/lantern-slide',
      success(res){
        var decryptData = crypto.decrypt(res.data.data);
        that.setData({
          bannerData: JSON.parse(decryptData)
        });
      }
    })
    //获取首页的list
    const cs={'page':that.data.page};
    var encryptData = crypto.encrypt(JSON.stringify(cs));
    console.log(encryptData)
    wx.request({
      url: 'https://apitest.discoverer.top/v1/home/goods-list',
      data: encryptData,
      success(res){
        var decryptData = crypto.decrypt(res.data.data);
        // var index = decryptData.lastIndexOf("}");
        // decryptData = decryptData.substring(0, index + 1);
        // var str = JSON.parse(decryptData)
        // console.log(JSON.parse(decryptData))
        that.setData({
          listData: JSON.parse(decryptData)
        });
        // console.log(that.data.listData)
      }
    })
    //给页面上的scroll-view的高度赋值
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollH:res.windowHeight
        })
      },
    }) 
  },
  bindDownLoad:function(){
    console.log('>>>>>>')
    var that=this;
    that.data.page++;
    console.log(that.data.page)
    const cs = { 'page': that.data.page };
    var encryptData = crypto.encrypt(JSON.stringify(cs));
    console.log(encryptData)
    wx.request({
      url: 'https://apitest.discoverer.top/v1/home/goods-list',
      data: encryptData,
      success(res) {
        var decryptData = crypto.decrypt(res.data.data);
        // console.log(JSON.parse(decryptData))
        var sj=that.data.listData;
        that.setData({
          listData: sj.concat(JSON.parse(decryptData))
        })

      }
    })
  },
  scroll:function(e){
    this.setData({
      scrollTop:eve.detail.scrollTop
    })
  },
  onReachBottom:function(){
    this.bindDownLoad()
  }
})