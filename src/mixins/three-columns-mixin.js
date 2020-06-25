import threeColumnsProps from '@/mixins/three-columns-props'
import LayScrollbar from '@/components/scrollbar'
import { isArray, isObject } from '@/utils/utils'

export default {
    mixins: [ threeColumnsProps ],
    components: { LayScrollbar },
    data() {
        return {
            parentStyle: {}
        }
    },
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
        },
        getMaxHeight() {
            let refs = this.$refs
            return Math.max.apply(null, Object.keys(refs).map(key => refs[key]['offsetHeight']))
        }
    }
}