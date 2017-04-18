import reducers from '../reducers'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import sagas from '../reducers/sagas'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    reducers,
    {},
    applyMiddleware(
      sagaMiddleware
    )
  )
  sagaMiddleware.run(sagas);
  return store
}

export default configureStore
