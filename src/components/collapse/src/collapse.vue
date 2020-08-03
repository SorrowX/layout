<template>
    <div class="lay-collapse">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'LayCollapse',
        provide() {
            return {
                collapse: this
            }
        },
        props: {
            value: { // 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
                type: [Number, String, Array],
                default: function() {
                    return []
                }
            },
            accordion: { // 是否手风琴模式
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                activeNames: [].concat(this.value)
            }
        },
        watch: {
            value(val) {
                this.activeNames = [].concat(this.value)
            }
        },
        methods: {
            handerClickItem(subVm) {
                const name = subVm.name,
                    activeNames = this.activeNames
                if (this.accordion) {
                    const curName = Array.isArray(activeNames) ? activeNames[0] : activeNames
                    this.setActiveNames(name, curName === name ? [] : [name])
                } else {
                    const names = activeNames.slice(0),
                        i = names.indexOf(name)
                    if (i !== -1) {
                        names.splice(i, 1)
                    } else {
                        names.push(name)
                    }
                    this.setActiveNames(name, names)
                }
            },
            setActiveNames(name, names) {
                this.activeNames = names
                this.$emit('input', names)
                this.$emit('change', name, names)
            }
        },
        created() {
            this.$on('click-item', this.handerClickItem)
        }
    }
</script>