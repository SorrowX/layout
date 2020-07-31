<template>
    <div class="lay-collapse-item" :class="activeClass">
        <div 
            class="lay-collapse-item__header" 
            :class="[activeClass, customHeaderClass]"
            @click="handlerClick"
        >
            <slot name="header">
                <div class="lay-collapse-item__title">
                    <slot name="title">{{ title }}</slot>
                </div>
                <i class="lay-collapse-item__arrow" :class="activeClass"></i>
            </slot>
        </div>
        <lay-collapse-transition>
            <div class="lay-collapse-item__wrap" v-show="isActive">
                <div class="lay-collapse-item__content">
                    <slot></slot>
                </div>
            </div>
        </lay-collapse-transition>
    </div>
</template>

<script>
    import LayCollapseTransition from '@/components/transitions'
    import emitter from '@/mixins/emitter'

    export default {
        name: 'LayCollapseItem',
        inject: [ 'collapse' ],
        components: { LayCollapseTransition },
        mixins: [ emitter ],
        props: {
            name: { // 唯一标志符
                type: [Number, String],
                default: ''
            },
            title: { // 面板标题
                type: String,
                default: ''
            },
            disabled: { // 是否禁用
                type: Boolean,
                default: false
            }
        },
        computed: {
            isActive() {
                return this.collapse.activeNames.includes(this.name)
            },
            activeClass() {
                return this.isActive ? 'is-active' : ''
            },
            hasHeaderSlot() {
                return !!this.$slots.header
            },
            customHeaderClass() {
                return this.hasHeaderSlot ? 'is-custom-header' : ''
            }
        },
        methods: {
            handlerClick() {
                this.dispatch('lay-collapse', 'click-item', this)
            }
        }
    }
</script>