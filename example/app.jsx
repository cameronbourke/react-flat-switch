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
          width={150}
          height={40}
          enabled={this.state.switchEnabled}
          enableText='enable'
          disableText='disable'
          onSwitch={this.handleOnClick.bind(this)}
        />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
