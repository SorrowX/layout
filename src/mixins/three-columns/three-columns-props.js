export default {
    props: {
        adapt: { // 自适应
            type: String,
            default: 'right' // left/center/right
        },
        nativeScrollbar: { // 是否使用原生滚动条
            type: Boolean,
            default: false
        },
        autoshow: { // 滚动条是否自动显示
            type: Boolean,
            default: false
        },
        leftWidth: { // left容器的宽度
            type: String,
            default: '0px'
        },
        centerWidth: { // center容器的宽度
            type: String,
            default: '0px'
        },
        rightWidth: { // right容器的宽度
            type: String,
            default: '0px'
        },
        height: { // left/center/right容器的高度
            type: String,
            default: 'auto'
        },
        overflow: { // left/center/right容器的滚动条是否出现 auto/visible/hidden/scroll/inherit
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
        centerStyle: { // center容器style样式
            type: [Object, Array],
            default: () => {}
        },
        centerClass: { // center容器class样式类
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