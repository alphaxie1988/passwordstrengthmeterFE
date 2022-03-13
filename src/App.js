import React from 'react';
import ReactPasswordStrength from 'react-password-strength';

export default class App extends React.Component {
  state = { passLength: 0 }

  changeCallback = state =>
    this.setState({ passLength: state.password.length })

  clear = () => this.ReactPasswordStrength.clear()

  render() {
    const inputProps = {
      placeholder: "Try a password...",
      autoFocus: true,
      className: 'another-input-prop-class-name',
    };

    return (
      <div id="example">
        <h1>IS613-Cybersecurity Technology and Application</h1>
        <p>by grOup-0ne</p>
       

        <ReactPasswordStrength
          ref={ref => this.ReactPasswordStrength = ref}
          minLength={6}
          inputProps={{ ...inputProps, id: 'inputPassword1' }}
          changeCallback={this.changeCallback}
        />

        <button onClick={this.clear} disabled={this.state.passLength === 0}>
          Clear
        </button>

        <h2>What is make a password weak?</h2>
        <ul>
          <li>Short Password</li>
          <li>Only contain numbers</li>
          <li>Only contain alphabets</li>
          <li>Repeated Pattern on the keyboard</li>
          <li>Found in top common password list</li>
        </ul>
      
      </div>
    );
  }
}
