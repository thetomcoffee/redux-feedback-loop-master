import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// const firstReducer = (state = {}, action) => {
//     if (action.type === 'BUTTON_ONE') {
//         console.log(`firstReducer running.`, action);
//     }
//     return state;
// };

// const secondReducer = (state = {}, action) => {
//     if (action.type === 'BUTTON_TWO') {
//         console.log(`secondReducer running.`, action);
//     }
//     return state;
// }

const feelingReducer = (state = 0, action) => {
    if (action.type === 'ADD_FEELING') {
        console.log('pre change state', state);
        console.log('Feeling view, Next button was clicked!');
        console.log(`The feeling added was: ${action.payload}`);
        state = {feelingRating: action.payload};
        console.log('post change state', state);
        return state;
    }
    return state;
};

const understandingReducer = (state = 0, action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        console.log('pre change state', state);
        console.log('Understanding view, Next button was clicked!');
        console.log(`The understanding added was: ${action.payload}`);
        state = {understandingRating: action.payload};
        console.log('post change state', state);
        return state;
    }
    return state;
};

const supportedReducer = (state = 0, action) => {
    if (action.type === 'ADD_SUPPORTED') {
        console.log('pre change state', state);
        console.log('Supported view, Next button was clicked!');
        console.log(`The supported rating added was: ${action.payload}`);
        state = {supportedRating: action.payload};
        console.log('post change state', state);
        return state;
    }
    return state;
};

const commentsReducer = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        console.log('pre change state', state);
        console.log('Comments view, Next button was clicked!');
        console.log(`The comments added id: ${action.payload}`);
        state = {comments: action.payload};
        console.log('post change state', state);
        return state;
    }
    return state;
};

// const elementListReducer = (state = {}, action) => {
//     if(action.type === 'ADD_ELEMENT') {
//         console.log(`The element added was: ${action.payload}`);
//     }
//     return state;
// }

// This is creating the store
// The store is the big JavaScript Object that holds all of the information for our application
const storeInstance = createStore(
    combineReducers({
        // firstReducer,
        // secondReducer, 
        // elementListReducer, 
        feelingReducer, 
        understandingReducer, 
        supportedReducer, 
        commentsReducer
    }),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
