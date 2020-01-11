import React from "react";
import styles from "./App.module.css";
import HomeComponent from "./Home/components/HomeComponent";

class App extends React.Component {
  render() {
    return (
      <div className={styles.App}>
        <HomeComponent />
      </div>
    );
  }
}

export default App;
