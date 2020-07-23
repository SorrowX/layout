import LayScrollbar from '@/components/scrollbar'
import common from '@/mixins/common'
import twoColumnsProps from './two-columns-props'

export default {
    mixins: [ common, twoColumnsProps ],
    components: { LayScrollbar },
    methods: {
        updateScrollbar() {
            const refs = this.$refs
            const scrollbars = [
                refs.leftLayScrollbar,
                refs.rightLayScrollbar
            ]
            scrollbars.forEach(c => c.updateScrollbar())
        }
    }
}