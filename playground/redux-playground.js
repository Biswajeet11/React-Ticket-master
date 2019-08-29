const configStore = () => {
    const store = {
        state: {
            count: 0
        },
        getState: function () {
            return this.state
        },
        dispatch: function (action) {
            switch (action.type) {
                case 'INCREMENT':
                    this.state.count += 1
                    return this.state
                case 'DECREMENT':
                    this.state.count -= 1
                    return this.state
                case 'RESET':
                    this.state.count = 0
                    return this.state
                case 'INCREMENT_BY':
                    this.state.count += action.payload
                    return this.state
                default:
                    return this.state
            }
        }
    }
    return store
}

const store = configStore()

console.log(store.getState())

//action creator/generators
const decrement = () => {
    return { type: 'DECREMENT' }//action
}

const increment = () => {
    return { type: 'INCREMENT' }
}

const reset = () => {
    return { type: 'RESET' }
}

const incrementBy = (value) => {
    return { type: 'INCREMENT_BY', payload: value }
}

store.dispatch(increment())
store.dispatch(increment)

console.log(store.getState())

store.dispatch(decrement())
store.dispatch(decrement)

console.log(store.getState())
store.dispatch(reset())
console.log(store.getState())
store.dispatch(increment())
console.log(store.getState())

store.dispatch(incrementBy(5))
console.log(store.getState())