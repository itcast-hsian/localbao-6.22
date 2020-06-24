// pages/shoplist/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 保存商品列表s
        goods: [],
        // 页数
        pagenum: 1,
        // 是否有更多
        hasMore: true
    },

    onLoad(){
        this.fetchData();
    },

    // 封装一个专门用于请求数据的方法
    fetchData(){
        if(this.data.hasMore === false){
            return;
        }

        // 请求商品的列表数据
        wx.request({
            url: "https://api-hmugo-web.itheima.net/api/public/v1/goods/search",
            data: {
                query: "曲面电视",
                pagenum: this.data.pagenum, // 页数
                pagesize: 10 // 获取数据的条数
            },
            success: res => {
                // 商品列表
                const goods = res.data.message.goods;

                // 如果返回的数据小于10条，认为已经是最后一页
                if(goods.length < 10){
                    this.setData({
                        hasMore: false
                    })
                }

                // 赋值给data
                this.setData({
                    goods: this.data.goods.concat(goods)
                })
            }
        })
    },

    /**
     * 1.判断是否滚动到了底部
     * 2.到了底部之后需要再次发起请求，页数加1, 处理新的数据覆盖之前已有的数据
     * 3.在请求之前需要判断是否已经加载到最后一页
     */
    onReachBottom(){
        // 页数加1
        this.setData({
            pagenum: this.data.pagenum + 1
        })
        this.fetchData();
    }
})