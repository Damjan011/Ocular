import React from 'react';
import './style.css';

const NoteIconBox = ({ title, content, obrisi }) => {
  return (
    <div>
      <div className="ui-small-icon-box">
        <div className="small-icon-box-upper">
          <div className="small-icon-box-label">
            <p>{title}</p>
          </div>
        </div>
        <div className="small-icon-box-lower">
          <div className="small-icon-box-text">
            <p>{content}</p>
          </div>
        </div>

        <button onClick={obrisi}>obrisi</button>

      </div>
    </div>
  )
};

export default NoteIconBox;