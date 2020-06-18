<template>
    <div class="lay-left-column-fixed">
        <div 
            class="lay-left-column-fixed__left"
            :style="[calcLeftStyle, leftStyle]"
            :class="leftClass"
        >
            <lay-scrollbar v-if="showScroll">
                <slot name="left"></slot>
            </lay-scrollbar>
            <slot v-else name="left"></slot>
        </div>
        <div 
            class="lay-left-column-fixed__right"
            :style="[{ height: height }, rightStyle]"
            :class="rightClass"
        >
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
        name: 'LeftColumnFixed',
        mixins: [ twoColumnsMixin ],
        components: { LayScrollbar },
        computed: {
            showScroll() {
                if (this.overflow === 'hidden') {
                    return false
                }
                return !(this.height === 'auto')
            },
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