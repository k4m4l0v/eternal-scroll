import React from 'react';
import { PostList } from './PostList';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';

const store = setupStore();

export function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <PostList />
      </HashRouter>
    </Provider>
  );
}
