import update from 'react/lib/update'

const initialState = {
    anneesList: [],
    errors: new Map(),
    dateDebSaisie:'',
    dateFinSaisie:'',
    libelle:'',
    hideSearchForm:true
};


export default function annee(state = initialState, action) {
    switch (action.type) {
        case 'GET_ANNEES':
            var errors = new Map();
            errors.set("dateDebSaisie", ["test"])
            errors.set("libelle", ["test"])
            return {
                ...state,
                anneesList: ["test2"],
                errors:errors
            }

        case 'RESET_FORM':
            return {
                ...state,
                dateDebSaisie:'',
                dateFinSaisie:'',
                libelle:'',
                errors:new Map()
            }

        case 'TOGGLE_FORM':
            return {
                ...state,
                hideSearchForm: !state.hideSearchForm
            }

        case 'UPDATE_FORM':
            return update(state, {
                [action.fieldId]: {$set:action.value}
            })

        default:
            return state
    }
}