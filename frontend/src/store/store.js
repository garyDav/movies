import { configureStore, combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { authSlice } from './slices/auth/authSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authState'],
}

const rootReducer = combineReducers({
  authState: authSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})