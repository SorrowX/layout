import LayScrollbar from '@/components/scrollbar'
import common from '@/mixins/common'
import threeColumnsProps from './three-columns-props'

export default {
    mixins: [ common, threeColumnsProps ],
    components: { LayScrollbar },
    methods: {
        updateScrollbar() {
            const refs = this.$refs
            const scrollbars = [
                refs.leftLayScrollbar,
                refs.centerLayScrollbar,
                refs.rightLayScrollbar
            ]
            scrollbars.forEach(c => c.updateScrollbar())
        }
    }
}