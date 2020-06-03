import React, { useState } from 'react';
import { useEffect } from 'react';

import { lodgingMapper } from './mapper';

class ApiConfig {
  url = '';

  setMockUrl() {
    this.url = '/product';
  }

  setRealUrl() {
    this.url = 'http://api3.dev-myrealtrip.com/product';
  }
}

const apiConfig = new ApiConfig();
apiConfig.setMockUrl();

export function ApiControllerView() {
  const [isMock, setIsMock] = useState(true);
  const [lodgingData, setLodgingData] = useState();

  function setUrlMode(isMockMode) {
    if (isMockMode) {
      apiConfig.setMockUrl();
    } else {
      apiConfig.setRealUrl();
    }
  }

  useEffect(() => {
    setUrlMode(isMock);

    fetch(`${apiConfig.url}/lodging-home`)
      .then((res) => res.json())
      .then((json) => {
        if (!isMock) {
          setLodgingData(lodgingMapper(json));
          return;
        }
        setLodgingData(json);
      });
  }, [isMock]);

  return (
    <div>
      <h1>API CONTROLLER</h1>
      <h2>GET /lodging-home</h2>
      <span style={{ margin: '0 10px' }}>{isMock ? 'mock' : 'real'}</span>
      <button
        onClick={() => {
          setIsMock(!isMock);
        }}
      >
        change
      </button>
      {lodgingData && <pre>{JSON.stringify(lodgingData, null, 4)}</pre>}
    </div>
  );
}
