import { isObject } from '@/utils/util'
export default {
    name: 'LayCol',
    inject: ['row'],
    props: {
        span: { // 项目宽度的占比
            type: Number,
            default: 24
        },
        push: Number, // 向右偏移
        pull: Number, // 向左偏移
        offset: Number, // 向右偏移
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        tag: { // 自定义标签
            type: String,
            default: 'div'
        }
    },
    computed: {
        colStyle() {
            const styleMap = {}
            let gutter = this.row.gutter
            if (gutter) {
                styleMap['padding-left'] = styleMap['padding-right'] = `${gutter / 2}px`
            }
            return styleMap
        },
        colClass() {
            const prefix = 'lay-col', classList = [prefix]
            ;['span', 'offset', 'push', 'pull'].forEach(prop => {
                const value = this[prop]
                if (value || value === 0) {
                    prop === 'span'
                        ? classList.push(`${prefix}-${value}`)
                        : classList.push(`${prefix}-${prop}-${value}`)
                }
            })
            ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
                const value = this[size]
                if (typeof value === 'number' && (value || value === 0)) {
                    classList.push(`${prefix}-${size}-${value}`)
                } else if (isObject(value)) {
                    Object.keys(value).forEach(key => {
                        key === 'span'
                            ? classList.push(`${prefix}-${size}-${value[key]}`)
                            : classList.push(`${prefix}-${size}-${key}-${value[key]}`)
                    })
                }
            })
            return classList
        }
    },
    render(h) {
        return h(this.tag, {
            style: this.colStyle,
            class: this.colClass
        }, this.$slots.default)
    }
}