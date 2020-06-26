<template>
    <div class="lay-left-fix">
        <div 
            class="lay-left-fix__left"
            :class="leftClass" 
            :style="calcLeftStyle"
        >
            <lay-scrollbar :native="native">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div
            class="lay-left-fix__right"
            :class="rightClass" 
            :style="calcRightStyle"
        >
            <lay-scrollbar :native="native">
                <slot name="right"></slot>
            </lay-scrollbar>
        </div>
    </div>
</template>

<script>
    import twoColumnsMixin from '@/mixins/two-columns/two-columns-mixin'

    export default {
        name: 'LeftFix',
        mixins: [ twoColumnsMixin ],
        computed: {
            calcLeftStyle() {
                return this.getStyle({
                    width: this.width,
                    height: this.height,
                    overflow: this.overflow
                }, this.leftStyle)
            },
            calcRightStyle() {
                return this.getStyle({
                    height: this.height,
                    overflow: this.overflow
                }, this.rightStyle)
            }
        }
    }
</script>