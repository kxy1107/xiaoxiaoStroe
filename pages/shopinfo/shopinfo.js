// pages/shopinfo/shopinfo.js

let attributeListInfo = [];//属性列表
let bannerImgList = [];//轮播图列表
var app = getApp();
let util = require("../../utils/util.js");
var WxParse = require('../../wxParse/wxParse.js');
let shopID = "";
Page({
  data: {
    indicatorDots: "true",//是否显示面板指示点
    autoplay: "true",//是否自动切换
    interval: "5000",//自动切换时间间隔
    duration: "1000",//滑动动画时长
    //商品详情
    shopInfo:
    {
      shopTitle: "",//标题
      shopPrice: "",//价格
      shopViews: 0,//浏览量
      shopDescribe: "",//详情描述
      bannerList: [],//轮播图
      attributeList: [],//属性列表
    },
    //商品图片详情
    isShowSelectInfo: true,//是否隐藏选择信息详情
    shopSelectInfoHaveSelect: "已选",
    selectAttributeValue: [],//选择的属性




  },
  //显示弹窗
  showSelectInfo: function () {
    this.setData({
      isShowSelectInfo: false,
    });

  },

  //隐藏弹窗
  hiddenSelectInfo: function () {
    this.setData({
      isShowSelectInfo: true,
    });
  },
  //禁止滑动
  notScroll: function () {

  },
  //点击轮播图图片
  clickSwiperImg:function(e){
    let url = e.currentTarget.dataset.url;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: bannerImgList // 需要预览的图片http链接列表
    })
  },


  //点击弹窗的商品属性
  clickAttr: function (e) {
    let attrIndex = e.currentTarget.dataset.attributeindex;
    let valueIndex = e.currentTarget.dataset.valueindex;
    let selectInfo = {
      attrID: attributeListInfo[attrIndex].attributeID,
      attrName: attributeListInfo[attrIndex].attributeName,
      valueID: attributeListInfo[attrIndex].attributeValueList[valueIndex].attributeValueID,
      valueName: attributeListInfo[attrIndex].attributeValueList[valueIndex].attributeValue,
    };
    let selectArr = this.data.selectAttributeValue;
  
    selectArr[attrIndex] = selectInfo;
    let selectText = "已选  ";
    for (let key of selectArr){
      if(typeof(key) != "undefined"){
        selectText += key.attrName + ":" + key.valueName + "  ";
      }
    }

    this.setData({
      selectAttributeValue: selectArr,
      shopSelectInfoHaveSelect: selectText
    });

  },


  //点击收藏
  collectShop: function () {

    let that = this;
    let url = app.globalData.serverAddress + 'collectShop';
    let data = {
      UserNo: app.globalData.userInfo.UserNo,
      ShopID: shopID,
      SelectAttr: JSON.stringify(that.data.selectAttributeValue)

    };
    util.HttpGet(url, data, "loading",
      function (successRes) {
        if (successRes.Code == 1) {
          wx.showToast({
            title: '收藏成功',
          });
          that.setData({
            isShowSelectInfo: true,
          });
        }else{
          wx.showToast({
            title: successRes.Message,
          });
        }

      },
      function (failRes) {

      });
  },

//获取商品信息
  getShopDetailInfo: function () {
    let that = this;
    let url = app.globalData.serverAddress + 'getShopInfoDetail';
    let data = {
      UserNo: app.globalData.userInfo.UserNo,
      ShopID: shopID

    };
    util.HttpGet(url, data, "正在加载",
      function (successRes) {
        if (successRes.Code == 1) {
          that.setData({
            shopInfo: successRes.ShopInfoList
          });
          attributeListInfo = successRes.ShopInfoList.attributeList;
          bannerImgList = successRes.ShopInfoList.bannerList;
          WxParse.wxParse('article', 'html', successRes.ShopInfoList.shopDescribe, that, 5);
        }

      },
      function (failRes) {

      });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    shopID = options.id;
    this.getShopDetailInfo();
    console.log("shopinfo:" + options)
  },
  onReady: function () {
    // 页面渲染完成

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})