import twoColumnsMixin from '@/mixins/two-columns-mixin'
import LeftColumnFixedNative from './left-column-fixed-native'
import LeftColumnFixed from './left-column-fixed'

export default {
    name: 'LeftColumn',
    mixins: [ twoColumnsMixin ],
    components: {
        LeftColumnFixed,
        LeftColumnFixedNative
    },
    data() {
        return {
            curComp: ''
        }
    },
    created() {
        this.curComp = this.nativeScrollbar
            ? LeftColumnFixedNative
            : LeftColumnFixed
    },
    render(h) {
        return h(this.curComp, {
            tag: 'components',
            props: this.$props,
            scopedSlots: {
                left: () => this.$slots.left,
                right: () => this.$slots.right
            }
        })
    }
}