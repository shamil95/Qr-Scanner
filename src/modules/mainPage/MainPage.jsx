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
      {result}
    </div>
    </div>
  )
}

export default React.memo(MainPage);