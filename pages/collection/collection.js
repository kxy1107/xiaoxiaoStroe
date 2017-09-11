// pages/shopcart/shopcart.js
var app = getApp();
let util = require("../../utils/util.js");
Page({
  data: {
    collectList: [],//收藏列表

  },


  onItemClick: function (e) {
    var id = e.currentTarget.dataset.shopid;
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + id,
    })
  },

  onItemLongClick: function (e) {
    var id = e.currentTarget.dataset.shopid;
    var title = e.currentTarget.dataset.title;
    wx.showModal({
      title: '删除提示',
      content: '删除【 ' + title + '】？',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //获取收藏列表
  getCollectList: function () {

    let that = this;
    let url = app.globalData.serverAddress + 'getCollectList';
    let userNo = app.globalData.userInfo == null ? "" : app.globalData.userInfo.UserNo;
    let belongUser = app.globalData.belongUser == null ? "" : app.globalData.belongUser;
    let data = {
      UserNo: userNo,
      BelongUser:belongUser,
    };
    util.HttpGet(url, data, "loading",
      function (successRes) {
        if (successRes.Code == 1) {
          let collectList = [];
          for (let key of successRes.CollectList) {
            let list = {};
            list.collectionID = key["collectionID"];
            list.shopID = key["shopID"];
            list.shopTitle = key["shopTitle"];
            list.shopPrice = key["shopPrice"];
            list.shopCoverImg = key["shopCoverImg"];
            list.shopSelectInfo = JSON.parse(key["shopSelectInfo"]);
            collectList.push(list);
          }
          that.setData({
            collectList: collectList
          });

        }

      },
      function (failRes) {

      });
  },



  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    this.getCollectList();


  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onShareAppMessage: function () {
    return {
      title: '我的收藏列表',
      desc: '我想买这些',
      path: 'pages/index/index'
    }
  }



})