import React, { useState, useEffect } from 'react';
import './style.scss';
import ThemeSwitch from '../ThemeSwitch';

const TopBar = () => {
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