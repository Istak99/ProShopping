// import {createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import {composeWithDevTools} from "redux-devtools-extension"

// const reducer=combineReducers({})

// const initialState={}

// const middleware = [thunk]

// const store=createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store

/***************************************** replaced create store with configureStore  */

import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {productListReducer} from './reducers/productReducers'

const reducer = combineReducers({
  productList: productListReducer,
})

const initialState = {}

const middleware = [thunk]

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
})

export default store
