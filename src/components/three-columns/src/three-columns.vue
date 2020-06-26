<template>
    <component 
        class="lay-three-columns" 
        :is="curComponent" 
        v-bind="$props"
    >
        <template v-slot:left>
            <slot name="left"></slot>
        </template>
        <template v-slot:center>
            <slot name="center"></slot>
        </template>
        <template v-slot:right>
            <slot name="right"></slot>
        </template>
    </component>
</template>

<script>
    import threeColumnsProps from '@/mixins/three-columns/three-columns-props'
    import RightAdapt from './right-adapt.vue'
    import LeftAdapt from './left-adapt.vue'
    import CenterAdapt from './center-adapt.vue'

    export default {
        name: 'ThreeColumns',
        mixins: [ threeColumnsProps ],
        components: { RightAdapt, LeftAdapt, CenterAdapt },
        data() {
            return {
                curComponent: ''
            }
        },
        created() {
            this.curComponent = 
               this.adapt === 'right'
                   ? 'RightAdapt'
                   : this.adapt === 'center'
                        ? 'CenterAdapt'
                        : 'LeftAdapt'
        }
    }
</script>