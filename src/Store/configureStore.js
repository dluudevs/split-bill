import {createStore, combineReducers} from 'redux';
import usersReducer from '../Reducers/users';

//export default an annonymous function 
export default () => {
    const store = createStore(usersReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}

