<template>
    <div class="test-scrollbar">
        <h1>滚动条组件</h1>
        <p>1.给lay-scrollbar组件容器设置宽度和高度,内容超出时会出现滚动条</p>
        <pre>
            <code class="language-js" v-html="getCode(code1)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-scrollbar class="lay-scrollbar-box">
            <div class="conent">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <p>2.添加autoshow属性, 内容超出,当鼠标移入时显示滚动条,移出时隐藏滚动条</p>
        <p>&nbsp; 添加class属性, 会把css类名应用在根dom元素上,也可以直接使用class属性</p>
        <pre>
            <code class="language-js" v-html="getCode(code2)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-scrollbar class="lay-scrollbar-box2" autoshow>
            <div class="conent">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <p>3.添加onResize属性, 窗口改变时触发的回调</p>
        <p>&nbsp; 添加minThumbSize属性, 滚动条的最小长度或高度</p>
        <pre>
            <code class="language-js" v-html="getCode(code3)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-scrollbar class="lay-scrollbar-box3" :minThumbSize="30">
            <div class="conent2">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <p>4.添加native属性, 使用原生滚动条</p>
        <pre>
            <code class="language-js" v-html="getCode(code4)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-scrollbar style="height: 400px; overflow:auto;" native>
            <div class="conent2">
                <fake-content v-for="num in 10" :key="num" height="200px">{{ num }}</fake-content>
            </div>
        </lay-scrollbar>

        <p>lay-scrollbar 组件所有属性</p>
        <pre>
            <code class="language-js" v-html="getCode(code5)">
            </code>
        </pre>
    </div>
</template>

<script>
    import FakeContent from '../components/fake-content'
    import Prism from 'prismjs'

    export default {
        components: { FakeContent },
        data() {
            return {
                testClass1: 'c1',
                testClass2: { c2: true, c3: true },
                testClass3: [ 'c1', { c2: true, c3: true } ],
                testStyle1: { color: 'red', 'font-size': '16px' },
                testStyle2: [ {color: 'red', 'font-size': '16px'}, { background: '#000' } ],
                code1: `
                    <template>
                        <lay-scrollbar style="width: 200px; height: 400px;">
                            ...
                        </lay-scrollbar>
                    </template>

                    说明: 需要给容器添加宽度和高度,滚动条才能出来
                `,
                code2: `
                    <template>
                        <lay-scrollbar 
                            style="width: 200px; height: 400px;"
                            class="lay-scrollbar-box2"
                            autoshow
                        >
                            ...
                        </lay-scrollbar>
                    </template>

                    属性说明:
                        autoshow属性: 类型Boolean; (默认值: false)
                            移入显示滚动条,移出隐藏滚动条
                        
                        class属性: 类型String; (默认值: '') 也可以直接使用class属性
                            应用在根dom元素的css类名
                    
                    自定义滚动条样式:
                        <style>
                            .lay-scrollbar-box2>>>.gm-scrollbar {
                                left: 2px;
                                right: 0;
                                border-radius: 5px;
                            }
                            .lay-scrollbar-box2>>>.gm-scrollbar .thumb {
                                background-color: rgba(111, 87, 140, .4);
                            }
                            .lay-scrollbar-box2>>>.gm-scrollbar.-vertical{
                                width: 8px;
                            }
                            .lay-scrollbar-box2>>>.gm-scrollbar.-horizontal {
                                height: 8px;
                            }
                        </style>
                `,

                code3: `
                    <template>
                        <lay-scrollbar 
                            style="width: 200px; height: 400px;"
                            class="lay-scrollbar-box3"
                            :onResize="() => { }"
                            :minThumbSize="30"
                        >
                            ...
                        </lay-scrollbar>
                    </template>

                    属性说明:
                        onResize属性: 类型Function; (默认值: 空函数)
                            窗口改变时触发的回调
                        
                        minThumbSize属性: 类型Number; (默认值: 20)
                            滚动条的最小长度或高度
                    
                    自定义滚动条样式:
                        <style>
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
                `,

                code4: `
                    <template>
                        <lay-scrollbar 
                            style="height: 400px; overflow: auto;"
                            native
                        >
                            ...
                        </lay-scrollbar>
                    </template>

                    属性说明:
                        native属性: 类型Boolean; (默认值: false)
                            是否使用原生滚动条
                `,

                code5: `
                    props: {
                        autoshow: { // 滚动条是否自动显示
                            type: Boolean,
                            default: false
                        },
                        onResize: { // 窗口改变时触发的回调
                            type: Function,
                            default: () => {}
                        },
                        minThumbSize: { // 滚动条的最小长度或高度
                            type: Number,
                            default: 20
                        },
                        native: { // 是否使用原生滚动条
                            type: Boolean,
                            default: false
                        },
                        tag: { // 根dom的元素的标签名
                            type: String,
                            default: 'div'
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