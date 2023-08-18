// lets implement JSON.stringify 

const jsonStringify = function(object) {
    if (object === null | object === undefined) {
        return String(object)
    } else if (Array.isArray(object)) {
        const values = object.map((obj) => jsonStringify(obj))
        return `[${values.join(",")}]`
    } else if (typeof object === 'object') {
        const keys = Object.keys(object)
        const keyValuePairs = keys.map((key) => `"${key}":${jsonStringify(object[key])}`)
        return `{${keyValuePairs.join(",")}}`
    } else if (typeof object === 'string') {
        return `"${String(object)}"`
    } else {
        // numbers
        return String(object)
    }
}

// tests

// null
console.log(JSON.stringify(null))
console.log(jsonStringify(null))

// undefined
console.log(JSON.stringify(undefined))
console.log(jsonStringify(undefined))

// array
arr = [13, 'a', 45]
console.log(jsonStringify(arr))
console.log(JSON.stringify(arr))

// object
obj = {
    13: 'clown',
    'mirko': 'crocop',
    45: 45
}
console.log(JSON.stringify(obj))
console.log(jsonStringify(obj))

// number
n = 13
console.log(JSON.stringify(n))
console.log(jsonStringify(n))

// string
s = "greetings"
console.log(JSON.stringify(s))
console.log(jsonStringify(s))