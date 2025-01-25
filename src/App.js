import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [hangangTemp, setHangangTemp] = useState('Loading...');
  const [currentTime, setCurrentTime] = useState('Loading...');

  useEffect(() => {
    // Fetch weather data
    fetch('http://openapi.seoul.go.kr:8088/API키/json/WPOSInformationTime/1/5/')
      .then(res => res.json())
      .then(myJson => {
        setHangangTemp('한강' + '       ' + myJson.WPOSInformationTime.row[4].W_TEMP + "°C");
      });

    // Set the current time
    const date = new Date();
    const hours = date.getHours();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    setCurrentTime(`${month}월 ${day}일 ${hours}시에 노량진에서 측정하였습니다.`);
  }, []);

  return (
    <div className="uk-container">
      <div className="center-css">
        <h1 id="hangang_temp" style={{ color: 'white' }}>{hangangTemp}</h1>
        <br />
        <h3 id="time" style={{ color: 'white' }}>{currentTime}</h3>
        <br />
        <hr />
        <br />
      </div>
    </div>
  );
}

export default App;
