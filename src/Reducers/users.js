const initialState = {
    uid: 0,
    name: ''
};

//similar to Array.reduce, requires previous state and the value. resulting in a single output value (new state)
// reducer gets passed to createStore (configureStore.js), retaining the data reducers return
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_UID':
            //merges empty object with previous state and adds new property, do not mutate
            return Object.assign({}, state, {uid: action.uid})
            
        case 'GET_USERNAME':
            return Object.assign({}, state, {name: action.name})

        default: 
            return state
    }
}

export default usersReducer;