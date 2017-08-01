import * as actions from './actions'

const initialState = {
  view: 'startPage',
  correctAnswer: Math.floor(Math.random() * 100) + 1,
  feedback: 'Make your Guess!',
  guesses: [14, 35, 98]
}

function displayFeedback(correctAnswer, input) {
    const difference = Math.abs(input - correctAnswer);
    let feedback;
    if (difference >= 50) {
      feedback = "You're Ice Cold...";
    } else if (difference >= 30) {
      feedback = "You're Cold...";
    } else if (difference >= 10) {
      feedback = "You're Warm";
    } else if (difference >= 1) {
      feedback = "You're Hot!";
    } else {
      feedback = "You got it!";
    }
    return feedback;
}

// enter guess and submit
// guesses in state gets updated
// function is called to determine proper feedback
// feedback in state is updated
// feedback returned

export const gameReducer = (state=initialState, action) => {
  switch (action.type) {
    case actions.MIN_BUTTON:
      return {
        ...state, 
        view: action.view
      }
      case actions.NEW_GAME:
        return {
          ...initialState,
        }
      case actions.WHAT_BUTTON:
        return {
          ...state,
          view: action.view
        }
      case actions.ADD_GUESS:
        return {
          ...state,
          guesses: [state.guesses, action.guesses],
          feedback: displayFeedback(state.correctAnswer, action.guesses)
        }
    default:
      return state;
  }
}