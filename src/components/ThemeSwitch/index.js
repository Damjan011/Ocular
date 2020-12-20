import React, { useEffect, useState } from 'react';
import './style.css';

const ThemeSwitch = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    setAppear(true);
  }, [])
  return (
    <label className={`form-switch ${appear ? 'animate' : ''}`}>
      <input type="checkbox" />
      <i></i>
    </label>
  )
}

export default ThemeSwitch;