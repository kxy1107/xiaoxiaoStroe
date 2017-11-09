// pages/registerShop/registerShop.js
let phoneNumber = "";
let password = "";
let passwordAgain = "";
let app = getApp();
let util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noRegister: true,
  },


  inputPhone: function (e) {
    phoneNumber = e.detail.value;
  },
  inputPassWord: function (e) {
    password = e.detail.value;
  },
  inputPassWordAgain: function (e) {
    passwordAgain = e.detail.value;
  },


  onClickPlatform:function(){
    wx.navigateTo({
      url: '../platformProtocol/platformProtocol',
    });
  },

  //点击注册
  onClickRegister: function () {
    if (!this.checkInput()) {
      return;
    }
    let that = this;
    let url = app.globalData.serverAddress + 'registerShoper';
    let data = {
      UserNo: app.globalData.userInfo.UserNo,
      Phone: phoneNumber,
      Password: password,

    };
    util.HttpGet(url, data, "",
      function (successRes) {
        if (successRes.Code == 1) {
          wx.showToast({
            title: successRes.Message,
          });
          that.setData({
            noRegister: false
          });
        }

      },
      function (failRes) {

      });

   
  },

  //输入框内容校验
  checkInput: function () {
    if (phoneNumber == "") {
      wx.showToast({
        title: '手机号不能为空',
      });
      return false;
    } else if (password.length < 6) {
      wx.showToast({
        title: '密码不能少于6位',
      });
      return false;
    } else if (passwordAgain != password) {
      wx.showToast({
        title: '两次输入的密码不一致',
      });
      return false;
    } else {
      return true;
    }
  },


  //点击关闭本页
  onClickClose: function () {
    wx.navigateBack();
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

  }
})