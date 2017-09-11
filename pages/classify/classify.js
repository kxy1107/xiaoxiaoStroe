// pages/classify/classify.js
var app = getApp();
let util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList: [],//类型列表
    curIndex: 0,
    shopList: [],//子类型列表

  },

  //点击类型列表
  onClickMenu: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      curIndex: index
    });
    this.getSubTypeList();
  },

  //点击子类型列表
  onItemClick: function (e) {
    let shopTypeID = e.currentTarget.dataset.type;
    let shopTypeName = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../../pages/shoplist/shoplist?typeID=' + shopTypeID + "&typeName=" + shopTypeName
    })
  },

  //请求服务获取类型列表
  getTypeList: function () {
    let that = this;
    let url = app.globalData.serverAddress + 'getTypeList';
    let userNo = app.globalData.userInfo == null ? "" : app.globalData.userInfo.UserNo;
    let belongUser = app.globalData.belongUser == null ? "" : app.globalData.belongUser;
    let data = {
      UserNo: userNo,
      BelongUser:belongUser,

    };
    util.HttpGet(url, data, "正在加载",
      function (successRes) {
        if (successRes.Code == 1) {
          that.setData({
            classifyList: successRes.TypeList
          });
          that.getSubTypeList();
        }

      },
      function (failRes) {

      });
  },

  //请求服务获取子类型列表
  getSubTypeList: function () {
    let that = this;
    let typeID = that.data.classifyList[that.data.curIndex].typeID;
    let url = app.globalData.serverAddress + 'getSubTypeList';
    let userNo = app.globalData.userInfo == null ? "" : app.globalData.userInfo.UserNo;
    let belongUser = app.globalData.belongUser == null ? "" : app.globalData.belongUser;
    let data = {
      UserNo: userNo,
      TypeID: typeID,
      BelongUser: belongUser,
    };
    util.HttpGet(url, data, "正在加载",
      function (successRes) {
        if (successRes.Code == 1) {
          that.setData({
            shopList: successRes.SubTypeList
          });
        }

      },
      function (failRes) {

      });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTypeList();
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