import React from 'react';
import InputDate from '../component/form/InputDate.jsx'
import InputText from '../component/form/InputText.jsx'
import {FormattedMessage} from 'react-intl';
export default class Annee extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            errors: new Map(),
            dateDebSaisie:'',
            dateFinSaisie:'',
            libelle:'',
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.errors.set("dateDebSaisie", ["test"])
        this.state.errors.set("libelle", ["test"])
        this.setState({
            errors : this.state.errors
        })
        console.log(this.state)
    }

    handleReset() {
        this.setState({
            errors: new Map(),
            dateDebSaisie:'',
            dateFinSaisie:'',
            libelle:''
        })
    }

    handleFieldChange(fieldId, value) {
        var newState = {};
        newState[fieldId] = value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <h1>annee</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="row">
                        <div className="col-lg-4">
                            <InputDate id="dateDebSaisie" onChange={this.handleFieldChange.bind(this)} value={this.state.dateDebSaisie} label="search.annee.dateDebSaisie" errors={this.state.errors.get("dateDebSaisie")} />
                        </div>
                        <div className="col-lg-4">
                            <InputDate id="dateFinSaisie" onChange={this.handleFieldChange.bind(this)} value={this.state.dateFinSaisie} label="search.annee.dateFinSaisie" errors={this.state.errors.get("dateFinSaisie")}  />
                        </div>
                        <div className="col-lg-4">
                            <InputText id="libelle" onChange={this.handleFieldChange.bind(this)} value={this.state.libelle} label="search.annee.libelle" errors={this.state.errors.get("libelle")}  />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-6">
                            <button type="button" className="btn btn-primary"><FormattedMessage id="btn.hide" /></button>
                        </div>
                        <div className="col-xs-6 text-right">
                            <button type="submit" className="btn btn-primary" typeof="submit"><FormattedMessage id="btn.search" /></button>
                            <button type="button" className="btn" onClick={this.handleReset.bind(this)}><FormattedMessage id="btn.reset" /></button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
