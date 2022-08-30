import React from "react";
import classes from "./App.module.css";

function App() {
  return (
    <main className={classes.main}>
      <header>
        <h1>
          Join
          <br />
          Hustle
          <br />
          Control
        </h1>
        <span>
          If you want to control the Hustle, meet hustlers, track goals and
          analyze your life circumstances with a realistic approach join us
        </span>
      </header>
      <button>Join Us</button>
      <footer>
        Already have an account? <span>Log in</span>
      </footer>
    </main>
  );
}

export default App;
