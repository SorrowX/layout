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
    import leftColumnFixedWidthMixin from '@/mixins/left-column-fixed-width-mixin'
    import LeftColumnFixedWidth from './left-column-fixed-width'

    export default {
        name: 'LayTwoColumns',
        components: {
            ...LeftColumnFixedWidth
        },
        mixins: [ leftColumnFixedWidthMixin ],
        data() {
            return {
                curComponent: ''
            }
        },
        created() {
            this.curComponent = `use-${this.use}`.split('-').map(s => capitalize(s)).join('')
        }
    }
</script>