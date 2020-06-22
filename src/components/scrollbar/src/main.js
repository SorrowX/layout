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
        if (this.native) {
            return h(this.tag, {
                ref: 'scrollbar',
                attrs: {
                    native: String(this.native)
                }
            }, this.$slots.default)
        } else {
            const divTag = 'div'
            return h(this.tag, {
                attrs: {
                    native: String(this.native)
                }
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