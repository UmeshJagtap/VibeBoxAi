// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import Juice from './components/Juice.jsx';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Juice />

      {/* 3D Juice Section */}
      <section>
        <h2>Welcome to Juice 3D App</h2>
        <iframe
          width="640"
          height="480"
          src="https://sketchfab.com/playlists/embed?collection=3f1d9f6428214910ab07057de291c59a&autostart=0"
          title="Juice"
          frameborder="0"
          allowfullscreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
        ></iframe>
        {/* <p style="font-family: sans-serif;font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> */}
        <p
          style={{
            fontFamily: 'sans-serif',
            fontSize: '13px',
            fontWeight: 'normal',
            margin: '5px',
            color: '#4A4A4A',
          }}
        >
          <a
            href="https://sketchfab.com/bhaminid/collections/juice-3f1d9f6428214910ab07057de291c59a"
            target="_blank"
            rel="nofollow"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Juice
          </a>
          by{' '}
          <a
            href="https://sketchfab.com/bhaminid"
            target="_blank"
            rel="nofollow"
            // style="font-weight: bold; color: #1CAAD9;"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            bhaminid
          </a>
          on{' '}
          <a
            href="https://sketchfab.com?utm_source=website&utm_medium=embed&utm_campaign=share-popup"
            target="_blank"
            rel="nofollow"
            // style="font-weight: bold; color: #1CAAD9;"
            style={{ fontWeight: 'bold', color: '#1CAAD9' }}
          >
            Sketchfab
          </a>
        </p>
      </section>

      {/* Default App Component */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
