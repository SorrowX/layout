<template>
    <div class="test-two-columns">
        <h1>左列固定,右列自适应</h1>
        <p>1.只指定width属性,左列和右列的高度由子内容撑开</p>
        <pre>
            <code class="language-js" v-html="getCode(code1)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="left" width="200px">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 4" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>2.给定高度,内容超出自动出现滚动条(默认使用自定义滚动条)</p>
        <pre>
            <code class="language-js" v-html="getCode(code2)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="left" width="200px" height="500px">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>3.使用nativeScrollbar属性,内容超出自动出现滚动条(原生滚动条)</p>
        <pre>
            <code class="language-js" v-html="getCode(code3)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" nativeScrollbar fix="left" width="200px" height="500px">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>4.使用overflow属性值为hidden时,内容超出自动隐藏</p>
        <pre>
            <code class="language-js" v-html="getCode(code4)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="left" width="200px" height="500px" overflow="hidden">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <hr/>

        <h1>右列固定,左列自适应</h1>
        <p>5.指定fix属性,开启左列固定还是右列固定</p>
        <pre>
            <code class="language-js" v-html="getCode(code5)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" width="200px">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 4" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>6.给定高度,内容超出自动出现滚动条(默认使用自定义滚动条)</p>
        <pre>
            <code class="language-js" v-html="getCode(code6)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" width="200px" height="500px">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 4" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>7.使用nativeScrollbar属性,内容超出自动出现滚动条(原生滚动条)</p>
        <pre>
            <code class="language-js" v-html="getCode(code7)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" nativeScrollbar width="200px" height="500px">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>8.使用overflow属性值为hidden时,内容超出自动隐藏</p>
        <pre>
            <code class="language-js" v-html="getCode(code8)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" width="200px" height="500px" overflow="hidden">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>9.使用leftStyle和rightStyle属性给左列容器和右列容器添加样式</p>
        <pre>
            <code class="language-js" v-html="getCode(code9)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" width="200px" height="500px" :leftStyle="leftStyle" :rightStyle="rightStyle">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>

        <p>10.使用leftClass和rightClass属性给左列容器和右列容器添加css类名</p>
        <pre>
            <code class="language-js" v-html="getCode(code10)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-two-columns class="test-box" fix="right" width="200px" height="500px" leftClass="left-class" rightClass="right-class">
            <template v-slot:left>
                <fake-content v-for="num in 10" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <div class="right-content">
                    <fake-content v-for="num in 20" :key="num" height="200px">{{ num }}</fake-content>
                </div>
            </template>
        </lay-two-columns>


        <p>lay-two-columns 所有属性</p>
        <pre>
            <code class="language-js" v-html="getCode(code11)">
            </code>
        </pre>
    </div>
</template>

<script>
    import Prism from 'prismjs';
    import FakeContent from '../components/fake-content'
    export default {
        components: { FakeContent },
        data() {
            return {
                leftStyle: {
                    border: '1px solid red',
                    'box-sizing': 'border-box'
                },
                rightStyle: {
                    border: '1px solid green',
                    'box-sizing': 'border-box'
                },
                code1: `
                    <lay-two-columns fix="left" width="200px">
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    fix属性: 类型String left/right; (默认值: left)
                        left表示左列为定宽,右列自适应
                        right表示右列为定宽,左列自适应

                    width属性: 类型String 200px;  (默认值: 0px)
                        当fix="left"时表示左列定宽200px,
                        当fix="right"时表示右列定宽200px
                `,

                code2: `
                    <lay-two-columns fix="left" width="200px" height="500px">
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    height属性: 类型String auto; (默认值: auto)
                        左列和右列容器的高度
                `,

                code3: `
                    <lay-two-columns 
                        fix="left" 
                        width="200px" 
                        height="500px" 
                        nativeScrollbar
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    nativeScrollbar属性: 类型Boolean false; (默认值: false)
                        是否使用原生滚动条
                `,

                code4: `
                    <lay-two-columns 
                        fix="left" 
                        width="200px" 
                        height="500px" 
                        nativeScrollbar
                        overflow="hidden"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    overflow属性: 类型String auto/visible/hidden/scroll/inherit; 
                        该属性会作用在左列和右列容器上(默认值: auto)
                `,

                code5: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    fix属性: 类型String left/right; (默认值: left)
                        left表示左列为定宽,右列自适应
                        right表示右列为定宽,左列自适应
                `,

                code6: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                        height="500px"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>
                `,

                code7: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                        height="500px"
                        nativeScrollbar
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>
                `,

                code8: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                        height="500px"
                        nativeScrollbar
                        overflow="hidden"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>
                `,

                code9: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                        height="500px"
                        nativeScrollbar
                        :leftStyle="leftStyle" 
                        :rightStyle="rightStyle"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    leftStyle属性: 类型Object {}; (默认值: {})
                        该属性会作用在左列容器上

                    rightStyle属性: 类型Object {}; (默认值: {})
                        该属性会作用在右列容器上
                `,

                code10: `
                    <lay-two-columns 
                        fix="right" 
                        width="200px"
                        height="500px"
                        nativeScrollbar
                        leftClass="left-class" 
                        rightClass="right-class"
                    >
                        <template v-slot:left>
                            ...
                        </template>
                        <template v-slot:right>
                            ...
                        </template>
                    </lay-two-columns>

                    属性说明:

                    leftClass属性: 类型String ''; (默认值: '')
                        该属性会作用在左列容器上

                    rightClass属性: 类型String''; (默认值: '')
                        该属性会作用在右列容器上
                `,

                code11: `
                    props: {
                        fix: { // 左边定宽/右边定宽
                            type: String,
                            default: 'left' // left/right
                        },
                        nativeScrollbar: { // 是否使用原生滚动条
                            type: Boolean,
                            default: false
                        },
                        width: { // .left/.right容器的宽度
                            type: String,
                            default: '0px'
                        },
                        height: { // .left和.right容器的高度
                            type: String,
                            default: 'auto'
                        },
                        overflow: { // .left和.right容器的滚动条是否出现
                            type: String,
                            default: 'auto'
                        },
                        leftStyle: { // .left容器style样式
                            type: [Object],
                            default: () => {}
                        },
                        leftClass: { // left容器class样式类
                            type: [String],
                            default: ''
                        },
                        rightStyle: { // .right容器style样式
                            type: [Object],
                            default: () => {}
                        },
                        rightClass: { // right容器class样式类
                            type: [String],
                            default: ''
                        }
                    }
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

<style lang="scss">
    .test-box {
        margin-bottom: 30px;
        border: 1px solid #dcdfe6;
    }

    .right-content {
        padding-left: 10px;
    }

    .left-class,
    .right-class {
        padding: 10px;
        box-sizing: border-box;
    }
</style>