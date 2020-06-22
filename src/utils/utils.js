const camelizeRE = /-(\w)/g
export const camelize = str => {
    return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}

export const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const hyphenateRE = /\B([A-Z])/g
export const hyphenate = str => {
    return str.replace(hyphenateRE, '-$1').toLowerCase()
}

export function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key]
    }
    return to
}
  
export function toObject(arr) {
    var res = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i])
        }
    }
    return res
}

export function isArray(arr) {
    return Array.isArray(arr)
}

export function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]'
}

export function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]'
}

export function isHtmlElement(node) {
    return node && node.nodeType === Node.ELEMENT_NODE
}

export const isFunction = (functionToCheck) => {
    var getType = {}
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]'
}

export const isUndefined = (val)=> {
    return val === void 0
}

export const isDefined = (val) => {
    return val !== undefined && val !== null
}