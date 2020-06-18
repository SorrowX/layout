<template>
    <div class="test-scrollbar">
        <lay-scrollbar class="lay-scrollbar-box">
            <div class="conent">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <lay-scrollbar class="lay-scrollbar-box2" :autoshow="true">
            <div class="conent">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <lay-scrollbar class="lay-scrollbar-box3">
            <div class="conent2">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>
    </div>
</template>

<script>
    import FakeContent from '../components/fake-content'
    export default {
        components: { FakeContent }
    }
</script>

<style lang="scss" scoped>
    .lay-scrollbar-box,
    .lay-scrollbar-box2,
    .lay-scrollbar-box3 {
        height: 400px;
        margin: 20px 0;
        margin-bottom: 50px;
        border: 1px solid #dcdfe6;
    }
    .conent {
        height: 600px;
        width: 850px;
    }
    .conent2 {
        height: 600px;
    }

    .lay-scrollbar-box2>>>.gm-scrollbar .thumb {
        background-color: rgba(111, 87, 140, .4);
    }
    .lay-scrollbar-box2>>>.gm-scrollbar {
        left: 2px;
        right: 0;
        border-radius: 5px;
    }
    .lay-scrollbar-box2>>>.gm-scrollbar.-vertical{
        width: 8px;
    }
    .lay-scrollbar-box2>>>.gm-scrollbar.-horizontal {
        height: 8px;
    }


    .lay-scrollbar-box3>>>.gm-scrollbar {
        border-radius: 0;
        right: 0;
    }
    .lay-scrollbar-box3>>>.gm-scrollbar.-vertical{
        width: 14px;
        top: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.05);
    }
    .lay-scrollbar-box3>>>.gm-scrollbar.-vertical .thumb {
        background-color: rgba(68, 209, 234, .8);
    }
</style>