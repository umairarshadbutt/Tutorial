import React from 'react';
import ReactDom from 'react-dom';

import './index.css'
const author = "Amir Gazdar";
const title = "Qurbani sy Pehly"
const img = 'https://javedahmedghamidi.org/m/thumb/book/bf51770e-42df-46a4-bbf4-5dcd8d1047b0.jpg';
function Greeting() {
  return (
    <div className='booklist'>
      <Book job='Developer'/>
      <Book title='Random title' number={22}/>
    </div>
  );
}



const Book = (props) => {
  return (
    <article className='book'>
      <img src='https://javedahmedghamidi.org/m/thumb/book/bf51770e-42df-46a4-bbf4-5dcd8d1047b0.jpg' alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{props.job}</p>
      <p>{props.title}</p>
      <p>{props.number}</p>
    </article>
  );
}
const Image = () =>{
 return <img 
  src='' 
  alt=''/>
}

const Title = () => <h1>Nakhun </h1>
const Author = () => <h2>Amir Hazdar</h2>
ReactDom.render(<Greeting/>, document.getElementById('root'));