function deepEqual(objA, objB) {

    // If they are exactly the same value
    if (objA === objB) {
        return true
    }

    // Check if both values are objects
    if (
        typeof objA !== "object" ||
        typeof objB !== "object" ||
        objA === null ||
        objB === null
    ) {
        return false
    }

    // Get all keys from both objects
    const keysA = Object.keys(objA)
    const keysB = Object.keys(objB)

    // If they don't have the same number of keys
    if (keysA.length !== keysB.length) {
        return false
    }

    // Check every key
    for (let key of keysA) {

        // Make sure objB has the same key
        if (!(key in objB)) {
            return false
        }

        // If the value is an object, compare recursively
        if (
            typeof objA[key] === "object" &&
            objA[key] !== null &&
            typeof objB[key] === "object" &&
            objB[key] !== null
        ) {
            if (!deepEqual(objA[key], objB[key])) {
                return false
            }
        }

        // Otherwise compare the values directly
        else if (objA[key] !== objB[key]) {
            return false
        }
    }

    // Everything matched
    return true
}