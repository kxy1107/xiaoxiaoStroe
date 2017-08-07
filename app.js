//app.js
let util = require('utils/util.js');
App({
  onLaunch: function () {
    var that = this;
    // Do something initial when launch.
    //调用登录接口

  },

  getUserInfo: function (userInfoRes) {
    var that = this;
    wx.login({
      success: function (loginRes) {
        wx.getUserInfo({
          success: function (res) {
            let code = loginRes.code;
            let iv = res.iv;
            let encryptedData = res.encryptedData;
            let url = that.globalData.serverAddress + 'login';
            let data = {
              Code: code,
              Iv: iv,
              EncryptedData: encryptedData,
            }
            util.HttpGet(url, data, "正在登录",
              function (successRes) {
                if(successRes.Code == 1){
                  that.globalData.userInfo = successRes.UserInfo;
                }
                return typeof userInfoRes == "function" && userInfoRes(successRes);
               
               
              },
              function (failRes) {
                return typeof userInfoRes == "function" && userInfoRes(false);
              });
          }
        })
      }
    })
  },


  globalData: {
    userInfo: null,
    serverAddress: 'http://localhost:8028/wx/',
    otherAddressInfo: null,
  }
})