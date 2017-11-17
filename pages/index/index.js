//index.js
//获取应用实例
var app = getApp();
let util = require("../../utils/util.js");
var swiperIndex = 0;
Page({
  data: {
    indicatorDots: "true",//是否显示面板指示点
    autoplay: "true",//是否自动切换
    interval: "5000",//自动切换时间间隔
    duration: "1000",//滑动动画时长
    hotList: [],
    newList: [],
    bannerList: [],
  },


  //点击轮播图
  swiperClick: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + id,
    })
  },


  /**
   * 最火
   */
  itemClick: function (e) {

    let shopID = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + shopID,
    })
  },

  getIndexInfo: function () {
    let that = this;
    let url = app.globalData.serverAddress + 'getIndexInfo';
    let userNo = app.globalData.userInfo == null ? "" : app.globalData.userInfo.UserNo ;
    let belongUser = app.globalData.belongUser == null ? "" : app.globalData.belongUser ;
    let data = {
      UserNo: userNo,
      BelongUser:belongUser,

    };
    util.HttpGet(url, data, "正在加载",
      function (successRes) {
        if (successRes.Code == 1) {
          that.setData({
            bannerList: successRes.BannerList,
            hotList: successRes.HotList,
            newList: successRes.NewList
          });
        }

      },
      function (failRes) {

      });
  },
  onLoad: function (options) {
    if (typeof options.belongUser != "undefined" && options.belongUser != "") {
      app.globalData.belongUser = options.belongUser;
    }

  },
  onShow: function () {
    let that = this;
    that.getIndexInfo();
   
  
  },
  onShareAppMessage: function (res) {
  
    return {
      title: '我家小卖铺',
      path: 'pages/index/index?belongUser="' + app.globalData.belongUser,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
