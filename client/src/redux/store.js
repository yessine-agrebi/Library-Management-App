import { configureStore } from '@reduxjs/toolkit'
import livreReducer from "../features/livreSlice"
import auteurReducer from "../features/auteursSlice"
import editeurReducer from "../features/editeurSlice"
import SpecialiteReducer from '../features/specialiteSlice'
import authReducer from "../features/authSlice"
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}
const persistedReducer = persistReducer(persistConfig, authReducer)
export const store = configureStore({
  reducer: {
    livres: livreReducer,
    authors: auteurReducer,
    editeurs: editeurReducer,
    specialites: SpecialiteReducer,
    auth: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger)
});