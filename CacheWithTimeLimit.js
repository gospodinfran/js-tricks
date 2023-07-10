const TimeLimitCache = function() {
    this.cache = new Map()
}

TimeLimitCache.prototype.set = function(key, value, duration) {
    exists = this.cache.get(key)
    if (exists) {
        clearTimeout(exists.timeoutId)
    }
    const timeoutId = setTimeout(() => {
        this.cache.delete(key)
    }, duration)
    // instead of (key, value): this.cache.set(key, value)
    // store timeoutId as well to be able to clear it in case of same key with new value
    this.cache.set(key, { value, timeoutId })
    return Boolean(exists)
}

TimeLimitCache.prototype.get() = function(key) {
    if (this.cache.has(key)) 
        return this.cache.get(key).value
    return -1
}

TimeLimitCache.prototype.count() = function() {
    return this.cache.size
}