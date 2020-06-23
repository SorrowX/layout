<template>
    <div class="test-three-columns">
        <!-- <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns> -->

        <!-- <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns> -->

        <!-- <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px" nativeScrollbar>
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns> -->

        <!-- <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px" overflow="hidden">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns> -->

        <lay-three-columns 
            adapt="right" 
            leftWidth="100px" 
            centerWidth="200px" 
            height="500px" 
            overflow="hidden"
            :leftStyle="[{ border: '1px solid red' }, { color: 'red' }]"
            :centerClass="centerClass"
        >
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import FakeContent from '../components/fake-content'
    export default {
        components: { FakeContent },
        data() {
            return {
                centerClass: { c1: true, c2: true }
            }
        }
    }
</script>

<style lang="scss">
    .c1 {
        border: 1px solid green;
    }
</style>