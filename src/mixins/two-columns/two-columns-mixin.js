import LayScrollbar from '@/components/scrollbar'
import common from '@/mixins/common'
import twoColumnsProps from './two-columns-props'

export default {
    mixins: [ common, twoColumnsProps ],
    components: { LayScrollbar }
}