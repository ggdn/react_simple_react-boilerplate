import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import Link from 'react-router/lib/Link'
import IndexLink from 'react-router/lib/IndexLink'
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';

addLocaleData(fr);
addLocaleData(en);

let messagesData = {
    // output by server conditional
    'fr': {
        'INLINE': 'fr',
    },
    'en': {
        'INLINE': 'en',
    },
};
class Index extends React.Component {

    constructor () {
        super()
        this.state = {
            currentLocale: "en",
            messages: messagesData["en"]
        }
    }

    handleClick(lang) {
        this.setState({ currentLocale: lang, messages: messagesData[lang] })
    }

    render() {
        return (
            <IntlProvider locale={this.state.currentLocale}  key={this.state.currentLocale} messages={this.state.messages}>
                <div>
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#">
                                    <FormattedMessage id="INLINE" /></a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1}><IndexLink to="/home" activeClassName="active">Home</IndexLink></NavItem>
                                <NavItem eventKey={2}><Link to="/annee" activeClassName="active">Annee</Link></NavItem>
                                <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                    <MenuItem eventKey={3.1}>Action</MenuItem>
                                    <MenuItem eventKey={3.2}>Another action</MenuItem>
                                    <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                    <MenuItem divider />
                                    <MenuItem eventKey={3.3}>Separated link</MenuItem>
                                </NavDropdown>
                            </Nav>
                            <Nav pullRight>
                                <NavItem eventKey={1} onClick={this.handleClick.bind(this,"fr")}>fr</NavItem>
                                <NavItem eventKey={2} onClick={this.handleClick.bind(this,"en")}>en</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    {this.props.children}
                </div>
            </IntlProvider>
        )
    }
}

export default Index;