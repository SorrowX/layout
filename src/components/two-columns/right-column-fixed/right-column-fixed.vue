<template>
    <div class="lay-right-column-fixed" :style="calcParentStyle">
        <div class="lay-right-column-fixed__left" :style="[calcLeftStyle, leftStyle]" :class="leftClass">
            <lay-scrollbar v-if="showScroll">
                <slot name="left"></slot>    
            </lay-scrollbar>
            <slot v-else name="left"></slot>
        </div>
        <div class="lay-right-column-fixed__right" :style="[calcRightStyle, rightStyle]" :class="rightClass">
            <lay-scrollbar v-if="showScroll">
                <slot name="right"></slot>    
            </lay-scrollbar>
            <slot v-else name="right"></slot>
        </div>
    </div>
</template>

<script>
    import twoColumnsMixin from '@/mixins/two-columns-mixin'
    import LayScrollbar from '@/components/scrollbar'

    export default {
        name: 'RightColumnFixed',
        mixins: [ twoColumnsMixin ],
        components: { LayScrollbar },
        computed: {
            calcParentStyle() {
                return {
                    'padding-left': this.width
                }
            },
            showScroll() {
                if (this.overflow === 'hidden') {
                    return false
                }
                return this.height === 'auto' ? false : true
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