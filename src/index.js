import './reset.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {newGame, whatButton, minButton, addGuess} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Provider store={store}>
    <Game />
    </Provider>,
    document.getElementById('root')
);

// console.log(store.getState());
// store.dispatch(newGame());
// console.log(store.getState());

console.log('WHATBUTTON>>>>>>>>>>>>>>>', store.getState());
store.dispatch(whatButton());
console.log(store.getState());

// console.log('MinBUTTON>>>>>>>>>>>>>>>', store.getState());
// store.dispatch(minButton());
// console.log(store.getState());

// store.dispatch(addGuess(78));
// // store.dispatch(newGame());
// console.log('SUBMIT', store.getState());