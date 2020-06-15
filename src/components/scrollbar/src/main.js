const { GeminiScrollbar, CLASSNAMES } = require('./gemini-scrollbar')

export default {
    name: 'LayScrollbar',
    props: {
        autoshow: {
            type: Boolean,
            default: true
        },
        forceGemini: {
            type: Boolean,
            default: false
        },
        onResize: {
            type: Function,
            default: () => {}
        },
        minThumbSize: {
            type: Number,
            default: 20
        },
        className: {
            type: [String, Object, Array],
            default: ''
        },
        native: {
            type: Boolean,
            default: false
        },
        tag: {
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