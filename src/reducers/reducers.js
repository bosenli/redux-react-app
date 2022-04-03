//entire state of the app
// reducers return the state of the entire app
//logic 
export default function reducerFunc(
    state = {
        count:0
    },
    action
) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state, // loads state  , copy of the state
                count: state.count + 1
            }
        case 'DECREMENT' :
            return {
                ...state,
                count: state.count - 1
            }
            default:
                return state
    }
}