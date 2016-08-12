import { combineReducers } from 'redux'
import AnneeReducer from '../component/annee/AnneeReducer.jsx'

const rootReducer = combineReducers({
    annee:AnneeReducer
})

export default rootReducer