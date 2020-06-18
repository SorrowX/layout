const { GeminiScrollbar, CLASSNAMES } = require('./gemini-scrollbar')

export default {
    name: 'LayScrollbar',
    props: {
        autoshow: { // 滚动条是否自动显示
            type: Boolean,
            default: false
        },
        forceGemini: {
            type: Boolean,
            default: false
        },
        onResize: { // 窗口改变时触发的回调
            type: Function,
            default: () => {}
        },
        minThumbSize: { // 滚动条的最小长度或高度
            type: Number,
            default: 20
        },
        className: { // 应用在根dom元素的css类名
            type: [String, Object, Array],
            default: ''
        },
        native: { // 是否使用原生滚动条
            type: Boolean,
            default: false
        },
        tag: { // 根dom的元素的标签名
            type: String,
            default: 'div'
        }
    },
    methods: {
        initScrollbar() {
            debugger
            this.scrollbar = new GeminiScrollbar({
                element: this.$el,
                autoshow: this.autoshow,
                forceGemini: this.forceGemini,
                onResize: this.onResize,
                minThumbSize: this.minThumbSize,
                createElements: false
            }).create()
        },
        destroyScrollbar() {
            this.scrollbar && this.scrollbar.destroy()
            this.scrollbar = null
        },
        updateScrollbar() {
            this.scrollbar && this.scrollbar.update()
        }
    },
    beforeCreate() {
        this.scrollbar = null // GeminiScrollbar instance
    },
    mounted() {
        if (!this.native) {
            this.initScrollbar()
        }
    },
    updated() {
        this.updateScrollbar()
    },
    destroyed() {
        this.destroyScrollbar()
    },
    render(h) {
        const nativeClassName = 'native-scrollbar-container'
        const divTag = 'div'
        if (this.native) {
            return h(this.tag, {
                class: nativeClassName,
                ref: 'scrollbar'
            }, this.$slots.default)
        } else {
            return h(this.tag, {
                class: this.className
            }, [
                h(divTag, {
                    class: CLASSNAMES.verticalScrollbar
                }, [
                    h(divTag, {
                        class: CLASSNAMES.thumb
                    })
                ]),
                h(divTag, {
                    class: CLASSNAMES.horizontalScrollbar
                }, [
                    h(divTag, {
                        class: CLASSNAMES.thumb
                    })
                ]),
                h(divTag, {
                    class: CLASSNAMES.view
                }, this.$slots.default)
            ])
        }
    }
}