import React, {Component, PropTypes} from 'react';
import InputDate from '../../framework/components/form/InputDate.jsx'
import InputText from '../../framework/components/form/InputText.jsx'
import {FormattedMessage} from 'react-intl';
export default class Annee extends Component {

    handleSubmit(e) {
        e.preventDefault();
        this.props.actions.getAnnees()
    }

    handleReset() {
        this.props.actions.resetForm()
    }

    handleFieldChange(fieldId, value) {
        this.props.actions.updateform(fieldId, value)
    }

    handleToggleform() {
        this.props.actions.toggleForm()
    }

    render() {
        return (
            <div>
                <h1>annee</h1>
                { !this.props.hideSearchForm ?
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="row">
                            <div className="col-lg-4">
                                <InputDate key="dateDebSaisie" id="dateDebSaisie" onChange={this.handleFieldChange.bind(this)}
                                           value={this.props.dateDebSaisie} label="search.annee.dateDebSaisie"
                                           errors={this.props.errors.get("dateDebSaisie")}/>
                            </div>
                            <div className="col-lg-4">
                                <InputDate key="dateFinSaisie" id="dateFinSaisie" onChange={this.handleFieldChange.bind(this)}
                                           value={this.props.dateFinSaisie} label="search.annee.dateFinSaisie"
                                           errors={this.props.errors.get("dateFinSaisie")}/>
                            </div>
                            <div className="col-lg-4">
                                <InputText key="libelle" id="libelle" onChange={this.handleFieldChange.bind(this)} value={this.props.libelle}
                                           label="search.annee.libelle" errors={this.props.errors.get("libelle")}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6">
                                <button type="button" onClick={this.handleToggleform.bind(this)} className="btn btn-primary"><FormattedMessage id="btn.hide"/>
                                </button>
                            </div>
                            <div className="col-xs-6 text-right">
                                <button type="submit" className="btn btn-primary"><FormattedMessage id="btn.search"/>
                                </button>
                                <button type="button" className="btn" onClick={this.handleReset.bind(this)}><FormattedMessage
                                    id="btn.reset"/></button>
                            </div>
                        </div>
                    </form>
                    :
                    <div className="row">
                        <div className="col-xs-6">
                            <button type="button" onClick={this.handleToggleform.bind(this)} className="btn btn-primary"><FormattedMessage id="btn.show"/>
                            </button>
                        </div>
                    </div>
                }
                {this.props.anneesList}
            </div>
        )
    }
}

Annee.propTypes = {
    errors: React.PropTypes.any.isRequired,
    anneesList: PropTypes.array.isRequired,
    hideSearchForm: PropTypes.bool.isRequired,
    dateDebSaisie: PropTypes.string.isRequired,
    dateFinSaisie: PropTypes.string.isRequired,
    libelle: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
}