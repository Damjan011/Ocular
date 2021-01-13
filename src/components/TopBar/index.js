import React, { useState, useEffect } from 'react';
import './style.scss';
import ThemeSwitch from '../ThemeSwitch';

const TopBar = () => {
  //ispod je alpha vantage, ali samo 5Xmin, 500/dan tako da pazi
  // const ApiKey = '7ZL096TZKZGMLBXY';

  // fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${ApiKey}`)
  // .then(response => response.json())
  // .then(data => console.log(data))

  // ispod je random user, odlican za paginaciju i dodatni load na scroll, i za neki dobar ui
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(data => console.log(data));


  // ideja, magicna kocka za pitanja (api za yes/no) \\\ onda graph od dobijenih odgovora, predvidjanje za DA i NE posle toga? tako nesto

  const [appear, setAppear] = useState(false);
  const [longerAppear, setLongerAppear] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setAppear(true);
    }, 1800);
    setTimeout(function () {
      setLongerAppear(true);
    }, 3000);
  }, []);
  return (
    <div className={`ui-topbar ${appear ? 'ui-topbar-appear' : ''}`}>
      <div className={`ui-user-greeting ${longerAppear ? 'ui-user-greeting-appear' : ''}`}>
        <p>Hello, [user]</p>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default TopBar;