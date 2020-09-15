<template>
    <div class="lay-collapse-item" :class="activeClass">
        <div 
            class="lay-collapse-item__header" 
            :class="[activeClass, customHeaderClass, disabledClass]"
            @click="handlerClick"
        >
            <slot name="header">
                <div class="lay-collapse-item__title lay-ellipsis">
                    <slot name="title">{{ title }}</slot>
                </div>
                <div class="lay-collapse-item__arrow" :class="activeClass">
                    <i class="lay-collapse-item__icon lay-icon-arrow-right" :class="disabledClass"></i>
                </div>
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
    import utils from '@/utils/index'

    export default {
        name: 'LayCollapseItem',
        inject: [ 'collapse' ],
        components: { LayCollapseTransition },
        mixins: [ emitter ],
        props: {
            name: { // 唯一标志符
                type: [Number, String],
                default: utils.getUUID()
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
            disabledClass() {
                return this.disabled ? 'is-disabled' : ''
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
                if (this.disabled) return
                this.dispatch('lay-collapse', 'click-item', this)
            }
        }
    }
</script>