export const NEW_GAME = 'NEW_GAME';
export const newGame = newGame => ({
  type: NEW_GAME
})

export const SHOW_INFO = 'SHOW_INFO';
export const showInfo = () => ({
  type: SHOW_INFO
})

export const HIDE_INFO = 'HIDE_INFO';
export const hideInfo = hideInfo => ({
  type: HIDE_INFO
})

export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const UPDATE_FEEDBACK = 'UPDATE_FEEDBACK';
export const updateFeedback = feedback => ({
  type: UPDATE_FEEDBACK,
  feedback
});
