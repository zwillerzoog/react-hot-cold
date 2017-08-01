export const NEW_GAME = 'NEW_GAME';
export const newGame = newGame => ({
  type: NEW_GAME
})

export const WHAT_BUTTON = 'WHAT_BUTTON';
export const whatButton = whatButton => ({
  type: WHAT_BUTTON,
  view: 'infoPage'
})

export const MIN_BUTTON = 'MIN_BUTTON';
export const minButton = minButton => ({
  type: MIN_BUTTON,
  view: 'startPage'
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

export const NEW_ANSWER = 'NEW_ANSWER';
export const newAnswer = answer => ({
  type: NEW_ANSWER,
  answer
});
