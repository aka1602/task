import React, { Component } from "react";
import styles from "./css/Navbar.module.css";
import Icon from "../../General/components/Icon";
const menuContent = [
  {
    title: "Profile",
    icon: "user.svg"
  },
  {
    title: "Dashboard",
    icon: "dashboard.svg"
  },
  {
    title: "Billing",
    icon: "bill.svg"
  }
];
class Navbar extends Component {
  render() {
    const urlPath = process.env.PUBLIC_URL;
    return (
      <div className={styles.base} onClick={() => this.props.onToggleNav()}>
        <div className={styles.contentWrapper}>
          <div className={styles.closeIconContentWrapper}>
            <div className={styles.closeIcon}>
              <Icon image={`${urlPath}/assets/Images/close.svg`} size={30} />
            </div>
            <div className={styles.neotasLogo}>
              <Icon
                image={`${urlPath}/assets/Images/neoatsLogo.png`}
                size={40}
              />
            </div>
          </div>
          {menuContent.map((item, id) => {
            return (
              <div className={styles.menu} key={id}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.menuImage}>
                  <Icon
                    image={`${urlPath}/assets/Images/${item.icon}`}
                    size={40}
                  />
                </div>
              </div>
            );
          })}

          <div
            className={styles.logoutWrapper}
            onClick={() => this.props.onToggleNav()}
          >
            <div className={styles.title}>logout</div>
            <div className={styles.menuImage}>
              <Icon image={`${urlPath}/assets/Images/logout.svg`} size={40} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
