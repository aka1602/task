import React, { Component } from "react";
import Navbar from "./Navbar";
import styles from "./css/Header.module.css";
import Icon from "../../General/components/Icon";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavbar: false
    };
  }
  onToggleNav = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  };
  render() {
    const urlPath = process.env.PUBLIC_URL;
    console.log(this.state.showNavbar);
    return (
      <div className={styles.base}>
        <div className={styles.topBar}>
          <div className={styles.sideBar} onClick={this.onToggleNav}>
            <Icon image={`${urlPath}/assets/Images/menu.svg`} size={40} />
          </div>
          <div className={styles.heading}>Neotas Task</div>
        </div>
        {this.state.showNavbar && <Navbar onToggleNav={this.onToggleNav} />}
      </div>
    );
  }
}

export default Header;
