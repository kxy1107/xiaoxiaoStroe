// pages/shopinfo/shopinfo.js
var shopDialogInfo = {};
var selectIndex;
var attrIndex;
var selectIndexArray = [
];
Page({
  data: {
    indicatorDots: "true",//是否显示面板指示点
    autoplay: "true",//是否自动切换
    interval: "5000",//自动切换时间间隔
    duration: "1000",//滑动动画时长
    imgUrls: [
      "../../img/shop_info_one1.jpg",
      "../../img/shop_info_one2.jpg",
      "../../img/shop_info_one3.jpg",
      "../../img/shop_info_one4.jpg",
      "../../img/shop_info_one5.jpg"
    ],
    //商品详情
    shopInfo:
    {
      shopTitle: "【年货节|买赠99元大礼包】Huawei/华为 畅享6全网通4G智能手机",
      sales: "浏览量2555",
    },
    //商品图片详情
    shopInfoImgList: [
      {
        imgUrl: "../../img/shop_info_one_list_img1.jpg",
        height: "300rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img2.jpg",
        height: "300rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img3.jpg",
        height: "300rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img4.jpg",
        height: "804rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img5.jpg",
        height: "804rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img6.jpg",
        height: "490rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img7.jpg",
        height: "200rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img8.jpg",
        height: "1000rpx",
      },
      {
        imgUrl: "../../img/shop_info_one_list_img9.jpg",
        height: "1000rpx",
      },


    ],

  },
 

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

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