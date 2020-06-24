
// 1.把index.js 除了data以外的属性全部删除掉，只保留data
// 2.在data中添加一个message属性，给一个任意的字符串值
// 3.把demo/index.html内容修改为 <text>{{ message }}</text>


Page({

    /**
     * 页面的初始数据
     */
    data: {
        message: "传智-黑马-实训小程序",
        photo: "https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00641-1473.jpg",
        // 性别
        gender: 1,
        // 列表渲染的数据
        person: [
            "小明",
            "小红",
            "小黄",
            "小白"
        ]
    },

    // 在data同级的位置声明事件处理函数
    handleClick(){
        // 切换性别(如何修改data的值)
        this.setData({
            gender: 0,
            message: "传智-黑马-本地宝"
        })  
    }
})



