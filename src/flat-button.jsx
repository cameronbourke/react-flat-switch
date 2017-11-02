import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    perspective: 300,
  },
  switch: {
    background: 'transparent',
    transition: '0.5s ease',
    border: 'none',
    textAlign: 'center',
    transformStyle: 'preserve-3d',
    position: 'relative',
    textTransform: 'uppercase',
    fontSize: 15,
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
    borderRadius: 4
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
    this.state = {};

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  handleMouseDown() {
    this.setState({
      mouseDown: true,
      mouseUp: false
    });
  }

  handleMouseUp() {
    const enabled = !this.props.enabled;
    this.props.onSwitch(enabled);
    this.setState({
      mouseDown: false,
      mouseUp: true
    });
  }

  render() {
    const { mouseDown, rotateX } = this.state;
    const { enabled, hideBoxShadow, width, height } = this.props;

    const sideStyles = Object.assign({}, styles.side, { lineHeight: height + 'px' });

    let switchStyles = {
      ...styles.switch,
      width,
      height
    };

    if (mouseDown) {
      switchStyles.transform = `rotate3d(1, 0, 0, ${enabled ? 180 : 0}deg) scale(1.2)`;
      if (!hideBoxShadow) switchStyles.boxShadow = `0px ${enabled ? 32 : -32}px 56px rgba(0,0,0,.1)`;
    }

    else {
      switchStyles.transform = `rotate3d(1, 0, 0, ${enabled ? 180 : 0}deg)`;
      if (!hideBoxShadow) switchStyles.boxShadow = `0px ${enabled ? 2 : -2}px 4px rgba(0,0,0,.1)`;
    }

    return (
      <div style={styles.container} className={this.props.className}>
        <button
          style={switchStyles}
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}>

          <span style={{ ...sideStyles, ...styles.front, ...this.props.enabledStyles }}>
            {this.props.enableText}
          </span>
          <span style={{ ...sideStyles, ...styles.back, ...this.props.disabledStyles }}>
            {this.props.disableText}
          </span>

        </button>
      </div>
    );
  }
}

FlatSwitch.propTypes = {
  enabled: PropTypes.bool.isRequired,
  enableText: PropTypes.string,
  disableText: PropTypes.string,
  onSwitch: PropTypes.func,
  hideBoxShadow: PropTypes.bool,
  width: PropTypes.oneOfType(['string', 'number']),
  height: PropTypes.oneOfType(['string', 'number']),
  className: PropTypes.string,
  enabledStyles: PropTypes.object,
  disabledStyles: PropTypes.object,
};

FlatSwitch.defaultProps = {
  enabled: true,
  enabledText: 'enable',
  disabledText: 'disable',
  hideBoxShadow: false,
  width: 150,
  height: 40
};

export default FlatSwitch;
