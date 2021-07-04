import axios from 'axios';
import React, { useState } from 'react';
import QrReader from 'react-qr-reader'

const MainPage = () => {
  const[result, setResult] = useState('');
  
  const handleScan = (data) => {
    setResult(data)
  }

  const handleError = (err) => {
    console.log(err);
  }

  const sendQr = () => {
    axios.post('https://httpbin.org/anything', result)
  }

  return(
    <div>
      <div style={{width: '300px'}}>
      <QrReader
        delay={100}
        onError={handleError}
        onScan={handleScan}
      >
      </QrReader>
    </div>
    <div>
      <button onClick={sendQr}>SEND DATA</button>
      {result}
    </div>
    </div>
  )
}

export default React.memo(MainPage);