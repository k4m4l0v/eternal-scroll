import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import postReducer from './reducers/postSlice'

export const rootReducer = combineReducers({
  postReducer
})

export interface IPost {
  id: number;
  title: string;
  body: string;
}

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
