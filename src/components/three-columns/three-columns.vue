<template>
    <component class="three-columns" :is="curComponent" v-bind="$props">
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
    import threeColumnsMixin from '@/mixins/three-columns-mixin'
    import RightAdapt from './right-adapt.vue'
    import LeftAdapt from './left-adapt.vue'
    import CenterAdapt from './center-adapt.vue'

    export default {
        name: 'ThreeColumns',
        mixins: [ threeColumnsMixin ],
        components: { RightAdapt, LeftAdapt, CenterAdapt },
        data() {
            return {
                curComponent: ''
            }
        },
        created() {
            this.curComponent = 
               this.adapt === 'left'
                   ? 'LeftAdapt'
                   : this.adapt === 'right'
                        ? 'RightAdapt'
                        : 'CenterAdapt'
        }
    }
</script>