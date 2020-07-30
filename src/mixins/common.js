import LayScrollbar from '@/components/scrollbar'
import { isArray, isObject } from '@/utils/util'

export default {
    components: { LayScrollbar },
    computed: {
        native() {
            if (
                this.overflow === 'hidden' ||
                (this.height === 'auto' && this.overflow === 'auto')
            ) {
                return true
            }
            return this.nativeScrollbar
        }
    },
    methods: {
        getStyle(style, propStyle) {
            let arrStyle = []
            arrStyle.push(style)
            if (isObject(propStyle)) {
                arrStyle.push(propStyle)
            } else if (isArray(propStyle)) {
                arrStyle = arrStyle.concat(propStyle)
            }
            return arrStyle
        }
    }
}