import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const firstReducer = (state = {}, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log(`firstReducer running.`, action);
    }
    return state;
};

const secondReducer = (state = {}, action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log(`secondReducer running.`, action);
    }
    return state;
}

const elementListReducer = (state = {}, action) => {
    if(action.type === 'ADD_ELEMENT') {
        console.log(`The element added was: ${action.payload}`);
    }
    return state;
}

// This is creating the store
// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        firstReducer,
        secondReducer, 
        elementListReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
