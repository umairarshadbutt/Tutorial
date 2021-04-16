import React from 'react';
import ReactDom from 'react-dom';
function Greeting() {
  return <h1>
    Umair is here, and this my first component
  </h1>
}

ReactDom.render(<Greeting/>, document.getElementById('root'));