export default {
    props: {
        use: { // 使用哪种类型的布局方式
            type: [String],
            default: 'float-overflow'
        },
        width: { // .left容器的宽度
            type: [String],
            default: '0px'
        },
        height: { // .left和.right容器的高度
            type: [String],
            default: 'auto'
        },
        overflow: { // .left和.right容器的滚动条是否出现
            type: [String],
            default: 'auto'
        },
        leftStyle: { // .left容器style样式
            type: [Object],
            default: () => {}
        },
        leftClass: { // left容器class样式类
            type: [String],
            default: ''
        },
        rightStyle: { // .right容器style样式
            type: [Object],
            default: () => {}
        },
        rightClass: { // right容器class样式类
            type: [String],
            default: ''
        }
    }
}