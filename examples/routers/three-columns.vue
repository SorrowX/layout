<template>
    <div class="test-three-columns">
        <h1>右侧自适应,左侧和中间定宽</h1>
        <h3>1. 给定左侧和中间容器的宽度，右侧容器自适应，容器由内容撑开</h3>
        <pre>
            <code class="language-js" v-html="getCode(code1)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" leftClass="left" rightClass="right" centerClass="center">
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

        <h3>2. 给定height属性,当内容超出时出现自定义滚动条</h3>
        <pre>
            <code class="language-js" v-html="getCode(code2)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px">
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

        <h3>3. 给定nativeScrollbar属性,当内容超出时出现原生滚动条</h3>
        <pre>
            <code class="language-js" v-html="getCode(code3)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px" nativeScrollbar>
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

        <h3>4. 给定overflow属性,当内容超出时内容隐藏</h3>
        <pre>
            <code class="language-js" v-html="getCode(code4)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns adapt="right" leftWidth="100px" centerWidth="200px" height="500px" overflow="hidden" leftClass="left" rightClass="right" centerClass="center">
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

        <h3>5. 可以分别给左侧/中间/右侧容器添加样式和class类</h3>
        <pre>
            <code class="language-js" v-html="getCode(code5)">
            </code>
        </pre>
        <p>效果:</p>
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

        <!-- <hr> -->

        <!-- <lay-three-columns 
            adapt="left" 
            centerWidth="100px" 
            rightWidth="200px"
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
        </lay-three-columns> -->

        <h1>左侧自适应,中间和右侧定宽</h1>
        <h3>6. 给定adapt为left, 左侧容器则自适应</h3>
        <pre>
            <code class="language-js" v-html="getCode(code6)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns adapt="left" centerWidth="100px" rightWidth="200px" height="500px">
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

        <!-- <lay-three-columns adapt="left" centerWidth="100px" rightWidth="200px" height="500px" nativeScrollbar>
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns>  -->

        <!-- <lay-three-columns adapt="left" centerWidth="100px" rightWidth="200px" height="500px" nativeScrollbar overflow="hidden">
            <template v-slot:left>
                <fake-content v-for="num in 5" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:center>
                <fake-content v-for="num in 7" :key="num">{{ num }}</fake-content>
            </template>
            <template v-slot:right>
                <fake-content v-for="num in 9" :key="num">{{ num }}</fake-content>
            </template>
        </lay-three-columns>  -->

        <!-- <lay-three-columns 
            adapt="left" 
            centerWidth="100px" 
            rightWidth="200px" 
            height="500px" 
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
        </lay-three-columns>  -->

        <!-- <hr/> -->

        <!-- <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
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
        </lay-three-columns> -->

        <h1>中间自适应,左侧和右侧定宽</h1>
        <h3>7. 给定adapt为center, 中间容器则自适应</h3>
        <pre>
            <code class="language-js" v-html="getCode(code7)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
            height="500px"
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

        <!-- <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
            height="500px"
            nativeScrollbar
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
        </lay-three-columns> -->

        <!-- <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
            height="500px"
            overflow="hidden"
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
        </lay-three-columns> -->

        <!-- <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
            height="500px"
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
        </lay-three-columns> -->

        <h1>滚动条是否自动显示</h1>
        <h3>8. 给定autoshow, 滚动条是否自动显示</h3>
        <pre>
            <code class="language-js" v-html="getCode(code8)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-three-columns 
            adapt="center" 
            leftWidth="150px" 
            rightWidth="150px"
            height="500px"
            autoshow
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

        <p>lay-three-columns 组件所有属性</p>
        <pre>
            <code class="language-js" v-html="getCode(code9)">
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
                centerClass: { c1: true, c2: true },

                code1: `
                    <template>
                        <lay-three-columns 
                            adapt="right" 
                            leftWidth="100px" 
                            centerWidth="200px"
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        adapt属性: 类型String; left/center/right (默认值: right)
                            指定右侧/左侧/中间容器自适应

                        leftWidth: 类型String;  (默认值: 0px)
                            指定左侧容器的宽度
                            
                        centerWidth: 类型String;  (默认值: 0px)
                            指定中间容器的宽度
                `,

                code2: `
                    <template>
                        <lay-three-columns 
                            adapt="right" 
                            leftWidth="100px" 
                            centerWidth="200px"
                            height="500px"
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        height属性: 类型String; (默认值: auto)
                            left/center/right容器的高度
                `,

                code3: `
                    <template>
                        <lay-three-columns 
                            adapt="right" 
                            leftWidth="100px" 
                            centerWidth="200px"
                            height="500px"
                            nativeScrollbar
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        nativeScrollbar属性: 类型Boolean; (默认值: false)
                            是否使用原生滚动条
                `,

                code4: `
                    <template>
                        <lay-three-columns 
                            adapt="right" 
                            leftWidth="100px" 
                            centerWidth="200px"
                            height="500px"
                            overflow="hidden"
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        overflow属性: 类型String; (默认值: auto)
                            left/center/right容器的滚动条是否出现,可用值 auto/visible/hidden/scroll/inherit
                `,

                code5: `
                    <template>
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
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        leftStyle属性: 类型[Object, Array]; (默认值: {})
                        leftClass属性: 类型[String, Object, Array]; (默认值: '')
                        centerStyle属性: 类型[Object, Array]; (默认值: {})
                        centerClass属性: 类型[String, Object, Array]; (默认值: '')
                        rightStyle属性: 类型[Object, Array]; (默认值: {})
                        rightClass属性: 类型[String, Object, Array]; (默认值: '')

                        使用后直接作用在对应的容器上，可以参考Vue官方教程 https://cn.vuejs.org/v2/guide/class-and-style.html
                `,

                code6: `
                    <template>
                        <lay-three-columns 
                            adapt="left" 
                            centerWidth="100px" 
                            rightWidth="200px"
                            height="500px"
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        adapt属性: 类型String; left/center/right (默认值: right)
                            指定右侧/左侧/中间容器自适应

                        rightWidth: 类型String;  (默认值: 0px)
                            指定右侧容器的宽度
                            
                        centerWidth: 类型String;  (默认值: 0px)
                            指定中间容器的宽度
                `,

                code7: `
                    <template>
                        <lay-three-columns 
                            adapt="center" 
                            leftWidth="150px" 
                            rightWidth="150px"
                            height="500px"
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        adapt属性: 类型String; left/center/right (默认值: right)
                            指定右侧/左侧/中间容器自适应

                        leftWidth: 类型String;  (默认值: 0px)
                            指定左侧容器的宽度
                            
                        rightWidth: 类型String;  (默认值: 0px)
                            指定右侧容器的宽度
                `,

                code8: `
                    <template>
                        <lay-three-columns 
                            adapt="center" 
                            leftWidth="150px" 
                            rightWidth="150px"
                            height="500px"
                            autoshow
                        >
                            <template v-slot:left>
                                ...
                            </template>
                            <template v-slot:center>
                                ...
                            </template>
                            <template v-slot:right>
                                ...
                            </template>
                        </lay-three-columns>
                    </template>

                    属性说明:
                        autoshow属性: 类型Boolean; (默认值: false)
                            自定义滚动条是否自动显示
                `,

                code9: `
                    props: {
                        adapt: { // 自适应
                            type: String,
                            default: 'right' // left/center/right
                        },
                        nativeScrollbar: { // 是否使用原生滚动条
                            type: Boolean,
                            default: false
                        },
                        autoshow: { // 滚动条是否自动显示
                            type: Boolean,
                            default: false
                        },
                        leftWidth: { // left容器的宽度
                            type: String,
                            default: '0px'
                        },
                        centerWidth: { // center容器的宽度
                            type: String,
                            default: '0px'
                        },
                        rightWidth: { // right容器的宽度
                            type: String,
                            default: '0px'
                        },
                        height: { // left/center/right容器的高度
                            type: String,
                            default: 'auto'
                        },
                        overflow: { // left/center/right容器的滚动条是否出现 auto/visible/hidden/scroll/inherit
                            type: String,
                            default: 'auto'
                        },
                        leftStyle: { // left容器style样式
                            type: [Object, Array],
                            default: () => {}
                        },
                        leftClass: { // left容器class样式类
                            type: [String, Object, Array],
                            default: ''
                        },
                        centerStyle: { // center容器style样式
                            type: [Object, Array],
                            default: () => {}
                        },
                        centerClass: { // center容器class样式类
                            type: [String, Object, Array],
                            default: ''
                        },
                        rightStyle: { // right容器style样式
                            type: [Object, Array],
                            default: () => {}
                        },
                        rightClass: { // right容器class样式类
                            type: [String, Object, Array],
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
    .c1 {
        border: 1px solid green;
    }
    .left {
        border: 1px solid red;
    }

    .center {
        border: 1px solid green;
    }

    .right {
        border: 1px solid #f60;
    }
</style>