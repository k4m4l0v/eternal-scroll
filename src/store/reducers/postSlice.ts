import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "../store";

export interface PostState {
  posts: IPost[];
  page: number;
}

const initialState: PostState = {
  posts: [],
  page: 1
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    dataPost(state, action: PayloadAction<IPost>) {
      state.posts.push(action.payload);
    },
    pageCount(state, action: PayloadAction<number>) {
      state.page === 10 ? state.page = 1 : state.page += action.payload;
    }
  }
});

export default postSlice.reducer;
