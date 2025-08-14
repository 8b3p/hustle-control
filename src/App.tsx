import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fonts = (document as any).fonts;
    const fontPromises = fonts
      ? [
          fonts.ready,
          fonts.load("1em MyWebFont-bold"),
          fonts.load("1em MyWebFont-regular"),
        ]
      : [];

    const imageUrls = [
      "./kmainwookopya1.png",
      "./kmdarkerwoo1kopya1.png",
      "./kmlowestwookopya1.png",
      "https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png",
    ];

    const imagePromises = imageUrls.map(
      (src) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.src = src;
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        })
    );

    Promise.all([...fontPromises, ...imagePromises]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return (
      <div className="loading">
        <div className="spinner" />
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="planet">
        <div className="animatedwrapper">
          <img src="./kmainwookopya1.png" alt="planet 1" />
          <img src="./kmdarkerwoo1kopya1.png" alt="planet 2" />
          <img src="./kmlowestwookopya1.png" alt="planet 3" />
        </div>
      </div>
      <div className="right-circle"></div>
      <div className="left-circle"></div>
      <main className="main">
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
            analyze your life with a realistic approach, join us!
          </p>
        </header>
        <a href="https://apps.apple.com/tr/app/hustlecontrol/id1641096356">
          <img
            src="https://miro.medium.com/max/600/1*xqT83bMEz92IBYxS9UQNow.png"
            alt="download from AppStore button"
          />
        </a>
        <footer>COPYRIGHT © 2022 HUSTLECONTROL - ALL RIGHTS RESERVED.</footer>
      </main>
    </div>
  );
}

export default App;
