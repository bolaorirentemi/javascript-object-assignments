function validateSchema(obj, schema) {

    const errors = []

    for (let [key, expectedType] of Object.entries(schema)) {

        // Check if the property exists
        if (!Object.hasOwn(obj, key)) {
            errors.push(`${key}: missing property`)
        }

        // Check if the property's type is correct
        else if (typeof obj[key] !== expectedType) {
            errors.push(
                `${key}: expected ${expectedType}, got ${typeof obj[key]}`
            )
        }
    }

    return errors
}