<template>
    <div class="lay-checkbox-group" role="group" aria-label="checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    import emitter from '@/mixins/emitter'

    export default {
        name: 'LayCheckboxGroup',

        mixins: [emitter],

        componentName: 'LayCheckboxGroup',

        inject: {
            elFormItem: {
                default: ''
            }
        },

        props: {
            value: {},
            disabled: Boolean,
            min: Number,
            max: Number,
            size: String,
            fill: String,
            textColor: String
        },

        computed: {
            _elFormItemSize() {
                return (this.elFormItem || {}).elFormItemSize;
            },
            checkboxGroupSize() {
                return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
            }
        },

        watch: {
            value(value) {
                this.dispatch('el-form-item', 'el.form.change', [value]);
            }
        }
    }
</script>