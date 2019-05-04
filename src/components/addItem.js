import React, { Component } from 'react';
import uuid from "uuid";

class AddItem extends Component {
  
  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.refs.title.value;
    if (!title.trim()) {
      alert("Please type in the title")
      return
    }
    let id= uuid.v4();
    this.props.addNewItem({id,title})
    this.refs.title.value = null
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

export default AddItem