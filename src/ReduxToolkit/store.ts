

import {configureStore} from '@reduxjs/toolkit'
import authReducer from './slices/Auth.slice'
import nameReducer from './slices/name.slice'
const store =configureStore({
reducer:{
    auth:authReducer,
    userSlice:nameReducer
}
})

export default store


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

