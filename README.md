react-flat-switch
=========================

Inspired by [Oleg Frolov's codepen](http://codepen.io/Volorf/pen/rxgMZp/), React Flat Switch is a toggle/switch component for React.

## Installation

```
npm install --save react-flat-switch
```

## Demo & Example

Live demo: [cameronbourke.github.io/example/react-flat-switch](http://cameronbourke.github.io/react-flat-switch/example)

To build the example locally, clone this repo then run:

```
npm install
npm start
Then open localhost:8080 in a browser.
```

## Usage
```js
import React from 'react';
import FlatSwitch from 'react-flat-switch';

class App extends React.Component {
	...

	render() {
		const background = this.state.switchEnabled ? '#2196f3' : '#DCDCDC';
		const enabledStyles = {
			color: '#2196f3'
		};
		const disabledStyles = {
			color: '#F32121'
		};

		return (
			<section className='container' style={{ background }}>
				<FlatSwitch
					width={150}
					height={40}
					enabled={this.state.switchEnabled}
					enabledText='enable'
					enabledStyles={enabledStyles}
					disabledStyles={disabledStyles}
					disabledText='disable'
					className='list-item--switch'
					onSwitch={this.handleOnClick.bind(this)}
				/>
			</section>
		);
	}
}
```

## Available Props

Property  | Type | Default | Description
------------- | ------------- | ------ | --------
enabled        | bool          | (required) | determines which side of the switch is shown
enableText     | string        | enable     | the text value of the enabled side of the switch
disableText    | string        | disable    | the text value of the disabled side of the switch
onSwitch       | func          | undefined  | called when the user clicks the switch
hideBoxShadow  | bool          | false      | will hide any box shadows used
width          | number/string | 150        | the width of the component
height         | number/string | 40         | the height of the component
className      | string        | undefined  | the classname of the component
enabledStyles  | object        | undefined  | style object that will be applied to the enabled side
disabledStyles | object        | undefined  | style object that will be applied to the disabled side

## Todo

- Extend Styling Capabilities

## License

MIT Licensed Copyright (c) Cameron Bourke 2016
