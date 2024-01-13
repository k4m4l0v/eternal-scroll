import React, { useEffect } from 'react';
import './post.css';
import { Link, Route, Routes } from 'react-router-dom';
import { PostCard } from './PostCard/PostCard';
import { useDispatch, useSelector } from 'react-redux';

interface IPostProps {
  id: number;
  title: string;
  body: string;
}

export function Post({id, title, body}: IPostProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    if (window.location.href === `http://localhost:3000/#/posts/post${id}` || window.location.href === `https://k4m4l0v.github.io/eternal-scroll/#/posts/post${id}`) {
      setIsOpen(true);
    }
  }, [])

  return (
    <li>
      <span>{id}</span>
      <h2 className='title'>{title}</h2>
      <p className='content'>{body}</p>
      <button onClick={handleClick}><Link to={`/posts/post${id}`} className='link'>Просмотр</Link></button>

      {isOpen &&
      <Routes>
        <Route path={`/posts/post${id}`} element={<PostCard title={title} body={body} />} />
      </Routes>
      }
    </li>
  );
}
