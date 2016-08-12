import Annee from './Annee.jsx'
import * as AnneeAction from './AnneeAction.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
    return {
        anneesList: state.annee.anneesList,
        dateDebSaisie: state.annee.dateDebSaisie,
        dateFinSaisie: state.annee.dateFinSaisie,
        libelle: state.annee.libelle,
        hideSearchForm: state.annee.hideSearchForm,
        errors: state.annee.errors,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(AnneeAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Annee)