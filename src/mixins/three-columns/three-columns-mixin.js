import LayScrollbar from '@/components/scrollbar'
import common from '@/mixins/common'
import threeColumnsProps from './three-columns-props'

export default {
    mixins: [ common, threeColumnsProps ],
    components: { LayScrollbar },
    data() {
        return {
            parentStyle: {}
        }
    },
    methods: {
        getMaxHeight() {
            let refs = this.$refs
            return Math.max.apply(null, Object.keys(refs).map(key => refs[key]['offsetHeight']))
        }
    }
}