import reducers from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(
      sagaMiddleware
    )
  )
  sagaMiddleware.run(mySaga);
  return store
}

export default configureStore
