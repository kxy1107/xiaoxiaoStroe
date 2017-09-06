// pages/shopcart/shopcart.js
var app = getApp();
let util = require("../../utils/util.js");
Page({
  data: {
    // cartShopList: [
    //   {
    //     shopImg: "../../img/shop_cart_img1.jpg",
    //     shopTitle: "电脑耳机头戴式游戏网吧耳麦带麦克风盾台式kinbas视外桃园 VP-T7",
    //     shopSelectInfo: "套餐类型:官方标配;颜色分类:黄白色色以配手机单孔转接线",
    //     shopPrice: "25.80",
    //     shopCount: 1,
    //   },
    //   {
    //     shopImg: "../../img/shop_cart_img2.jpg",
    //     shopTitle: "毛衣女装秋冬外套连帽中长款加厚宽松针织开衫外搭长袖毛衣学生女",
    //     shopSelectInfo: "颜色分类:卡黄色;尺码:天猫品质 均码 圆通",
    //     shopPrice: "89.00",
    //     shopCount: 2,
    //   },
    //   {
    //     shopImg: "../../img/shop_cart_img3.jpg",
    //     shopTitle: "蒙牛旗舰店 甜小嗨甜牛奶250ml*12盒*2箱（男版）",
    //     shopSelectInfo: "",
    //     shopPrice: "102.00",
    //     shopCount: 10,
    //   },
    //   {
    //     shopImg: "../../img/shop_cart_img4.jpg",
    //     shopTitle: "高圆圆杨幂明星同款红色毛呢连衣裙女韩版长袖中长款A字打底裙冬",
    //     shopSelectInfo: "颜色分类:红色;尺码:M",
    //     shopPrice: "188.00",
    //     shopCount: 1,
    //   },
    //   {
    //     shopImg: "../../img/shop_cart_img5.jpg",
    //     shopTitle: "PINZIKO 冬新中长款修身侧边绑带连衣裙鱼尾下摆连衣裙CM64048",
    //     shopSelectInfo: "颜色分类:黑色;尺码:均码",
    //     shopPrice: "148.00",
    //     shopCount: 5,
    //   }
    // ]
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
    let data = {
      UserNo: app.globalData.userInfo.UserNo
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