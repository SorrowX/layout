<template>
    <div class="lay-right-adapt">
        <div 
            class="lay-right-adapt__left" 
            :class="leftClass" 
            :style="calcLeftStyle"
        >
            <lay-scrollbar :native="native">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div 
            class="lay-right-adapt__center" 
            :class="centerClass" 
            :style="calcCenterStyle"
        >
            <lay-scrollbar :native="native">
                <slot name="center"></slot>
            </lay-scrollbar>
        </div>
        <div 
            class="lay-right-adapt__right" 
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
    import threeColumnsMixin from '@/mixins/three-columns/three-columns-mixin'

    export default {
        name: 'RightAdapt',
        mixins: [ threeColumnsMixin ],
        computed: {
            calcLeftStyle() {
                return this.getStyle({
                    width: this.leftWidth,
                    height: this.height,
                    overflow: this.overflow
                }, this.leftStyle)
            },
            calcCenterStyle() {
                return this.getStyle({
                    width: this.centerWidth,
                    height: this.height,
                    overflow: this.overflow
                }, this.centerStyle)
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