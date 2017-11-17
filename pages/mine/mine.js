// pages/mine/mine.js
var app = getApp();
let util = require("../../utils/util.js");
let belongUser = "";
Page({
  data: {
    myInfo: null,
    checking: false,
    isMySelf: false,
  },

  onItemClick: function (e) {
    let index = e.currentTarget.dataset.index;
    if (this.data.contactList[index]["contactType"] == "phone") {
      wx.makePhoneCall({
        phoneNumber: this.data.contactList[index]["contactIconName"]
      })
    }
  },

  onClickQrCode: function () {
    wx.previewImage({
      current: this.data.myWechatImg, // 当前显示图片的http链接
      urls: [this.data.myWechatImg] // 需要预览的图片http链接列表
    })
  },

  onClickRegisterNow: function () {
    wx.navigateTo({
      url: '../../pages/registerShop/registerShop',
    })
  },


  getMyInfo: function () {
    console.log("getMyInfo---------")
    let that = this;
    let url = app.globalData.serverAddress + 'getMyInfo';
    let data = {
      UserNo: app.globalData.belongUser,

    };
    util.HttpGet(url, data, "",
      function (successRes) {
        if (successRes.Code == 1) {
          if (successRes.MyInfo != null) {
            that.setData({
              myInfo: successRes.MyInfo

            });
          }

        } else {
          that.setData({
            checking: true,
          });
        }

      },
      function (failRes) {

      });
  },

  clickEnterMyShop: function () {
    if (belongUser == "checking") {
      wx.showToast({
        title: '正在审核中，请耐心等待',
      })
    } else if (belongUser == "") {
      wx.showToast({
        title: '请先注册成为商家',
      })
    } else {
      app.globalData.belongUser = belongUser;
      wx.switchTab({
        url: '../../pages/index/index',
      })
    }

  },

  //获取当前用户商店
  enterMyShop: function () {
    let that = this;
    let url = app.globalData.serverAddress + 'getMyInfo';
    let data = {
      UserNo: app.globalData.userInfo.UserNo,
    };
    util.HttpGet(url, data, "",
      function (successRes) {
        if (successRes.Code == 1) {
          if (successRes.MyInfo != null) {
            belongUser = app.globalData.userInfo.UserNo;
            that.setData({
              isMySelf: true
            });

          } else {
            belongUser = "checking"
          }
        }
      },
      function (failRes) {

      });
  },

  onLoad: function (options) {
    let that = this;
    // 页面初始化 options为页面跳转所带来的参数
    if (app.globalData.userInfo != null) {
      that.getMyInfo();
    } else {
      app.getUserInfo(function (res) {
        if (res) {
          that.getMyInfo();
        }
      });
    }
    that.enterMyShop();


  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    if (this.data.myInfo == null) {
      this.getMyInfo();
    }


  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})