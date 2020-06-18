<template>
    <div class="fake-content" :style="{ width: width, height: height }">
    </div>
</template>

<script>
    export default {
        name: 'FakeContent',
        props: {
            width: {
                type: String,
                default: '100%'
            },
            height: {
                type: String,
                default: '100px'
            }
        }
    }
</script>

<style lang="scss">
    .fake-content {
        position: relative;
        background-color: rgba(0,0,0,.05);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
        border-radius: 3px;
        margin-bottom: 10px
    }

    .fake-content::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 35px;
        height: 10px;
        background: #ccc;
    }
</style>