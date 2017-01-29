import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return (
        <div>Hello World</div>
    );
  }
}
var mountPoint = document.querySelector('#root');

ReactDOM.render(<HelloMessage/>, mountPoint);