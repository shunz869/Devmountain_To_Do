import React, { Component } from 'react';

export class ItemList extends Component {

  handleDelete = (item) => {
    let title = item.title
    this.props.deleteItem(title)
  };

  handleSelect = (item) => {
    this.props.selectedItem(item)
  };

  handleComplete = (item) => {
    let newComleted = item.title;
    this.props.changeComplete(newComleted)
  };
  
  addClassname = (item) => {
    if(item.completed === true){
      return "btn btn-primary btn-sm"
    }else {
      return "btn btn-secondary btn-sm"
    }
  };

  renderItems = () => {
    if (!this.props.items){
      return <div>Loading</div>
    }
    return this.props.items.map(item => {
      return(
        <ul className="list-group" key = {item.id}>
          <li 
          className="list-group-item d-flex justify-content-between align-items-center" 
          >
            <span onClick={()=>{this.handleSelect(item)}}>{item.title}</span>
            <div className="btn-group">
              <button 
              className={this.addClassname(item)}
              style={{marginRight:10}}
              disabled={item.completed}
              onClick = {() => {this.handleComplete(item)}} 
              >
              Complete
              </button>
              <button className="btn btn-secondary btn-sm" onClick = {() => {this.handleDelete(item)}}>Delete</button>
            </div>
          </li>
        </ul>
        );
    });
  };

  render(){
    return(
      <div className="row" style={{marginTop:50}}>
        <div className="col-12">
          {this.renderItems()}
        </div>
      </div>
    );
  }
};