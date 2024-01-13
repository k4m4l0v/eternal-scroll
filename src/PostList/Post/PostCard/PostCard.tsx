import React, { useRef } from 'react';
import  './postcard.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

interface IPostCardProps {
  title: string;
  body: string;
}

export function PostCard({title, body}: IPostCardProps) {
  return (
    <div className='modal_container'>
      <h2>{title}</h2>
      <p>{body}</p>
      <button><Link to={`/posts`} className='link'>Назад</Link></button>
    </div>
  )
}
