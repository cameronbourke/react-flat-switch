import React from 'react';

const styles = {
  container: {
    perspective: 300
  },
  switch: {
    background: 'transparent',
    transition: '0.5s ease',
    border: 'none',
    width: 200,
    height: 60,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlign: 'center',
    transform: 'rotate3d(0, 0, 0, 0)',
    transformStyle: 'preserve-3d',
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 18,
    letterSpacing: 1.2,
    outline: 'none',
    cursor: 'pointer',
  },
  side: {
    display: 'block',
    lineHeight: 'initial',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    background: '#fff',
    position: 'absolute',
    backfaceVisibility: 'hidden',
    borderRadius: 4,
    lineHeight: '60px',
  },
  front: {
    zIndex: 2,
    transform: 'rotate3d(0, 0, 0, 0)'
  },
  back: {
    transform: 'rotate3d(1, 0, 0, 180deg)'
  }
}

class FlatSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateX: 0,
      enabled: this.props.enabled
    };

   this.handleMouseDown = this.handleMouseDown.bind(this);
   this.handleMouseUp   = this.handleMouseUp.bind(this);
  }

  handleMouseDown() {
    this.setState({
      mouseDown: true,
      mouseUp: false,
      rotateX: this.state.rotateX += 180
    });
  }

  handleMouseUp() {
		const enabled = !this.state.enabled;
		this.props.onClick(enabled);
    this.setState({
      mouseDown: false,
      mouseUp: true,
			enabled
    });
  }

  render() {
    let switchStyles = {};
    const { enabled, mouseDown, mouseUp, rotateX } = this.state;

    if (mouseDown) {
      switchStyles.transform = `rotate3d(1, 0, 0, ${rotateX - 180}deg) scale(1.2)`;
      switchStyles.boxShadow = `0px ${enabled ? 32 : -32}px 56px rgba(0,0,0,.1)`;
    }

    else if (mouseUp) {
      switchStyles.transform = `rotate3d(1, 0, 0, ${rotateX}deg)`;
      switchStyles.boxShadow = `0px ${enabled ? 2 : -2 }px 4px rgba(0,0,0,.1)`;
    }

    return (
      <div style={styles.container}>
        <button
          style={{ ...styles.switch, ...switchStyles }}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}>

          <span style={{ ...styles.side, ...styles.front }}>
            { this.props.enabledText }
          </span>
          <span style={{ ...styles.side, ...styles.back }}>
            { this.props.disabledText }
          </span>

        </button>
      </div>
    );
  }
}

export default FlatSwitch;
