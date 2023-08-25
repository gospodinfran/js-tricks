const chunk = (arr, size) => {
    let arrayy = []
    
    for (let i = 0, m = Math.ceil(arr.length / size); i < m; i++) {
        let subarr = []
        for (let j = 0; j < size; j++) {
            if (i * size + j < arr.length) {
                subarr.push(arr[i * size + j])
            }
        }
        arrayy.push(subarr)
    }
    return arrayy
}

const chunked = chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
console.log(chunked)