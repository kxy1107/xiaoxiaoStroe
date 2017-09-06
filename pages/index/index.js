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
    let data = {
      UserNo: app.globalData.userInfo.UserNo,

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

  onLoad: function () {
    let that = this;
    app.getUserInfo(function (res) {
      console.log("index--app.getUserInfo");
      console.log(res)
      if (res) {
        that.getIndexInfo();
        console.log("index--that.getIndexInfo()");
      }
    });
  },

})
