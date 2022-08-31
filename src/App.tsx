import React from "react";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <div className={classes.planet}>
        <div className={classes.animatedwrapper}>
          <img src='./kmainwookopya1.png' alt='planet 1' />
          <img src='./kmdarkerwoo1kopya1.png' alt='planet 2' />
          <img src='./kmlowestwookopya1.png' alt='planet 3' />
        </div>
      </div>
      <div className={classes["right-circle"]}></div>
      <div className={classes["left-circle"]}></div>
      <main className={classes.main}>
        <header>
          <h1>
            Join
            <br />
            Hustle
            <br />
            Control
          </h1>
          <p>
            If you want to control the Hustle, meet hustlers, track goals and
            analyze your life circumstances with a realistic approach, join us!
          </p>
        </header>
        <a href='https://apps.apple.com/tr/app/hustlecontrol/id1641096356'>
          <img
            src='https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png'
            alt='download from AppStore button'
          />
        </a>
        <footer>Telif Hakki © 2022 HustleControl - Tum Haklari Saklidir</footer>
      </main>
    </>
  );
}

export default App;
