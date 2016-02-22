import React from 'react';
import ReactDOM from 'react-dom';
import FlatSwitch from '../src/flat-button.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      switchEnabled: false
    }
  }

  handleOnClick(switchEnabled) {
    this.setState({
      switchEnabled
    });
  }

  render() {
    const background = this.state.switchEnabled ? '#2196f3' : '#DCDCDC';
    return (
      <section className='container' style={{ background }}>
        <FlatSwitch
          width={300}
          height={60}
          enabled={this.state.switchEnabled}
          enabledText='enable'
          disabledText='disable'
          onClick={this.handleOnClick.bind(this)}
          transitionDuration={0.5}
          style={{ color: 'blue' }}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
