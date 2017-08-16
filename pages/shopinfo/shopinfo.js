// pages/shopinfo/shopinfo.js
var shopDialogInfo = {};
var selectIndex;
var attrIndex;
var selectIndexArray = [
];
var app = getApp();
let util = require("../../utils/util.js");
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
      shopViews:0,//浏览量
      shopDescribe:"",//详情描述
      bannerList:[],//轮播图
      attributeList:[],//属性列表
    },
    //商品图片详情
    isShowSelectInfo: true,//是否隐藏选择信息详情
    shopSelectInfoHaveSelect:"已选",
    shopSelectInfo: {
      selectInfoImg: "../../img/shop_info_select1.jpg",//弹窗商品图片
      selectInfoprice: "￥1299",//弹窗商品价格
      shopSelectInfoHaveSelect: "已选： ",
      selectInfoAttributeList: [
        {
          AttributeName: "机身颜色",
          AttributeNameList: [
            {
              AttributeID: "1001",
              Name: "金色",
              IsSelect: true,
            },
            {
              AttributeID: "1002",
              Name: "白色",
              IsSelect: false,
            },
            {
              AttributeID: "1003",
              Name: "灰色",
              IsSelect: false,
            },
            {
              AttributeID: "1004",
              Name: "粉色",
              IsSelect: false,
            },
            {
              AttributeID: "1005",
              Name: "蓝色",
              IsSelect: false,
            },

          ],
        },
        {
          AttributeName: "存储容量",
          AttributeNameList: [
            {
              AttributeID: "4001",
              Name: "16GB",
              IsSelect: true,
            },
            {
              AttributeID: "4002",
              Name: "32GB",
              IsSelect: false,
            },
            {
              AttributeID: "4003",
              Name: "64GB",
              IsSelect: false,
            },
            {
              AttributeID: "4004",
              Name: "128GB",
              IsSelect: false,
            },


          ],
        },
        {
          AttributeName: "网络类型",
          AttributeNameList: [
            {
              AttributeID: "2001",
              Name: "4G全网通",
              IsSelect: true,
            },
            {
              AttributeID: "2002",
              Name: "4G电信",
              IsSelect: false,
            },
            {
              AttributeID: "2003",
              Name: "4G移动",
              IsSelect: false,
            },

          ],
        },
        {
          AttributeName: "套餐类型",
          AttributeNameList: [
            {
              AttributeID: "3001",
              Name: "官方标配",
              IsSelect: true,
            },
            {
              AttributeID: "3002",
              Name: "套餐1",
              IsSelect: false,
            },
            {
              AttributeID: "3003",
              Name: "套餐2",
              IsSelect: false,
            },
            {
              AttributeID: "3004",
              Name: "套餐3",
              IsSelect: false,
            },
            {
              AttributeID: "3005",
              Name: "套餐4",
              IsSelect: false,
            },

          ],
        },
        {
          AttributeName: "套餐类型",
          AttributeNameList: [
            {
              AttributeID: "3001",
              Name: "官方标配",
              IsSelect: true,
            },
            {
              AttributeID: "3002",
              Name: "套餐1",
              IsSelect: false,
            },
            {
              AttributeID: "3003",
              Name: "套餐2",
              IsSelect: false,
            },
            {
              AttributeID: "3004",
              Name: "套餐3",
              IsSelect: false,
            },
            {
              AttributeID: "3005",
              Name: "套餐4",
              IsSelect: false,
            },

          ],
        },
      ],
    },




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
  //点击弹窗的商品属性
  clickAttr: function (e) {
    selectIndex = e.currentTarget.dataset.selectIndex;
    attrIndex = e.currentTarget.dataset.attrIndex;
    var count = shopDialogInfo.selectInfoAttributeList[selectIndex].AttributeNameList.length;
    for (var i = 0; i < count; i++) {
      shopDialogInfo.selectInfoAttributeList[selectIndex].AttributeNameList[i].IsSelect = false;
    }
    shopDialogInfo.selectInfoAttributeList[selectIndex].AttributeNameList[attrIndex].IsSelect = true;

    var name = shopDialogInfo.selectInfoAttributeList[selectIndex].AttributeNameList[attrIndex].Name;//点击属性的名称


    var shopSelectInfoHaveSelectName = "";
    //点击过，修改属性
    selectIndexArray[selectIndex].value = name;
    var selectIndexArraySize = selectIndexArray.length;
    //将数组的所有属性名拼接起来
    for (var i = 0; i < selectIndexArraySize; i++) {
      shopSelectInfoHaveSelectName += ' "' + selectIndexArray[i].value + '" ';
    }

    shopDialogInfo.shopSelectInfoHaveSelect = "已选:" + shopSelectInfoHaveSelectName;
    this.setData({
      shopSelectInfo: shopDialogInfo,
    });



  },


  //点击确定加入购物车
  sumbitShopInfo: function () {
    this.setData({
          isShowSelectInfo: true,
        });
  },

  getShopDetailInfo:function(){
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
        }

      },
      function (failRes) {

      });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    shopID = options.id;
    this.getShopDetailInfo();

    // shopDialogInfo = this.data.shopSelectInfo;
    // var name = "";
    // var size = shopDialogInfo.selectInfoAttributeList.length;
    // for (var i = 0; i < size; i++) {
    //   selectIndexArray.push({ key: i, value: shopDialogInfo.selectInfoAttributeList[i].AttributeNameList[0].Name });
    //   name += ' "' + selectIndexArray[i].value + '" ';
    // }

    // shopDialogInfo.shopSelectInfoHaveSelect = "已选:" + name;
    // this.setData({
    //   shopSelectInfo: shopDialogInfo,
    // });

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