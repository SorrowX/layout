<template>
    <div 
        ref="parent"
        class="lay-left-adapt" 
        :style="{ height: this.height }"
    >
        <div 
            ref="left" 
            class="lay-left-adapt__left" 
            :class="leftClass" 
            :style="calcLeftStyle"
        >
            <lay-scrollbar ref="leftLayScrollbar" :native="native" :autoshow="autoshow">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div 
            ref="center" 
            class="lay-left-adapt__center" 
            :class="centerClass" 
            :style="calcCenterStyle"
        >
            <lay-scrollbar ref="centerLayScrollbar" :native="native" :autoshow="autoshow">
                <slot name="center"></slot>
            </lay-scrollbar>
        </div>
        <div 
            ref="right" 
            class="lay-left-adapt__right" 
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
    import threeColumnsMixin from '@/mixins/three-columns/three-columns-mixin'

    export default {
        name: 'LeftAdapt',
        mixins: [ threeColumnsMixin ],
        computed: {
            calcLeftStyle() {
                return this.getStyle({
                    height: this.height,
                    right: `calc(${this.centerWidth} + ${this.rightWidth})`,
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
        }
    }
</script>