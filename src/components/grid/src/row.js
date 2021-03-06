export default {
    name: 'LayRow',
    provide() {
        return {
            row: this
        }
    },
    props: {
        type: String, // flex 开启弹性布局
        gutter: { // 项目之间的间隔
            type: Number,
            default: 0
        },
        justify: { // flex容器的justify-content属性
            type: String,
            default: 'start' // start/end/center/space-around/space-between/space-evenly
        },
        align: { // flex容器的align-items属性
            type: String,
            default: 'top' // top/middle/bottom
        },
        tag: { // 自定义标签
            type: String,
            default: 'div'
        }
    },
    computed: {
        rowStyle() {
            const styleMap = {}
            if (this.gutter) {
                styleMap['margin-left'] = styleMap['margin-right'] = `-${this.gutter / 2}px` 
            }
            return styleMap
        },
        rowClass() {
            const prefix = 'lay-row', classList = [prefix]
            if (this.type === 'flex') {
                classList.push(`${prefix}--flex`)
            }
            classList.push(this.justify !== 'start' ? `is-justify-${this.justify}` : '')
            classList.push(this.align !== 'top' ? `is-align-${this.align}` : '')
            return classList.filter(i => i)
        }
    },
    render(h) {
        return h(this.tag, {
            style: this.rowStyle,
            class: this.rowClass
        }, this.$slots.default)
    }
}