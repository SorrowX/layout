<template>
    <div class="lay-use-float-overflow">
        <div 
            class="lay-use-float-overflow__left"
            :style="[{ width: width, height: height}, leftStyle]"
            :class="leftClass"
        >
            <lay-scrollbar :native="false">
                <slot name="left"></slot>
            </lay-scrollbar>
        </div>
        <div 
            class="lay-use-float-overflow__right"
            :style="[{ height: height }, rightStyle]"
            :class="rightClass"
        >
            <lay-scrollbar :native="false">
                <slot name="right"></slot>
            </lay-scrollbar>
        </div>
    </div>
</template>

<script>
    import leftColumnFixedWidthMixin from '../../../mixins/left-column-fixed-width-mixin'
    import LayScrollbar from '../../scrollbar'
    export default {
        name: 'UseFloatOverflow',
        mixins: [ leftColumnFixedWidthMixin ],
        components: { LayScrollbar },
        computed: {
            
        }
    }
</script>