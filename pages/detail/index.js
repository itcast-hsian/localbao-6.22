Page({
    data: {
        // 商品详情
        goods: {}
    },
    onLoad(query){
        // query是在商品列表页传递过来的参数
        const goods_id = query.goods_id;

        // 请求商品详情
        wx.request({
          url: 'https://api-hmugo-web.itheima.net/api/public/v1/goods/detail',
          data: {
            goods_id: goods_id
          },
          success: res => {
              const goods = res.data.message;

              this.setData({
                  goods: goods
              })
          }
        })
    }
})