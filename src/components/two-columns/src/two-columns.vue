<template>
    <component 
        class="lay-two-columns"
        :is="curComponent" 
        v-bind="$props"
        ref="comp"
    >
        <template v-slot:left>
            <slot name="left"></slot>
        </template>
        <template v-slot:right>
            <slot name="right"></slot>
        </template>
    </component>
</template>

<script>
    import twoColumnsProps from '@/mixins/two-columns/two-columns-props'
    import LeftFix from './left-fix'
    import RightFix from './right-fix'

    export default {
        name: 'TwoColumns',
        components: {
            LeftFix,
            RightFix
        },
        mixins: [ twoColumnsProps ],
        data() {
            return {
                curComponent: ''
            }
        },
        methods: {
            updateScrollbar() {
                const comp = this.$refs.comp
                comp && comp.updateScrollbar()
            }
        },
        created() {
            this.curComponent = this.fix === 'left' ? 'LeftFix' : 'RightFix'
        }
    }
</script>