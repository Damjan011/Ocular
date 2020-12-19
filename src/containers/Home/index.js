import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoteIconBox from '../../components/NoteIconBox';
import CreateNote from '../../components/testCreate';
import './style.scss';

const Home = () => {
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/notes/')
    .then(res => {
      setAll(res.data);
    }).catch(function (error) {
      console.log('This is the error: ', error)
    })
  }, [all]);

  const brisanje = (aha) => {
    axios.delete('http://localhost:4000/notes/' + aha).then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });
  }

  return (
    <div style={{ marginTop: '200px', marginLeft: '200px', flexWrap: 'wrap', display: 'flex' }}>
      <CreateNote />
      {
        all.map((el) => <NoteIconBox obrisi={() => brisanje(el._id)} title={el.title} content={el.content} />)
      }
    </div>
  )
};

export default Home;