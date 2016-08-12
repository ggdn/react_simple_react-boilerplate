import { createStore } from 'redux'
import rootReducer from '../reducers/index.jsx'

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/index.jsx', () => {
            const nextReducer = require('../reducers/index.jsx').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}