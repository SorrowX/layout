<template>
    <div class="lay-collapse-demo">
        <h1>折叠面板组件</h1>
        <h3>1. LayCollapse组件: 使用v-model或者value属性激活当前面板,面板之间不影响</h3>
        <pre>
            <code class="language-js" v-html="getCode(code1)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-collapse v-model="activeNames" @change="handleChange">
            <lay-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </lay-collapse-item>
            <lay-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </lay-collapse-item>
            <lay-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </lay-collapse-item>
            <lay-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </lay-collapse-item>
        </lay-collapse>
        <div style="margin-bottom: 50px"></div>

        <h3>2. LayCollapse组件: 使用accordion属性开启手风琴模式</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;LayCollapse组件: 使用自定义change事件,来监听当前点击了哪个面板及激活的面板集合</h3>
        <pre>
            <code class="language-js" v-html="getCode(code2)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-collapse v-model="activeNames1" @change="handleChange" accordion>
            <lay-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </lay-collapse-item>
            <lay-collapse-item title="反馈 Feedback" name="2">
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </lay-collapse-item>
            <lay-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </lay-collapse-item>
            <lay-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </lay-collapse-item>
        </lay-collapse>
        <div style="margin-bottom: 50px"></div>

        <h3>3. LayCollapseItem组件: 使用name属性标识唯一性</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;LayCollapseItem组件: 使用title属性,来显示头部标题</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;LayCollapseItem组件: 使用disabled属性,来禁止点击</h3>
        <pre>
            <code class="language-js" v-html="getCode(code3)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-collapse v-model="activeNames2" @change="handleChange">
            <lay-collapse-item title="一致性 Consistency" name="1">
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </lay-collapse-item>
            <lay-collapse-item title="反馈 Feedback" name="2" disabled>
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </lay-collapse-item>
            <lay-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </lay-collapse-item>
            <lay-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </lay-collapse-item>
        </lay-collapse>
        <div style="margin-bottom: 50px"></div>


        <h3>4. LayCollapseItem组件: 使用v-slot:header插槽 来自定义整个header</h3>
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;LayCollapseItem组件: 使用v-slot:title插槽 来自定义title块</h3>
        <pre>
            <code class="language-js" v-html="getCode(code4)">
            </code>
        </pre>
        <p>效果:</p>
        <lay-collapse v-model="activeNames3" @change="handleChange2">
            <lay-collapse-item title="一致性 Consistency" name="1">
                <template v-slot:header>
                    <div>
                        <i class="lay-arrow-left" :style="customArrowStyle" style="margin-right: 6px;"></i>
                        <span style="color: green">我是自定义头部</span>
                    </div>
                </template>
                <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </lay-collapse-item>
            <lay-collapse-item title="反馈 Feedback" name="2">
                <template v-slot:title>
                    <span style="color: red">我是自定义title</span>
                </template>
                <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </lay-collapse-item>
            <lay-collapse-item title="效率 Efficiency" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </lay-collapse-item>
            <lay-collapse-item title="可控 Controllability" name="4">
                <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </lay-collapse-item>
        </lay-collapse>
        <div style="margin-bottom: 50px"></div>
        
        <p>lay-collapse 组件所有prop属性和自定义事件名</p>
        <pre>
            <code class="language-js" v-html="getCode(code5)">
            </code>
        </pre>
        <div style="margin-bottom: 50px"></div>

        <p>lay-collapse-item 组件所有prop属性</p>
        <pre>
            <code class="language-js" v-html="getCode(code6)">
            </code>
        </pre>
        
    </div>
    
</template>

<script>
    import Prism from 'prismjs';
    export default {
        data() {
            return {
                activeNames: ['1'],
                activeNames1: '1',
                activeNames2: ['1'],
                activeNames3: ['1'],

                isCollapse: false,

                code1: `
                    <template>
                        <lay-collapse v-model="activeNames">
                            <lay-collapse-item title="标题1" name="uid1">
                                ...
                            </lay-collapse-item>
                            <lay-collapse-item title="标题1" name="uid2">
                                ...
                            </lay-collapse-item>
                        </lay-collapse>
                    </template>

                    属性说明:
                        value / v-model属性: 类型[Number, String, Array];  (默认值: [])
                            当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
                `,

                code2: `
                    <template>
                        <lay-collapse v-model="activeNames" accordion @change="handlerChange">
                            <lay-collapse-item title="标题1" name="uid1">
                                ...
                            </lay-collapse-item>
                            <lay-collapse-item title="标题1" name="uid2">
                                ...
                            </lay-collapse-item>
                        </lay-collapse>
                    </template>

                    属性说明:
                        accordion属性: 类型[Boolean];  (默认值: false)
                            是否开启手风琴模式
                        自定义change事件名: 参数(curName, names) 
                            curName: 类型[Number, String] 当前点击lay-collapse-item组件的name名
                            names: 类型[Array] 所有激活的lay-collapse-item组件name的集合
                `,

                code3: `
                    <template>
                        <lay-collapse v-model="activeNames2" @change="handlerChange">
                            <lay-collapse-item title="标题1" name="uid1">
                                ...
                            </lay-collapse-item>
                            <lay-collapse-item title="标题1" name="uid2" disabled>
                                ...
                            </lay-collapse-item>
                        </lay-collapse>
                    </template>

                    属性说明:
                        disabled属性: 类型[Boolean];  (默认值: false)
                            是否禁止点击
                        name属性: 类型[Number, String];  (默认值:  自动生成的uid唯一标识)
                            唯一标识
                        title属性: 类型[Boolean];  (默认值: '')
                            面板标题
                `,

                code4: `
                    <template>
                        <lay-collapse v-model="activeNames2" @change="handlerChange2">
                            <lay-collapse-item title="一致性 Consistency" name="1">
                                <template v-slot:header>
                                    <div>
                                        <i class="lay-arrow-left" :style="customArrowStyle" style="margin: 0 6px"></i>
                                        <span>我是自定义头部</span>
                                    </div>
                                </template>
                                ...
                            </lay-collapse-item>
                            <lay-collapse-item title="反馈 Feedback" name="2">
                                <template v-slot:title>
                                    <span style="color: red">我是自定义title</span>
                                </template>
                                ...
                            </lay-collapse-item>
                        </lay-collapse>
                    </template>

                    属性说明:
                        具名插槽header: 可以自定义类.lay-collapse-item__header的孩子, 自定义整个头部 
                        具名插槽title: 可以自定义类.lay-collapse-item__title的孩子 
                `,

                code5: `
                    // props
                    props: {
                        value: { // 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array)
                            type: [Number, String, Array],
                            default: function() {
                                return []
                            }
                        },
                        accordion: { // 是否手风琴模式
                            type: Boolean,
                            default: false
                        }
                    }

                    // 自定义事件名
                    @change="fn(curName, names)"
                        curName: 类型[Number, String] 当前点击lay-collapse-item组件的name名
                        names: 类型[Array] 所有激活的lay-collapse-item组件name的集合
                `,

                code6: `
                    props: {
                        name: { // 唯一标志符
                            type: [Number, String],
                            default: ''
                        },
                        title: { // 面板标题
                            type: String,
                            default: ''
                        },
                        disabled: { // 是否禁用
                            type: Boolean,
                            default: false
                        }
                    }
                `
            }
        },
        computed: {
            customArrowStyle() {
                return this.isCollapse ? { transform: 'rotate(-90deg)' } : { transform: 'rotate(0deg)' }
            }
        },
        methods: {
            handleChange(curName, names) {
                console.log(curName, names)
            },
            handleChange2(curName, names) {
                if (curName == 1) {
                    this.isCollapse = !names.includes(curName)
                }
            },
            getCode(code) {
                return Prism.highlight(code, Prism.languages.javascript, 'javascript')
            }
        },
        updated() {
            this.$root.$emit('update-main-container-scrollbar')
        }
    }
</script>

<style lang="scss" scoped>
    .lay-collapse-demo {
        margin-top: 20px;
    }
    .box1 {
        // width: 500px;
        // height: 500px;
        padding: 10px;
        background: #ccc;
        border: 1px solid red;
    }
    .test {
        max-width: 500px;
    }
</style>