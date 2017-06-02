//index.js
//获取应用实例
var app = getApp();
var swiperIndex = 0;
Page({
  data: {
    indicatorDots: "true",//是否显示面板指示点
    autoplay: "true",//是否自动切换
    interval: "5000",//自动切换时间间隔
    duration: "1000",//滑动动画时长
    showtab: 0,  //顶部选项卡索引
    navs: [
      {
        icon: "../../img/icon_clothing.png",
        text: "服装"
      },
      {
        icon: "../../img/icon_shoes.png",
        text: "鞋子"
      },
      {
        icon: "../../img/icon_handbag.png",
        text: "包包"
      },
      {
        icon: "../../img/icon_jewelry.png",
        text: "珠宝"
      },
      {
        icon: "../../img/icon_artware.png",
        text: "工艺品"
      },

    ],
    shopList: [
      {
        shopID: "1",
        imgUrl: "../../img/huawei_zhuanqu_1.jpg",
        shopName: "【年货节|买赠99元大礼包】Huawei/华为 畅享6全网通4G智能手机",
        price: "￥1299",
        sales: "3401人浏览"
      },
      {
        shopID: "2",
        imgUrl: "../../img/huawei_zhuanqu_2.jpg",
        shopName: "【年货节】Huawei/华为 M3 平板电脑 8.4英寸哈曼卡顿联合设计",
        price: "￥2288",
        sales: "5386人浏览"
      },
      {
        shopID: "3",
        imgUrl: "../../img/huawei_zhuanqu_3.jpg",
        shopName: "【年货节|直降20元】华为路由 WS832 智能无线路由器1200M",
        price: "￥249",
        sales: "2560人浏览"
      },
      {
        shopID: "4",
        imgUrl: "../../img/huawei_zhuanqu_4.jpg",
        shopName: "【年货节|下单立减200|送178元礼】Huawei/华为 G9 青春版4G手机",
        price: "￥1499",
        sales: "5462人浏览"
      },
      {
        shopID: "5",
        imgUrl: "../../img/huawei_zhuanqu_5.jpg",
        shopName: "【年货节|直降100元起】Huawei/华为 华为畅享5S 双卡双待4G手机",
        price: "￥999",
        sales: "8336人浏览"
      },
      {
        shopID: "6",
        imgUrl: "../../img/huawei_zhuanqu_6.jpg",
        shopName: "【年货节|年度旗舰】Huawei/华为 Mate 9 32/64GB智能手机限量抢",
        price: "￥3999",
        sales: "3.1万人浏览"
      },
    ],


    imgUrls: [
      "../../img/huawei_mate9.jpg",
      "../../img/rongyao_v8.jpg",
      "../../img/rongyao_play5c.jpg"
    ],


  },
  setTab: function (e) { //设置选项卡选中索引
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: Number(edata.tabindex),
    })
  },

  //点击轮播图
  swiperClick: function () {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },



  //轮播图轮播事件
  swiperChange: function (e) {
    swiperIndex = e.detail.current
  },
  /**
   * 首页导航点击事件
   */
  navClick: function (e) {
    wx.navigateTo({
      url: '../shoplist/shoplist?itemType=' + e.currentTarget.dataset.type,

    })
  },

  /**
   * 最热
   */
  volumeClick: function () {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },
  /**
   * 最新
   */
  newClick: function () {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },
  /**
   * 最火
   */
  hotClick: function () {
    wx.navigateTo({
      url: '../../pages/shopinfo/shopinfo?id=' + swiperIndex,
    })
  },

  onLoad: function () {
  }
})
