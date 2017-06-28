// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classifyList: ["三星三星", "小米", "华为", "vivo", "oppo", "魅族", "小米", "华为", "vivo", "oppo", "魅族", "小米", "华为", "vivo", "oppo", "魅族"],
    curIndex:1,

    shopList:[
      {
        shopTypeID:"111",
        shopImg:"/img/shop_info_select1.jpg",
        shopName:"小米6",
      },
      {
        shopTypeID: "111",
        shopImg: "/img/shop_info_select2.jpg",
        shopName: "小米5",
      },
      {
        shopTypeID: "111",
        shopImg: "/img/shop_info_select3.jpg",
        shopName: "小米4",
      },
      {
        shopTypeID: "111",
        shopImg: "/img/shop_info_select4.jpg",
        shopName: "小米3",
      },
    ],

  },


  onClickMenu:function(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      curIndex:index
    });
  },


  onItemClick:function(e){
    let shopTypeID = e.currentTarget.dataset.shopTypeID;
    wx.navigateTo({
      url: '../../pages/shoplist/shoplist'
    })
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