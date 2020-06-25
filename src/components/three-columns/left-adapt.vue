<template>
    <div class="lay-left-adapt" :style="parentStyle">
        <div class="lay-left-adapt__left" ref="left" :class="leftClass" :style="calcLeftStyle">
            <lay-scrollbar :native="native">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div class="lay-left-adapt__center" ref="center" :class="centerClass" :style="calcCenterStyle">
            <lay-scrollbar :native="native">
                <slot name="center"></slot>
            </lay-scrollbar>
        </div>
        <div class="lay-left-adapt__right" ref="right" :class="rightClass" :style="calcRightStyle">
            <lay-scrollbar :native="native">
                <slot name="right"></slot>
            </lay-scrollbar>
        </div>
    </div>
</template>

<script>
    import threeColumnsMixin from '@/mixins/three-columns-mixin'

    export default {
        name: 'LeftAdapt',
        mixins: [ threeColumnsMixin ],
        computed: {
            calcLeftStyle() {
                return this.getStyle({
                    height: this.height,
                    right: parseFloat(this.centerWidth) + parseFloat(this.rightWidth) + 'px',
                    overflow: this.overflow
                }, this.leftStyle)
            },
            calcCenterStyle() {
                return this.getStyle({
                    width: this.centerWidth,
                    height: this.height,
                    right: this.rightWidth,
                    overflow: this.overflow
                }, this.centerStyle)
            },
            calcRightStyle() {
                return this.getStyle({
                    width: this.rightWidth,
                    height: this.height,
                    overflow: this.overflow
                }, this.rightStyle)
            }
        },
        mounted() {
            this.parentStyle = { height: this.getMaxHeight() + 'px' }
        }
    }
</script>