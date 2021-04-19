import React from 'react';
import ReactDom from 'react-dom';

import './index.css'

const firstBook = {
  img: 'https://javedahmedghamidi.org/m/thumb/book/bf51770e-42df-46a4-bbf4-5dcd8d1047b0.jpg',
  title: 'Qurbani sy Pehly',
  author: 'Amir Gazdar'
};

const secondBook = {
  img: 'https://javedahmedghamidi.org/m/thumb/book/ab0b2b84-21d2-4294-80bd-faba96b2439d.jpg',
  title: 'Introduction to the Qur’ān ',
  author: 'Dr Shehzaad Saleem'
};
function Greeting() {
  return (
    <div className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    </div>
  );
}



const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
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