import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export default class InputText extends Component {
    state = {
        classError: "form-group"
    }

    componentDidMount() {
        this.setState({
            classError: this.props.errors.length > 0 ? "form-group has-error" : "form-group",
        })
    }

    handleChange(event) {
        this.props.onChange(this.props.id, event.target.value);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            classError: nextProps.errors.length > 0 ? "form-group has-error" : "form-group",
        })
    }

    render() {
        return (
            <div className={this.state.classError} id={this.props.id+"_field"}>
                <label htmlFor={this.props.id}><FormattedMessage id={this.props.label} /></label>
                <input type="text" onChange={this.handleChange.bind(this)} className="form-control" id={this.props.id} name={this.props.id} value={this.props.value}/>
                {this.props.errors.map((el, i) =>
                    <span className="help-block" key={i}>{el}</span>
                )}
            </div>
        )
    }
}

InputText.propTypes = {
    id: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.string,
    errors:React.PropTypes.array.isRequired,
};

InputText.defaultProps = { errors: [] };
