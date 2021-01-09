import React, { useState, useEffect } from 'react';
import './style.scss';
import ThemeSwitch from '../ThemeSwitch';

const TopBar = () => {
  fetch('https://exchange.bitcoin/api/trades?since=5')
  .then(response => response.json())
  .then(data => console.log(data));

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
        <p>Hello, [placeholder]</p>
      </div>
      <ThemeSwitch />
    </div>
  )
}

export default TopBar;