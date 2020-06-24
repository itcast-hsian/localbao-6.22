Page({
  data: {
    banners: []
  },

  // 页面的生命周期，页面加载完毕后触发
  onLoad(){

    // 请求轮播图的api接口，把返回的接口数据替换掉data中的静态数据
    // wx.request的用法非常类似于jquery的ajax
    wx.request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata', 
      // 成功的回调函数，参数res就是接口返回的数据
      success: (res) => {

        // 把 res.data的message属性给解构出来
        // const {message} = res.data;
        const message = res.data.message;

        // 把 message的值赋给banner
        this.setData({
          banners: message
        })
      }
    })
  }
})
