import { isObject } from '@/utils/utils'
export default {
    name: 'LayCol',
    inject: ['row'],
    props: {
        span: {
            type: Number,
            default: 24
        },
        push: Number,
        pull: Number,
        offset: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],
        tag: {
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
                const value = this['$props'][prop]
                if (value || value === 0) {
                    prop === 'span'
                        ? classList.push(`${prefix}-${value}`)
                        : classList.push(`${prefix}-${prop}-${value}`)
                }
            })
            ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
                const value = this['$props'][size]
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