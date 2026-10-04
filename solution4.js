function createCounter() {

    // Private variable
    let count = 0

    return {

        // Increase the counter
        increment() {
            count++
        },

        // Decrease the counter
        decrement() {
            count--
        },

        // Getter for the current value
        get value() {
            return count
        }
    }
}

const counter = createCounter()

counter.increment()
counter.increment()
counter.decrement()

console.log(counter.value)  // 1

console.log(counter.count)  // undefined