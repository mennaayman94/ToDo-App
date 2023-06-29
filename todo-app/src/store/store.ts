import { configureStore } from '@reduxjs/toolkit'
import { todoreducer } from './slices/todoSlice'

export const store = configureStore({
  reducer: {
    todoReducer:todoreducer
  },
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch