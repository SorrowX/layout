<template>
    <div class="lay-use-float-margin">
        <div 
            class="lay-use-float-margin__left" 
            :style="[{ width: width}, heightStyle, overflowStyle, leftStyle]"
            :class="leftClass"
        >
            <slot name="left"></slot>
        </div>
        <div 
            class="lay-use-float-margin__right" 
            :style="[{ 'margin-left': width}, heightStyle, overflowStyle, rightStyle]"
            :class="rightClass"
        >
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    import leftColumnFixedWidthMixin from '../../../mixins/left-column-fixed-width-mixin'
    import LayScrollbar from '../../scrollbar'
    export default {
        name: 'UseFloatMargin',
        mixins: [ leftColumnFixedWidthMixin ],
        components: { LayScrollbar },
        computed: {
            overflowStyle() {
                return this.overflow === 'hidden'
                    ? { overflow: 'hidden' }
                    : { overflow: this.overflow || 'auto' }
            },
            heightStyle() {
                return this.height === '0px'
                    ? { height: 'auto' }
                    : { height: this.height }
            }
        }
    }
</script>