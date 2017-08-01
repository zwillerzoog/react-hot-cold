import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import './guess-form.css';

export class GuessForm extends React.Component {
  // onGuess(event) {
  //     event.preventDefault();
  //         const value = this.input.value;
  //         this.props.dispatch(actions.addGuess(parseInt(value)));
  //     console.log(this.props.guesses);

  //     this.input.value = '';
  // }

  onGuess(event) {
    event.preventDefault();
    const value = this.input.value;
    this.props.dispatch(actions.addGuess(parseInt(value)));
    console.log(this.props.guesses)
    this.input.value = '';
  }

  render() {
    return (
      <form onSubmit={e => this.onGuess(e)}>
        <label htmlFor="userGuess">Enter your Guess</label>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          maxLength="3"
          autoComplete="off"
          placeholder={Math.round(Math.random() * 100)}
          required
          ref={input => (this.input = input)}
        />
        <input
          type="submit"
          id="guessButton"
          className="button"
          name="submit"
        />
      </form>
    );
  }
}

const mapStateToProps = state => ({
    guesses: state.guesses
});
export default connect(mapStateToProps)(GuessForm);

// value="Guess" onClick={this.props.dispatch(actions.addGuess(this.input.value))}
