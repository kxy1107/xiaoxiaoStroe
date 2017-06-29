// pages/mine/mine.js
Page({
  data:{
    userInfo:null,
    myWechatImg:"../../img/my_wechat.jpg",
    contactList:[
      {
        contactType:"phone",
        contactIcon:"../../img/icon_contact_phone.png",
        contactIconName:"15111112222"
      },
      {
        contactType: "qq",
        contactIcon: "../../img/icon_contact_qq.png",
        contactIconName: "573240000"
      },
      {
        contactType: "wechat",
        contactIcon: "../../img/icon_contact_wechat.png",
        contactIconName: "xiaoke"
      },
    ]
  },

  onItemClick:function(e){
    let index = e.currentTarget.dataset.index;
    if (this.data.contactList[index]["contactType"] == "phone"){
      wx.makePhoneCall({
        phoneNumber: this.data.contactList[index]["contactIconName"]
      })
    }
  },

  onClickQrCode:function(){
    wx.previewImage({
      current: this.data.myWechatImg, // 当前显示图片的http链接
      urls: [this.data.myWechatImg] // 需要预览的图片http链接列表
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.setData({
      userInfo:getApp().globalData.userInfo,
    });
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})