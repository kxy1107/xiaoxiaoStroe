// pages/registerShop/registerShop.js
let app = getApp();
let util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noRegister: true,
  },



  onClickPlatform:function(){
    wx.navigateTo({
      url: '../platformProtocol/platformProtocol',
    });
  },

  //点击注册
  onClickRegister: function (e) {
    var phone = e.detail.value.phone;
    var pwd = e.detail.value.pwd;
    var pwdAgain = e.detail.value.pwdAgain;
    var formID = e.detail.formId;
    console.log(e);

    if (!this.checkInput(phone, pwd, pwdAgain)) {
      return;
    }
    let that = this;
    let url = app.globalData.serverAddress + 'registerShoper';
    let data = {
      UserNo: app.globalData.userInfo.UserNo,
      Phone: phone,
      Password: pwd,
      FormID: formID,

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
  checkInput: function (phone, pwd, pwdAgain) {
    if (phone == "") {
      wx.showToast({
        title: '手机号不能为空',
      });
      return false;
    } else if (pwd.length < 6) {
      wx.showToast({
        title: '密码不能少于6位',
      });
      return false;
    } else if (pwdAgain != pwd) {
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


 
})