import React, { Component } from 'react';

export class ItemList extends Component {

  handleDelete = (item) => {
    let title = item.title
    this.props.deleteItem(title)
  }

  renderItems = () => {
    return this.props.items.map(item => {
      return(
        <ul className="list-group" key = {item.id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.title}
            <div className="btn-group">
              <button 
              className={item.completed === "true"? "btn btn-primary btn-sm":"btn btn-secondary btn-sm"}
              style={{marginRight:10}}>
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