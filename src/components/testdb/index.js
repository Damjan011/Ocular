import React, { Component } from 'react';
import axios from 'axios';
import NoteIconBox from '../NoteIconBox';

export default class Testdb extends Component {
  constructor(props) {
    super(props);
    this.state = { notesCollection: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:4000/notes/').then(res => {
      console.log(res.data)
      this.setState({ notesCollection: res.data })
    }).catch(function (error) {
      console.log(error, 'damjan');
    })
  }

  getResponse() {
    console.log(this.state.notesCollection)
    // return this.state.notesCollection;
  }

  render() {
    return (
      <div>
        {
          this.state.notesCollection.map(e => <NoteIconBox title={e.title} content={e.content} />)
        }
        <div style={{margin: '200px'}}>
          <p>odavde se vise ne vidi nista</p>
        </div>
      </div>
    )
  }
}