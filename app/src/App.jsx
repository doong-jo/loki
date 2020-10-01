import React, { useState, useEffect } from 'react';
import { getLodgingHome, getLodging } from './apis';

function App() {
  const [lodgingHomeData, setLodgingHomeData] = useState();
  const [lodgingData, setLodgingData] = useState();

  async function requestLodgingHome() {
    const jsonData = await getLodgingHome();
    setLodgingHomeData(jsonData);
  }

  async function requestLodging(id) {
    const jsonData = await getLodging(id);
    setLodgingData(jsonData);
  }

  useEffect(() => {
    requestLodgingHome();
    requestLodging('BNB1');
  }, []);

  return (
    <div>
      <h1>LOKI</h1>
      <h2>/product/products/:id</h2>
      <button
        onClick={() => {
          requestLodging('BNB1');
        }}
      >
        REQUEST
      </button>
      {lodgingData && <pre>{JSON.stringify(lodgingData, null, 4)}</pre>}
      <h2>/product/lodging-home</h2>
      <button
        onClick={() => {
          requestLodgingHome();
        }}
      >
        REQUEST
      </button>
      {lodgingHomeData && <pre>{JSON.stringify(lodgingHomeData, null, 4)}</pre>}
    </div>
  );
}

export default App;
