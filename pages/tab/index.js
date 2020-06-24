// pages/tab/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 记录当前点击的按钮的索引
        current: 0,
        // 给按钮组成一个数组
        buttons: [
            "新闻", "体育", "娱乐"
        ]
    },

    // 点击按钮的事件,event是事件函数中默认的参数
    handleClick(event){
        // 获取索引值,就是模板中data-index="{{index}}" 的index的值
        var index = event.currentTarget.dataset.index;

        // 修改data中current的值
        this.setData({
            current: index
        })
    }
})