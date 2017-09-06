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
        console.log("app.js --login-success ")
        wx.getUserInfo({
          success: function (res) {
            console.log("app.js --getUserInfo-success ")
            console.log(res)
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
                console.log("successRes")
                console.log(successRes)
                if(successRes.Code == 1){
                  that.globalData.userInfo = successRes.UserInfo;
                }
                return typeof userInfoRes == "function" && userInfoRes(successRes);
               
               
              },
              function (failRes) {
                console.log("failRes")
                console.log(failRes)
                return typeof userInfoRes == "function" && userInfoRes(false);
              });
          }
        })
      }
    })
  },


  globalData: {
    userInfo: null,
    serverAddress: 'http://192.168.11.123:8028/wx/',
    otherAddressInfo: null,
  }
})