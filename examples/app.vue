<template>
    <div class="container">
        <nav>
            <ul>
                <li><router-link to="/two-columns">two-columns</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    module.exports = {
        name: 'App',
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>

<style lang="scss">
    @import "../src/styles/index.scss";
</style>
