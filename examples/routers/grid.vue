<template>
    <div class="test-grid">
        <h1>栅格布局, lay-row组件为容器,lay-col为容器的项目</h1>
        <h3>1.给lay-col组件设置span来给项目分配宽度</h3>
        <pre>
            <code class="language-js" v-html="getCode(code1)">
            </code>
        </pre>
        <p>Ⅰ. span默认24 占比100%</p>
        <lay-row>
            <lay-col><div class="grid-content">:span="24" 100%</div></lay-col>
        </lay-row>

        <p>Ⅱ. 2列</p>
        <lay-row>
            <lay-col :span="12"><div class="grid-content">:span="12" 50%</div></lay-col>
            <lay-col :span="12"><div class="grid-content">:span="12" 50%</div></lay-col>
        </lay-row>

        <p>Ⅲ. 4列</p>
        <lay-row>
            <lay-col :span="6"><div class="grid-content">:span="6" 25%</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6" 25%</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6" 25%</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6" 25%</div></lay-col>
        </lay-row>

        <p>Ⅳ. 6列</p>
        <lay-row>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
        </lay-row>
        <!-- <hr /> -->

        <h3>2.给lay-row组件设置gutter属性,使子项目之间存在间隔</h3>
        <pre>
            <code class="language-js" v-html="getCode(code2)">
            </code>
        </pre>
        <p>Ⅰ. 子项目之间20px的间隔</p>
        <lay-row :gutter="20">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>
        <!-- <hr /> -->

        <h3>3.给lay-col组件设置offset,pull,push使子项目偏移</h3>
        <pre>
            <code class="language-js" v-html="getCode(code3)"></code>
        </pre>
        <p>Ⅰ. 给lay-col组件设置offset值为6,表示向右偏移百分之1/24*6*100 (原理:给类lay-col的tag元素添加 margin-left: 1/24*6*100%)</p>
        <lay-row :gutter="20">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6" :offset="6"><div class="grid-content">:span="6" :offset="6"</div></lay-col>
        </lay-row>
        <p>Ⅱ. 给lay-col组件设置push值为6,表示向右偏移百分之1/24*5*100 (原理:给类lay-col的tag元素添加 position: relative; left: 1/24*5*100%)</p>
        <lay-row>
            <lay-col :span="12" :push="5"><div class="grid-content">:span="12" :push="5"</div></lay-col>
        </lay-row>
        <p>Ⅲ. 给lay-col组件设置pull值为1,表示向左偏移百分之1/24*1*100 (原理:给类lay-col的tag元素添加 position: relative; right: 1/24*1*100%)</p>
        <lay-row>
            <lay-col :span="4"><div class="grid-content">:span="4"</div></lay-col>
            <lay-col :span="6" :offset="4" :pull="1"><div class="grid-content">:span="6" :offset="4" :pull="1"</div></lay-col>
        </lay-row>
        <!-- <hr /> -->

        <h3>4.给lay-row组件设置type justify align属性,开启flex布局</h3>
        <pre>
            <code class="language-js" v-html="getCode(code4)">
            </code>
        </pre>
        <p>Ⅰ. type="flex" <span class="red-text">justify="start"</span> align="middle"</p>
        <lay-row type="flex" justify="start" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅱ. type="flex" <span class="red-text">justify="end"</span> align="middle"</p>
        <lay-row type="flex" justify="end" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅲ. type="flex" <span class="red-text">justify="center"</span> align="middle"</p>
        <lay-row type="flex" justify="center" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅳ. type="flex" <span class="red-text">justify="space-around"</span> align="middle"</p>
        <lay-row type="flex" justify="space-around" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅴ. type="flex" <span class="red-text">justify="space-between"</span> align="middle"</p>
        <lay-row type="flex" justify="space-between" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅵ. type="flex" <span class="red-text">justify="space-evenly"</span> align="middle"</p>
        <lay-row type="flex" justify="space-evenly" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅶ. type="flex" justify="center" <span class="red-text">align="top"</span> </p>
        <lay-row type="flex" justify="center" align="top" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅷ. type="flex" justify="center" <span class="red-text">align="middle"</span> </p>
        <lay-row type="flex" justify="center" align="middle" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>

        <p>Ⅸ. type="flex" justify="center" <span class="red-text">align="bottom"</span></p>
        <lay-row type="flex" justify="center" align="bottom" style="height: 100px; border: 1px solid #ccc;">
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
            <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
        </lay-row>
        <!-- <hr /> -->

        <h3>5.使用预设预五个响应尺寸：xs、sm、md、lg 和 xl,进行响应式布局</h3>
        <pre>
            <code class="language-js" v-html="getCode(code5)">
            </code>
        </pre>
        <p>Ⅰ. xs、sm、md、lg、xl可以是Number或者Object</p>
        <ul class="ul-style">
            <li>xs: @media only screen and (max-width: 767px)</li>
            <li>sm: @media only screen and (min-width: 768px)</li>
            <li>md: @media only screen and (min-width: 992px)</li>
            <li>lg: @media only screen and (min-width: 1200px)</li>
            <li>xl: @media only screen and (min-width: 1920px)</li>
        </ul>
        <lay-row :gutter="10">
            <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content">1</div></lay-col>
            <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content">2</div></lay-col>
            <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content">3</div></lay-col>
            <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content">4</div></lay-col>
        </lay-row>

        <p>Ⅱ. 在不同的屏幕尺寸下隐藏类</p>
        <ul class="ul-style">
            <li>hidden-xs-only - 当视口在 xs 尺寸时隐藏 <span class="red-text">@media only screen and (max-width: 767px)</span></li>
            <li class="li--hidden"></li>

            <li>hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 768px)</span></li>
            <li>hidden-sm-only - 当视口在 sm 尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 768px) and (max-width: 991px)</span></li>
            <li>hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏 <span class="red-text">@media only screen and (max-width: 991px)</span></li>
            <li class="li--hidden"></li>

            <li>hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 992px)</span></li>
            <li>hidden-md-only - 当视口在 md 尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 992px) and (max-width: 1199px)</span></li>
            <li>hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏 <span class="red-text">@media only screen and (max-width: 1199px)</span></li>
            <li class="li--hidden"></li>

            <li>hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 1200px)</span></li>
            <li>hidden-lg-only - 当视口在 lg 尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 1200px) and (max-width: 1919px)</span></li>
            <li>hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏 <span class="red-text">@media only screen and (max-width: 1919px)</span></li>
            <li class="li--hidden"></li>

            <li>hidden-xl-only - 当视口在 xl 尺寸时隐藏 <span class="red-text">@media only screen and (min-width: 1920px)</span></li>
        </ul>
        <lay-row :gutter="10">
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
                <div class="grid-content">class="hidden-sm-only"</div>
            </lay-col>
            <lay-col
                :xs="24"
                class="hidden-sm-only hidden-md-only"
                :lg="6"
            >
                <div class="grid-content">class="hidden-sm-only hidden-md-only"</div>
            </lay-col>
            <lay-col
                :xs="24"
                :sm="12" 
                :md="8"
                :lg="6"
            >
                <div class="grid-content">4</div>
            </lay-col>
        </lay-row>

        <p>Ⅲ. 使用对象的形式 对象的key有span pull push offset这4个属性</p>
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

        <p>Ⅳ. span pull push offset 属性可以通过内嵌到 xs sm md lg 属性中来使用。其中 :xs="6" 相当于 :xs="{ span: 6 }"。</p>
        <lay-row>
            <lay-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-content">1</div></lay-col>
            <lay-col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-content">2</div></lay-col>
            <lay-col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }"><div class="grid-content">3</div></lay-col>
        </lay-row>

        <h3>lay-row 组件所有属性</h3>
        <pre>
            <code class="language-js" v-html="getCode(code6)">
            </code>
        </pre>
        <h3>lay-col 组件所有属性</h3>
        <pre>
            <code class="language-js" v-html="getCode(code7)">
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
                code1: `
                    <template>
                        <lay-row>
                            <lay-col :span="12"><div class="grid-content">内容</div></lay-col>
                            <lay-col :span="12"><div class="grid-content">内容</div></lay-col>
                        </lay-row>
                    </template>

                    属性说明:
                        lay-col组件的span属性: 类型Number; (默认值: 24) 0~24
                           每个子项目宽度所占的百分比: 1 / 24 * span * 100%
                `,
                code2: `
                    <lay-row :gutter="20">
                        <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
                        <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
                        <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
                        <lay-col :span="6"><div class="grid-content">:span="6"</div></lay-col>
                    </lay-row>

                    属性说明:
                        lay-row组件的gutter属性: 类型Number; (默认值: 0) 单位px
                           每个子项目会添加padding-left = padding-right = (gutter/2)px,
                           父容器会添加margin-left = margin-right = -(gutter/2)px
                `,
                code3: `
                    <lay-row :gutter="20">
                        <lay-col :span="4">内容</lay-col>
                        <lay-col :span="4" :offset="1">内容</lay-col>
                        <lay-col :span="4" :push="1">内容</lay-col>
                        <lay-col :span="4" :offset="2" :pull="1">内容</lay-col>
                    </lay-row>

                    属性说明:
                        lay-col组件的offset属性: 类型Number; 0~24
                           给元素添加margin-left值,使其向右偏移
                        
                        lay-col组件的push属性: 类型Number; 0~24
                           给元素添加position: relative和left:值,使其向右偏移

                        lay-col组件的pull属性: 类型Number; 0~24
                           给元素添加position: relative和right:值,使其向左偏移
                `,
                code4: `
                    <lay-row type="flex" justify="center" align="center">
                        <lay-col :span="4">内容</lay-col>
                        <lay-col :span="4">内容</lay-col>
                        <lay-col :span="4">内容</lay-col>
                        <lay-col :span="4">内容</lay-col>
                    </lay-row>

                    属性说明:
                        lay-row组件的type属性: 类型String (默认值: '')
                           type的值为flex时开启flex布局
                        
                        lay-row组件的justify属性: 类型String (默认值: start)
                           start: 相当于 justify-content: flex-start;
                           end: 相当于 justify-content: flex-end;
                           center: 相当于 justify-content: center;
                           space-around: 相当于 justify-content: space-around;
                           space-between: 相当于 justify-content: space-between;
                           space-evenly: 相当于 justify-content: space-evenly;

                        lay-row组件的align属性: 类型String (默认值: top)
                           top: 相当于 align-items: flex-start;
                           middle: 相当于 align-items: center;
                           bottom: 相当于 align-items: flex-end;
                `,
                code5: `
                    <lay-row :gutter="10">
                        <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">1</lay-col>
                        <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">2</lay-col>
                        <lay-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">3</lay-col>
                        <lay-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">4</lay-col>
                    </lay-row>

                    属性说明:
                        xs属性: 类型[Number, Object]
                            @media only screen and (max-width: 767px)

                        sm属性: 类型[Number, Object]
                            @media only screen and (min-width: 768px)

                        md属性: 类型[Number, Object]
                            @media only screen and (min-width: 992px)

                        lg属性: 类型[Number, Object]
                            @media only screen and (min-width: 1200px)

                        xl属性: 类型[Number, Object]
                            @media only screen and (min-width: 1920px)
                        
                `,
                code6: `
                    props: {
                        type: String, // flex 开启弹性布局
                        gutter: { // 项目之间的间隔
                            type: Number,
                            default: 0
                        },
                        justify: { // flex容器的justify-content属性
                            type: String,
                            default: 'start' // start/end/center/space-around/space-between/space-evenly
                        },
                        align: { // flex容器的align-items属性
                            type: String,
                            default: 'top' // top/middle/bottom
                        },
                        tag: { // 自定义标签
                            type: String,
                            default: 'div'
                        }
                    }
                `,
                code7: `
                    props: {
                        span: { // 项目宽度的占比
                            type: Number,
                            default: 24
                        },
                        push: Number, // 向右偏移
                        pull: Number, // 向左偏移
                        offset: Number, // 向右偏移
                        xs: [Number, Object],
                        sm: [Number, Object],
                        md: [Number, Object],
                        lg: [Number, Object],
                        xl: [Number, Object],
                        tag: { // 自定义标签
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
    .grid-content {
        height: 36px;
        border: 1px solid #ccc;
        text-align: center;
        line-height: 36px;
        overflow: hidden;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    h3 {
        margin-top: 50px;
    }

    .red-text {
        color: red;
    }

    .ul-style {
        padding-left: 50px;
        list-style: circle;
        li {
            margin-bottom: 15px;
        }
    }

    .li--hidden {
        visibility: hidden;
        margin: 0 !important;
    }
</style>