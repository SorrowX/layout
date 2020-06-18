<template>
    <component :is="curComponent" v-bind="$props">
        <template v-slot:left>
            <slot name="left"></slot>
        </template>
        <template v-slot:right>
            <slot name="right"></slot>
        </template>
    </component>
</template>

<script>
    import { capitalize } from '@/utils/utils'
    import twoColumnsMixin from '@/mixins/two-columns-mixin'
    import LeftColumn from './left-column-fixed'
    import RightColumn from './right-column-fixed'

    export default {
        name: 'LayTwoColumns',
        components: {
            LeftColumn,
            RightColumn
        },
        mixins: [ twoColumnsMixin ],
        data() {
            return {
                curComponent: ''
            }
        },
        created() {
            this.curComponent = this.fix === 'left' ? 'LeftColumn' : 'RightColumn'
        }
    }
</script>