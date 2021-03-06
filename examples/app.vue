<template>
    <div class="app">
        <nav class="header">
            <lay-two-columns class="two-columns" width="300px" height="100%" overflow="hidden">
                <template v-slot:left>
                    <span class="size-name">
                        Layout
                    </span>
                </template>
                <template v-slot:right>
                    <ul class="header-nav">
                        <li>
                            <a href="#">指南</a>
                        </li>
                        <li>
                            <a href="#">API 参考</a>
                        </li>
                        <li>
                            <a href="https://github.com/SorrowX/layout" target="_blank">GitHub</a>
                        </li>
                    </ul>
                </template>
            </lay-two-columns>
        </nav>
        <main class="main">
            <lay-two-columns class="two-columns" :width="calcWidth" height="100%" leftClass="main-left-class" ref="twoColumnsComp">
                <template v-slot:left>
                    <div class="aside">
                        <ul class="no-group-title">
                            <li><router-link to="/introduce">介绍</router-link></li>
                            <li><router-link to="/install">安装</router-link></li>
                            <li><router-link to="/utils">工具类</router-link></li>
                        </ul>

                        <p class="group-title">布局组件</p>
                        <ul>
                            <li><router-link to="/center">居中布局</router-link></li>
                            <li><router-link to="/two-columns">两列布局</router-link></li>
                            <li><router-link to="/three-columns">三列布局</router-link></li>
                            <li><router-link to="/grid">栅格布局</router-link></li>
                        </ul>

                        <p class="group-title">常用组件</p>
                        <ul>
                            <li><router-link to="/scrollbar">Scrollbar 滚动条</router-link></li>
                            <li><router-link to="/collapse">Collapse 折叠面板</router-link></li>
                            <li><router-link to="/tree">Tree 树形控件</router-link></li>
                            <li><router-link to="/checkbox">Checkbox 多选框</router-link></li>
                        </ul>
                    </div>
                </template>
                <template v-slot:right>
                    <div class="content" :style="contentStyle">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </div>
                </template>
            </lay-two-columns>
        </main>
    </div>
    
</template>

<script>
    export default {
        name: 'App',
        data: function() {
            return {
                clientWidth: document.body.clientWidth
            }
        },
        computed: {
            isSmallScreen() { // 小于等于1200
                return this.clientWidth <= 1200 ? true : false
            },
            calcWidth() {
                if (this.isSmallScreen) {
                    return this.clientWidth <= 1000 ? '0px' : '200px'
                } else {
                    return this.clientWidth <= 1200 ? '0px' : '240px'
                }
            },
            contentStyle() {
                let isGrid = this.$route.path == '/grid'
                return isGrid 
                    ? { width: 'auto', padding: '0 50px 40px 50px' } 
                    : this.isSmallScreen
                        ? { width: '700px', padding: '0' }
                        : { width: '900px', padding: '0' }
            }
        },
        methods: {
            updateScrollbar() {
                this.$refs.twoColumnsComp.updateScrollbar()
            }
        },

        mounted() {
            window.onresize = () => {
                this.clientWidth = document.body.clientWidth
            }

            this.$root.$on('update-main-container-scrollbar', this.updateScrollbar)
        },
        beforeDestroy() {
            window.onresize = null
        }
    }
</script>

<style lang="scss">
    @import "../src/styles/index.scss";

    html,body {
        font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
    }
    
    html,body,ul,li {
        margin: 0;
        padding: 0;
    }
    .app {
        height: 100vh;
        overflow: hidden;
    }
    .header {
        height: 60px;
        border-bottom: 1px solid #dcdfe6;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
    .size-name {
        font-size: 1.3rem;
        font-weight: 600;
        color: #2c3e50;
        position: relative;
        display: inline-block;
        padding-top: 15px;
        padding-left: 20px;
    }
    .header-nav {
        height: 100%;
        width: 100%;
        display: inline-block;
        text-align: right;
        li {
            display: inline-block;
            position: relative;
            margin: 0 10px;
            margin-top: 20px;
            a {
                line-height: 1.4rem;
                text-decoration: none;
                color: rgb(44, 62, 80);
                font-size: 15px;
                &:hover {
                    margin-bottom: -2px;
                    border-bottom: 2px solid #46bd87;
                }
            }
        }
        li:last-child {
            margin-right: 20px;
        }
    }
    .main {
        height: calc(100vh - 60px);
    }
    .two-columns {
        height: 100%; 
    }
    .main-left-class {
        border-right: 1px solid #dcdfe6;
        box-shadow: 1px 0px 2px rgba(26,26,26,0.1);
    }
    .aside {
        margin-top: 20px;
        .group-title {
            font-size: 1.1em;
            font-weight: 700;
            padding: 0 1.5rem;
            margin-top: .8rem;
            margin-bottom: .5rem;
        }
        .no-group-title {
            padding-left: 0;
        }
        ul {
            list-style: none;
            padding-left: 25px;
            li {
                margin: 4px 0;
                font-size: 15px;
            }
            li a {
                font-weight: 400;
                display: inline-block;
                color: #2c3e50;
                border-left: .25rem solid transparent;
                padding: .35rem 1rem .35rem 1.25rem;
                line-height: 1.4;
                width: 100%;
                box-sizing: border-box;
                text-decoration: none;
            }
            li a:hover {
                color: #3eaf7c;
            }
        }
    }
    .router-link-exact-active.router-link-active {
        font-weight: 600;
        color: #3eaf7c;
        border-left-color: #3eaf7c;
    }

    .content {
        margin-top: 50px;
        width: 980px;
        margin: 0 auto;
    }


    /**
    * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
    * Based on https://github.com/chriskempson/tomorrow-theme
    * @author Rose Pritchard
    */

    code[class*="language-"],
    pre[class*="language-"] {
        color: #ccc;
        background: none;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        font-size: 1em;
        text-align: left;
        white-space: pre;
        word-spacing: normal;
        word-break: normal;
        word-wrap: normal;
        line-height: 1.5;

        -moz-tab-size: 4;
        -o-tab-size: 4;
        tab-size: 4;

        -webkit-hyphens: none;
        -moz-hyphens: none;
        -ms-hyphens: none;
        hyphens: none;

    }

    /* Code blocks */
    pre {
        background: #2d2d2d;
    }
    pre[class*="language-"] {
        padding: 1em;
        margin: .5em 0;
        overflow: auto;
        border-radius: 5px;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
        background: #2d2d2d;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
        padding: .1em;
        border-radius: .3em;
        white-space: normal;
    }

    .token.comment,
    .token.block-comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
        color: #999;
    }

    .token.punctuation {
        color: #ccc;
    }

    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted {
        color: #e2777a;
    }

    .token.function-name {
        color: #6196cc;
    }

    .token.boolean,
    .token.number,
    .token.function {
        color: #f08d49;
    }

    .token.property,
    .token.class-name,
    .token.constant,
    .token.symbol {
        color: #f8c555;
    }

    .token.selector,
    .token.important,
    .token.atrule,
    .token.keyword,
    .token.builtin {
        color: #cc99cd;
    }

    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
        color: #7ec699;
    }

    .token.operator,
    .token.entity,
    .token.url {
        color: #67cdcc;
    }

    .token.important,
    .token.bold {
        font-weight: bold;
    }
    .token.italic {
        font-style: italic;
    }

    .token.entity {
        cursor: help;
    }

    .token.inserted {
        color: green;
    }

    
</style>
