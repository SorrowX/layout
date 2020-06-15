<template>
    <div class="test-two-columns">
        <lay-two-columns width="200px" height="500px">
            <template v-slot:left>
                <p v-for="num in 20" :key="num">{{ num }}</p>
            </template>
            <template v-slot:right>
                <p v-for="num in 40" :key="num">{{ num }}</p>
            </template>
        </lay-two-columns>
        

        <!-- <lay-scrollbar native class="scroll-box" :autoshow="true">
            <p v-for="num in list" :key="num" style="width: 600px">{{ num }}</p>
        </lay-scrollbar> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                leftStyle: {
                    background: '#f60'

                },
                rightStyle: {
                    background: '#ccc'
                },
                list: 20
            }
        },
        methods: {
        },
        mounted() {
            setTimeout(() => {
                this.list = 50
            }, 5000)
        }
    }
</script>

<style lang="scss">
    .scroll-box {
        height: 500px;
        width: 500px;
        border: 1px solid red;
    }
</style>