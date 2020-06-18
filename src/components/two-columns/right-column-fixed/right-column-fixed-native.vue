<template>
    <div class="lay-right-column-fixed" :style="calcParentStyle">
        <div class="lay-right-column-fixed__left" :style="[calcLeftStyle, leftStyle]" :class="leftClass">
            <slot name="left"></slot>
        </div>
        <div class="lay-right-column-fixed__right" :style="[calcRightStyle, rightStyle]" :class="rightClass">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    import twoColumnsMixin from '@/mixins/two-columns-mixin'
    
    export default {
        name: 'RightColumnFixedNative',
        mixins: [ twoColumnsMixin ],
        computed: {
            calcParentStyle() {
                return {
                    'padding-left': this.width
                }
            },
            calcLeftStyle() {
                let style = {
                    'margin-left': `-${this.width}`,
                    height: this.height,
                    overflow: this.overflow
                }
                return style
            },
            calcRightStyle() {
                let style = {
                    width: this.width,
                    height: this.height,
                    overflow: this.overflow
                }
                return style
            }
        }
    }
</script>