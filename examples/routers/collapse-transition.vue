<template>
    <div class="collapse-transition">
        <button @click="show = !show">点我</button>
        <lay-collapse-transition>
            <div v-show="show" class="box1">
                盒子
            </div>
        </lay-collapse-transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        }
    }
</script>

<style lang="scss">
    .box1 {
        // padding: 10px;
        background: #ccc;
        border: 1px solid red;
    }
</style>