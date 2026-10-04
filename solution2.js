function diffObjects(oldObj, newObj) {

    const result = {
        added: {},
        removed: {},
        changed: {}
    }

    const oldKeys = new Set(Object.keys(oldObj))
    const newKeys = new Set(Object.keys(newObj))

    // Find added properties
    for (let key of newKeys) {
        if (!oldKeys.has(key)) {
            result.added[key] = newObj[key]
        }
    }

    // Find removed properties
    for (let key of oldKeys) {
        if (!newKeys.has(key)) {
            result.removed[key] = oldObj[key]
        }
    }

    // Find changed properties
    for (let key of oldKeys) {
        if (newKeys.has(key) && oldObj[key] !== newObj[key]) {
            result.changed[key] = {
                from: oldObj[key],
                to: newObj[key]
            }
        }
    }

    return result
}

console.log(diffObjects(
    {
        name: 'Setemi',
        role: 'Engineer',
        country: 'Jamaica'
    },

    {
        name: 'Setemi',
        role: 'Senior Engineer',
        city: 'Kingston'
    }
))