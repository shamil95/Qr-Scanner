import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const MainPage = () => {

  const [data, setData] = useState("");
  const [music, setMusic] = useState('');

  useEffect(() => {
    axios.post('https://httpbin.org/anything', data).then((response) => {
      setMusic(response)
    }, (error) => {
      console.log(error);
    });;
    
  }, [data])

   
  
  return (
    <div className="App">
      {
        !data ?       <header className="App-header">
        <BarcodeScannerComponent
            width={500}
            height={500}
            onUpdate={(err, result) =>  {
                console.log(err, result);
                if (result) setData(result.text)
            }}
        />
              <div className='line'>
            
              </div>
      </header>
      : <div>
        <div>{data}</div>
              <audio controls>
      <source src={music} type="audio/mpeg" />
      </audio>
      </div>

      }

    </div>
  );
}

export default React.memo(MainPage);