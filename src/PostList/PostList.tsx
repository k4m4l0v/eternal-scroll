import React, { useEffect, useRef } from 'react';
import './postlist.css';
import { Post } from './Post/Post';
import axios from 'axios';
import { postSlice } from '../store/reducers/postSlice';
import { useAppDispatch, useAppSelector } from '../store/store';

interface IPostData {
  id: number;
  title: string;
  body: string;
}

export function PostList() {
  const {posts} = useAppSelector(state => state.postReducer)
  const {dataPost} = postSlice.actions;
  const dispatch = useAppDispatch();
  // const {page} = useAppSelector(state => state.postReducer);
  // const {pageCount} = postSlice.actions;

  let page = 1;

  const endList = useRef<HTMLDivElement>(null);

  async function load() {
    try {
      const response = await axios.get<IPostData[]>(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`);
      const postData = response.data;
      const result:IPostData[] = [];
      for (let i = 0; i < postData.length; i++) {
      result.push({
          id: postData[i].id,
          title: postData[i].title,
          body: postData[i].body
        })
        dispatch(dataPost(result[i]));
      }

      // dispatch(pageCount(1));
      page === 10 ? page = 1 : page++;
    } catch(error) {
      throw(error);
    }
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '5px'
    })

    if (endList.current) {
      observer.observe(endList.current);
    }
  }, [])


  return (
    <ul>
      {/* <button onClick={() => {dispatch(pageCount(1))}}>+</button>
      <h1>{page}</h1> */}

      {posts.map((i) => (
        <Post id={i.id} title={i.title} body={i.body} />
      ))}

      <div ref={endList} />
    </ul>
  );
}
