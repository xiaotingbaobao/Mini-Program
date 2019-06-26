Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*菜单索引被点击*/
    currentIndexNav:0,
    navList:[],
      // 轮播图数据
      swiperList:[],
      // 视频列表数据
      videosList:[]

  },
    // 点击首页导航按钮时
  activeNav(e){
      //console.log("123")
      this.setData({
          currentIndexNav:e.target.dataset.index
      })
  },
    // 获取首页导航数据
  getNavList(){
    let that=this;
    wx.request({
        url:"http://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
        success(res){
          //console.log(res);
            if(res.data.code===0){
              that.setData({
                  navList:res.data.data.navList
              })
            }
        }
    })
  },
  // 获取轮播图数据
    getSwiperList(){
      let that=this;
        wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
        success(res){
          //console.log(res);
            if(res.data.code===0){
                that.setData({
                    swiperList:res.data.data.swiperList
                })
            }
        }
    })
    },
    //获取视频列表
    getVideosList(){
      let that=this;
        wx.request({
            url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
            success(res){
            // console.log(res)
              if(res.data.code===0){
                  that.setData({
                      videosList:res.data.data.videosList
                  })
              }
        }
        })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //获取首页导航数据
      this.getNavList();
      //调用获取轮播图数据的函数
      this.getSwiperList();
      //调用视频列表函数
      this.getVideosList();
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