import { thunk } from 'redux-thunk'
import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
// dev extension
import { composeWithDevTools } from '@redux-devtools/extension'

// importation des reducers
import otherReducer from './other/other.reducer'

// regrouper tous les reducers
const rootReducer = combineReducers({


    other: otherReducer,
})

const store = createStore(rootReducer as any, composeWithDevTools(applyMiddleware(thunk)))

export type ROOT_REDUCER_TYPE = ReturnType<typeof rootReducer>

export default store