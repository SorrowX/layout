
export const trim = function(str) {
    return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

export const hasClass = function(el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
}

export const addClass = function(el, cls) {
    if (!el) return
    let curClass = el.className
    const classes = (cls || '').split(' ')
  
    for (let i = 0, j = classes.length; i < j; i++) {
        const clsName = classes[i]
        if (!clsName) continue
    
        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}
  
export const removeClass = function(el, cls) {
    if (!el || !cls) return
    const classes = cls.split(' ')
    let curClass = ' ' + el.className + ' '
  
    for (let i = 0, j = classes.length; i < j; i++) {
        let clsName = classes[i]
        if (!clsName) continue
    
        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ')
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
}

export const on = (function() {
    if (document.addEventListener) {
        return function(element, event, handler) { // 标准
            if (element && event && handler) {
                element.addEventListener(event, handler, false)
            }
        }
    } else {
        return function(element, event, handler) { // ie
            if (element && event && handler) {
                element.attachEvent('on' + event, handler)
            }
        }
    }
})()
  
export const off = (function() {
    if (document.removeEventListener) {
        return function(element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false)
            }
        }
    } else {
        return function(element, event, handler) {
            if (element && event) {
                element.detachEvent('on' + event, handler)
            }
        }
    }
})()
  
export const once = function(el, event, fn) {
    const listener = function() {
        if (fn) {
            fn.apply(this, arguments)
        }
        off(el, event, listener)
    }
    on(el, event, listener)
}

export const scrollTop = function(el, from = 0, to, duration = 500, endCallback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000/60)
            }
        )
    }
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * 50)

    function scroll(start, end, step) {
        if (start === end) {
            endCallback && endCallback()
            return
        }

        let d = (start + step > end) ? end : start + step
        if (start > end) {
            d = (start - step < end) ? end : start - step
        }

        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }
    scroll(from, to, step)
}