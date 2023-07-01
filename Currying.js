const curry = (fn) => {
    let params = []

    return function curried(...args) {
        params = [...params, ...args]

        if (fn.length === params.length) {
            const res = fn(...params)
            nums = []
            return res
        } else {
            return curried
        }
    }
}

function add(a, b, c) {
    return a + b + c
}

const curried = curry(add)
console.log(curried(1)(2, 3))