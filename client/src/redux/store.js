import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import livreReducer from "../features/livreSlice"
import auteurReducer from "../features/auteursSlice"
import editeurReducer from "../features/editeurSlice"
import SpecialiteReducer from '../features/specialiteSlice'
import authReducer from "../features/authSlice"
import Api from '../Axios/Api'
export const store = configureStore({
  reducer: {
    livres: livreReducer,
    authors: auteurReducer,
    editeurs: editeurReducer,
    specialites: SpecialiteReducer,
    auth: authReducer
  },
  MiddlewareArray: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: Api
      }
    })
})