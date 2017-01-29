import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
constructor() {
    super(); //needed for inheritance

    //Define an intial state object
    this.state = {
        studentNames : ['Matt','Katy','Maribel','Lee']
    };
  }

  render() {
  	var students = this.state.studentNames.map(function(name,i){
  		return (<li key={i}>{name}</li>)
  	})
    return (
        <ul>{students}</ul>
    );
  }
}
var mountPoint = document.querySelector('#root');

ReactDOM.render(<HelloMessage/>, mountPoint);