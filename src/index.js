import React from 'react'
import {render} from 'react-dom'
import {compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/reducers/index'

import './assets/main.css'
import App from './App'

const enhancer = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, enhancer)
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
