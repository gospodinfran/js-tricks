// how Lodash debounce works under the hood

const debounce = function(fn, t) {
    let timeoutId
    return function(...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn(...args)
        }, t)
    }
}