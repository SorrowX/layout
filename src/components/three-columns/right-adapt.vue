<template>
    <div class="lay-right-adapt">
        <div class="lay-right-adapt__left">
            <slot name="left"></slot>
        </div>
        <div class="lay-right-adapt__center">
            <slot name="center"></slot>
        </div>
        <div class="lay-right-adapt__right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    import threeColumnsMixin from '@/mixins/three-columns-mixin'
    import LayScrollbar from '@/components/scrollbar'
    export default {
        name: '',
        mixins: [ threeColumnsMixin ],
        components: { LayScrollbar },
        computed: {
            
        }
    }
</script>