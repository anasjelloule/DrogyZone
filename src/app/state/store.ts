import { configureStore } from '@reduxjs/toolkit'
import dragsSlice from '@/app/state/dragsSlice'
  const store = configureStore({
  reducer: {
    drags: dragsSlice.reducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type DragsState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store