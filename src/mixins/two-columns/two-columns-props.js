export default {
    props: {
        fix: { // 左边定宽/右边定宽
            type: String,
            default: 'left' // left/right
        },
        nativeScrollbar: { // 是否使用原生滚动条
            type: Boolean,
            default: false
        },
        width: { // left/right容器的宽度
            type: String,
            default: '0px'
        },
        height: { // left和right容器的高度
            type: String,
            default: 'auto'
        },
        overflow: { // left和right容器的滚动条是否出现
            type: String,
            default: 'auto'
        },
        leftStyle: { // left容器style样式
            type: [Object, Array],
            default: () => {}
        },
        leftClass: { // left容器class样式类
            type: [String, Object, Array],
            default: ''
        },
        rightStyle: { // right容器style样式
            type: [Object, Array],
            default: () => {}
        },
        rightClass: { // right容器class样式类
            type: [String, Object, Array],
            default: ''
        }
    }
}