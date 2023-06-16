// Usage: 
// 
// function fn(t) {
//     return new Promise(res => setTimeout(res, t))
// }
// 
// const limited = timeLimit(fn, 100)
// 
// limited(150).catch(console.log)
// 

const timeLimit = (fn, t) => {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time limit exceeded"), t)

            fn(...args)
                .then((res) => resolve(res))
                .catch((e) => reject(e))
        })
    }
}

const awaitTimeLimit = (fn, t) => {
    return async function(...args) {
        return new Promise(async (resolve, reject) => {
            const id = setTimeout(() => reject("TLE"), t)

            try {
                const res = await fn(...args)
                resolve(res)
            } catch (error) {
                reject(error)
            } finally {
                clearTimeout(id)
            }
            
        })
    }
}
