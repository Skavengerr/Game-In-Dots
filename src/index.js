import React from 'react'
import {render} from 'react-dom'
import {MuiThemeProvider} from '@material-ui/core/styles'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/index'


import './assets/main.css'
import MyTheme from './assets/MyTheme'
import App from './App'

const middleware = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleware)),
)

render(
    <Provider store={store}>
        <MuiThemeProvider theme={MyTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'),
)
