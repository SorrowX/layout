/*
  eg: 
    const calls = []
    const queue = [1, 2, 3, 4, 5].map(i => next => {
        calls.push(i)
        setTimeout(next, 0)
    })
    runQueue(queue, (fn, next) => fn(next), () => {
        console.log(calls) // [1, 2, 3, 4, 5]
    })
 */
export const runQueue = function(queue, fn, cb) {
    const step = index => {
        if (index >= queue.length) {
            cb()
        } else {
            if (queue[index]) {
                fn(queue[index], () => {
                    step(index + 1)
                })
            } else {
                step(index + 1)
            }
        }
    }
    step(0)
}