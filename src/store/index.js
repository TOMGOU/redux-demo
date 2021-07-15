import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"

import reducers from './reducers'

export const store = createStore(reducers, applyMiddleware(thunk))

export const subscribe = store.subscribe

export const dispatch = store.dispatch

export const getState = store.getState
