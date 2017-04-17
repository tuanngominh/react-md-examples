import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import mySaga from '../sagas'
import reducers from '../reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )
  sagaMiddleware.run(mySaga);
  return store
}

export default configureStore
