import { combineReducers } from "redux";
import users from './users'
import storage from 'redux-persist/lib/storage';
import { persistReducer, createTransform } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';

export const persistConfig = {
  key: 'data',
  transforms: [
    createTransform((inbound)=>{
      return window.btoa(JSON.stringify(inbound))
    },(outbound)=>{
      return JSON.parse(window.atob(outbound))
    }),
  ],
  storage
}

const reducer = combineReducers({
  users: persistReducer(persistConfig, users)
})

export default reducer