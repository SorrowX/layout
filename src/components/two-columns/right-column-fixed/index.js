import twoColumnsMixin from '@/mixins/two-columns-mixin'
import RightColumnFixedNative from './right-column-fixed-native'
import RightColumnFixed from './right-column-fixed'

export default {
    name: 'RightColumn',
    mixins: [ twoColumnsMixin ],
    components: {
        RightColumnFixed,
        RightColumnFixedNative
    },
    data() {
        return {
            curComp: ''
        }
    },
    created() {
        this.curComp = this.nativeScrollbar
            ? RightColumnFixedNative
            : RightColumnFixed
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