import * as actions from './actions';

const initialState = {
  infoPopUp: false,
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'Make your Guess!',
  guesses: [14, 35, 98]
};

// function displayFeedback(correctAnswer, input) {
//   const difference = Math.abs(input - correctAnswer);
//   let feedback;
//   if (difference >= 50) {
//     feedback = "You're Ice Cold...";
//   } else if (difference >= 30) {
//     feedback = "You're Cold...";
//   } else if (difference >= 10) {
//     feedback = "You're Warm";
//   } else if (difference >= 1) {
//     feedback = "You're Hot!";
//   } else {
//     feedback = 'You got it!';
//   }
//   return feedback;
// }

// enter guess and submit
// guesses in state gets updated
// function is called to determine proper feedback
// feedback in state is updated
// feedback returned

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_GAME:
      return {
        ...initialState
      };
    case actions.SHOW_INFO:
      return {
        ...state,
       infoPopUp: true
      };
    case actions.HIDE_INFO:
      return {
        ...state,
       infoPopUp: false
      };
    case actions.ADD_GUESS:
      return {
        ...state,
        guesses: [...state.guesses, action.guess]
      };
    case actions.UPDATE_FEEDBACK:
      return {
        ...state,
        feedback: action.feedback
      }
    default:
      return state;
  }
};