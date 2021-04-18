import React from 'react';
import ReactDom from 'react-dom';
function Greeting() {
  return (
    <div>
      <Book />
    </div>
  );
}



const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
}
const Image = () =>{
 return <img 
  src='https://javedahmedghamidi.org/m/thumb/book/bf51770e-42df-46a4-bbf4-5dcd8d1047b0.jpg' 
  alt=''/>
}

const Title = () => <h1>Nakhun </h1>
const Author = () => <h2>Amir Hazdar</h2>
ReactDom.render(<Greeting/>, document.getElementById('root'));