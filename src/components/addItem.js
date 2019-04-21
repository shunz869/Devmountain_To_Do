import React, { Component } from 'react';

export class AddItem extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.refs.title.value;
    if (!title.trim()) {
      alert("Input can't be null")
      return
    }
    this.props.addNewItem({title})
  };


  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="form-group" >
          <input type="text" className="form-control" placeholder="please enter your title" ref='title'/>
        </div>
        <button className="btn btn-primary" >Add new To-do</button>
      </form>
    );
  };

};