<template>
    <div role="lay-tree-item" class="lay-tree-node">
        <div class="el-tree-node__content">
            <span class="el-tree-node__expand-icon lay-arrow-right"></span>
            <span>el-tree-node__label</span>
        </div>
        <div role="group" class="el-tree-node__children">
            <lay-tree-node v-if="false"></lay-tree-node>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LayTreeNode'
    }
</script>