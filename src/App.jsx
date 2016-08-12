import React, {Component} from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import NavItem from 'react-bootstrap/lib/NavItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';
import {IntlProvider, addLocaleData, FormattedMessage} from 'react-intl';
import fr from 'react-intl/locale-data/fr';
import en from 'react-intl/locale-data/en';
import enData from './i18n/en.json';
import frData from './i18n/fr.json';
import Bootstrap from './assets/css/bootstrap.css';
import Bootstraptheme from './assets/css/bootstrap-theme.css';
import Intl from 'intl';

addLocaleData(fr);
addLocaleData(en);

let messagesData = {
    // output by server conditional
    'fr': frData,
    'en': enData,
};
export default class App extends Component {

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
                    <Navbar inverse fixedTop={true} fluid={true}>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <a href="#"><FormattedMessage id="INLINE" /></a>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav>
                                    <IndexLinkContainer to="/">
                                        <NavItem eventKey={1}>Home</NavItem>
                                    </IndexLinkContainer>
                                    <LinkContainer to="/annee">
                                        <NavItem eventKey={2}>Annee</NavItem>
                                    </LinkContainer>
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
                    <div className="container-fluid">
                        {this.props.children}
                    </div>
                </div>
            </IntlProvider>
        )
    }
}
