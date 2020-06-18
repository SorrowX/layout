<template>
    <div class="lay-left-column-fixed">
        <div 
            class="lay-left-column-fixed__left"
            :style="[calcLeftStyle, leftStyle]"
            :class="leftClass"
        >
            <slot name="left"></slot>
        </div>
        <div 
            class="lay-left-column-fixed__right"
            :style="[{ height: height }, rightStyle]"
            :class="rightClass"
        >
            <div :style="calcRightChildrenStyle">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import twoColumnsMixin from '@/mixins/two-columns-mixin'
    
    export default {
        name: 'LeftColumnFixedNative',
        mixins: [ twoColumnsMixin ],
        computed: {
            calcLeftStyle() {
                let style = {
                    width: this.width,
                    height: this.height
                }
                const isOverflowHidden = this.overflow === 'hidden' ? true : false
                if (isOverflowHidden) {
                    style.overflow = 'hidden'
                } else {
                    style.overflow = this.overflow || 'auto'
                }
                return style
            },
            calcRightChildrenStyle() {
                let style = {
                    height: '100%',
                    overflow: this.overflow
                }
                return style
            }
        }
    }
</script>