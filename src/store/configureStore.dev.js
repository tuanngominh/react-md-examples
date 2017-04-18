import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagas from '../ducks/sagas'
import reducers from '../ducks';

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  const store = createStore(
    reducers,
    undefined,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  )
  sagaMiddleware.run(sagas);
  return store
}

export default configureStore
