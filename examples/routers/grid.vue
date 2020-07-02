<template>
    <div class="test-grid">
        <!-- <lay-row>
            <lay-col><div class="grid-content"></div></lay-col>
        </lay-row> -->

        <!-- <lay-row>
            <lay-col :span="24"><div class="grid-content"></div></lay-col>
        </lay-row> -->

        <!-- <lay-row>
            <lay-col :span="12"><div class="grid-content"></div></lay-col>
            <lay-col :span="12"><div class="grid-content"></div></lay-col>
        </lay-row> -->

        <!-- <lay-row>
            <lay-col :span="6">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="6">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="6">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="6">
                <div class="grid-content"></div>
            </lay-col>
        </lay-row> -->
        <!-- <lay-row>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
            <lay-col :span="4">
                <div class="grid-content"></div>
            </lay-col>
        </lay-row> -->
        <!-- <hr /> -->

        <!-- <lay-row :gutter="20">
            <lay-col :span="6"><div class="grid-content"></div></lay-col>
            <lay-col :span="6"><div class="grid-content"></div></lay-col>
            <lay-col :span="6"><div class="grid-content"></div></lay-col>
            <lay-col :span="6"><div class="grid-content"></div></lay-col>
        </lay-row> -->
        <!-- <hr /> -->

        <!-- <lay-row :gutter="20">
            <lay-col :span="6"><div class="grid-content"></div></lay-col>
            <lay-col :span="6" :offset="6"><div class="grid-content"></div></lay-col>
        </lay-row> -->
        <!-- <lay-row>
            <lay-col :span="12" :offset="6" :push="5"><div class="grid-content"></div></lay-col>
        </lay-row> -->
        <!-- <lay-row>
            <lay-col :span="12" :offset="6" :pull="6"><div class="grid-content"></div></lay-col>
        </lay-row> -->
        <!-- <hr /> -->

        <!-- <lay-row :gutter="20" type="flex" justify="space-between" align="bottom" style="height: 100px">
            <lay-col :span="4"><div class="grid-content"></div></lay-col>
            <lay-col :span="4"><div class="grid-content"></div></lay-col>
            <lay-col :span="4"><div class="grid-content"></div></lay-col>
        </lay-row> -->
        <!-- <hr /> -->

        <!-- <lay-row :gutter="10">
            <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></lay-col>
            <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></lay-col>
            <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content"></div></lay-col>
            <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content"></div></lay-col>
        </lay-row> -->

        <!-- <lay-row :gutter="10">
            <lay-col
                :xs="24"
                :sm="12" 
                :md="8"
                :lg="6"
            >
                <div class="grid-content">1</div>
            </lay-col>
            <lay-col
                :xs="24"
                class="hidden-sm-only"
                :md="8"
                :lg="6"
            >
                <div class="grid-content">2</div>
            </lay-col>
            <lay-col
                :xs="24"
                class="hidden-sm-only hidden-md-only"
                :lg="6"
            >
                <div class="grid-content">3</div>
            </lay-col>
            <lay-col
                :xs="24"
                :sm="12" 
                :md="8"
                :lg="6"
            >
                <div class="grid-content">4</div>
            </lay-col>
        </lay-row> -->

        <lay-row :gutter="10">
            <lay-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }" 
                :md="8"
                :lg="6"
            >
                <div class="grid-content">1</div>
            </lay-col>
            <lay-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="8"
                :lg="6"
            >
                <div class="grid-content">2</div>
            </lay-col>
            <lay-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="8"
                :lg="6"
            >
                <div class="grid-content">3</div>
            </lay-col>
            <lay-col
                :xs="{ span: 24 }"
                :sm="{ span: 12 }"
                :md="24"
                :lg="6"
            >
                <div class="grid-content">4</div>
            </lay-col>
        </lay-row>
    </div>
</template>

<script>
    import FakeContent from '../components/fake-content'
    import Prism from 'prismjs'

    export default {
        components: { FakeContent },
        data() {
            return {
                code1: `
                    <template>
                        <lay-row>
                            <lay-col> ... </lay-col>
                            <lay-col> ... </lay-col>
                            <lay-col> ... </lay-col>
                        </lay-row>
                    </template>

                `
            }
        },
        methods: {
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .grid-content {
        height: 36px;
        border: 1px solid rebeccapurple;
        text-align: center;
        line-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>