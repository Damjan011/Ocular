import React, { Component } from 'react';
import axios from 'axios';

export default class CreateNote extends Component {
  constructor(props) {
    super(props)

    this.onChangeNoteTitle = this.onChangeNoteTitle.bind(this);
    this.onChangeNoteContent = this.onChangeNoteContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      content: ''
    }
  }

  onChangeNoteTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeNoteContent(e) {
    this.setState({ content: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const noteObject = {
      title: this.state.title,
      content: this.state.content
    }

    axios.post('http://localhost:4000/notes/', noteObject).then((res) => {
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    });

    this.setState({ title: '', content: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Note Title</label>
            <input type="text" value={this.state.title} onChange={this.onChangeNoteTitle} className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Note Content</label>
            <input type="text" value={this.state.content} onChange={this.onChangeNoteContent} className="form-control" />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-success btn-block" />
          </div>
        </form>
      </div>
    )
  }
}