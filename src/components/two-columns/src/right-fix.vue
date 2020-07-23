<template>
    <div 
        class="lay-right-fix" 
        :style="calcParentStyle"
    >
        <div 
            class="lay-right-fix__left"
            :class="leftClass" 
            :style="calcLeftStyle"
        >
            <lay-scrollbar ref="leftLayScrollbar" :native="native" :autoshow="autoshow">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div 
            class="lay-right-fix__right" 
            :class="rightClass" 
            :style="calcRightStyle"
        >
            <lay-scrollbar ref="rightLayScrollbar" :native="native" :autoshow="autoshow">
                <slot name="right"></slot>
            </lay-scrollbar>
        </div>
    </div>
</template>

<script>
    import twoColumnsMixin from '@/mixins/two-columns/two-columns-mixin'

    export default {
        name: 'RightFix',
        mixins: [ twoColumnsMixin ],
        computed: {
            calcParentStyle() {
                return {
                    'padding-left': this.width
                }
            },
            calcLeftStyle() {
                return this.getStyle({
                    'margin-left': `-${this.width}`,
                    height: this.height,
                    overflow: this.overflow
                }, this.leftStyle)
            },
            calcRightStyle() {
                return this.getStyle({
                    width: this.width,
                    height: this.height,
                    overflow: this.overflow
                }, this.rightStyle)
            }
        }
    }
</script>