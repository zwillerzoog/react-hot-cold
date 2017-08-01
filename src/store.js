import React from 'react';
import {createStore} from 'redux';
import {gameReducer} from './gameReducer';

export default createStore(gameReducer); 