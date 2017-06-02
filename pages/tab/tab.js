Page({
  data: {
    showtab: 0,  //顶部选项卡索引
    tabnav: {},  //顶部选项卡数据
  },
  onLoad: function () {
    this.setData({
      tabnav: {
        tabnum: 4,
        tabitem: [
          {
            "id": 1,
            "text": "推荐"
          },
          {
            "id": 2,
            "text": "最新"
          },
          {
            "id": 3,
            "text": "最热"
          },
          {
            "id": 4,
            "text": "最火"
          },
          
        ]
      },
    })
   
  },
 
  setTab: function (e) { //设置选项卡选中索引
    const edata = e.currentTarget.dataset;
    this.setData({
      showtab: Number(edata.tabindex),
    })
  },
 
})