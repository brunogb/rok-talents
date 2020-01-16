import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavBarButtons from './NavBarButtons';
import NavBarSettings from './NavBarSettings';
import NavBarCommander from './NavBarCommander';
import { AboutModal, ShareModal } from './Modals';
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { title } from '../package.json';

//TODO: disable nav bar collapse/expand?

/**
 * Nav bar component containing main application buttons/controls
 *
 * @class NavBar
 * @extends {Component}
 */
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };

    // Context bindings
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleSelect = this.toggleSelect.bind(this);
    this.showShare = this.showShare.bind(this);
  }

  /**
   * Toggle visibility of the nav bar collapse/expand menu icon
   *
   * @memberof NavBar
   */
  toggleNav() {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }

  /**
   * Toggle open state of the commander select dropdown
   *
   * @memberof NavBar
   */
  toggleSelect() {
    this.navBarCommanderRef.toggleSelect();
  }

  /**
   * Control visibility of the "About" modal
   *
   * @memberof NavBar
   */
  showAbout() {
    this.aboutModalRef.toggle();
  }

  /**
   * Control visibility of the "Share" modal
   *
   * @memberof NavBar
   */
  showShare() {
    this.shareModalRef.toggle();
  }

  render() {
    return (
      <React.Fragment>
        <AboutModal ref={component => (this.aboutModalRef = component)} />
        <ShareModal ref={component => (this.shareModalRef = component)} />

        <Navbar bg="light" variant="light" expand="lg">
          <Navbar.Brand id="nav-icon" style={{ cursor: 'pointer' }} href="/">
            <FontAwesomeIcon icon={faHome} />
          </Navbar.Brand>

          <Navbar.Brand
            id="nav-icon"
            style={{ cursor: 'pointer' }}
            onClick={() => this.showAbout(true)}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
          </Navbar.Brand>

          <Navbar.Brand>{title}</Navbar.Brand>

          <Navbar.Toggle onClick={this.toggleNav} />

          <Navbar.Collapse>
            <Nav className="ml-auto">
              <NavBarButtons
                calcPointsSpent={this.props.calcPointsSpent}
                resetTalents={this.props.resetTalents}
                showShare={this.showShare}
                commander={this.props.commander}
              />

              <NavBarSettings
                toggleSidePanel={this.props.toggleSidePanel}
                toggleTotalDisplay={this.props.toggleTotalDisplay}
                toggleValueDisplay={this.props.toggleValueDisplay}
                toggleMousePosition={this.props.toggleMousePosition}
                isMobile={this.props.isMobile}
              />

              <NavBarCommander
                ref={component => (this.navBarCommanderRef = component)}
                changeCommander={this.props.changeCommander}
                commander={this.props.commander}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
