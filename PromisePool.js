// n parallel promises at a time
// use cases: interacting with APIs, web scraping, 
// database connection limit shenanigans, FS operations, network calls
const promisePool = async (functions, n) => {
    let i = 0

    async function callback() {
        if (i === functions.length) { return }

        await functions[i++]()
        await callback()
    }

    nPromises = []
    while (i < n) {
        nPromises.push(callback())
    }
    await Promise.all(nPromises)
}

// examples
const sleep = (t) => new Promise(res => setTimeout(res, t))
fns = [() => sleep(1000), () => sleep(1000), () => sleep(1000)]
promisePool(fns, 1)
    .then(() => console.log('donezo'))
