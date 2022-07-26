import { configureStore } from '@reduxjs/toolkit'
import livreReducer from "../features/livreSlice"
import auteurReducer from "../features/auteursSlice"
import editeurReducer from "../features/editeurSlice"
import SpecialiteReducer from '../features/specialiteSlice'
import authReducer from "../features/authSlice"
import cartReducer from "../features/cartSlice";
import orderReducer from "../features/orderSlice";
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
const persistedReducer = persistReducer(persistConfig, authReducer )
const livresReducer = persistReducer(persistConfig, livreReducer )
const auteursReducer = persistReducer(persistConfig, auteurReducer )
const editeursReducer = persistReducer(persistConfig, editeurReducer )
const specialitesReducer = persistReducer(persistConfig, SpecialiteReducer )
const cartPersistedReducer = persistReducer(persistConfig, cartReducer )

export const store = configureStore({
  reducer: {
    livres: livresReducer,
    authors: auteursReducer,
    editeurs: editeursReducer,
    specialites: specialitesReducer,
    auth: persistedReducer,
    cart:cartPersistedReducer,
    order:orderReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(logger)
});