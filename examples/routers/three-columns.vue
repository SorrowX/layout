<template>
    <div class="test-three-columns">
        <lay-three-columns>
            <template v-slot:left>
                left
            </template>
            <template v-slot:center>
                center
            </template>
            <template v-slot:right>
                right
            </template>
        </lay-three-columns>
    </div>
</template>

<script>
    export default {
        name: ''
    }
</script>

<style lang="scss">
    
</style>