function deepFreeze(obj) {

    // Freeze the current object
    Object.freeze(obj)

    // Get all values inside the object
    for (let value of Object.values(obj)) {

        // If the value is a nested object,
        // freeze it recursively
        if (typeof value === "object" && value !== null) {
            deepFreeze(value)
        }
    }

    // Return the frozen object
    return obj
}

const config = deepFreeze({
    api: {
        baseUrl: 'https://x.com',
        retries: 3
    },
    debug: false
})

config.api.baseUrl = 'https://changed.com'
config.debug = true

console.log(config.api.baseUrl, config.debug)


console.log(Object.isFrozen(config.api))



