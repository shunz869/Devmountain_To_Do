import React from 'react';

export const ItemDetail = (props) => {
  if(props.item.title == null){
    return null;
  }
  return(
      <form style={{marginTop:50}}>
        <div className="form-group" >
          <label>Task</label>
          <input type="text" className="form-control" placeholder={props.item.title}/>
        </div>
        <div className="form-group" >
          <label>Description</label>
          <input type="text" className="form-control" placeholder={props.item.description}/>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" style={{marginRight:5}}>Save</button>
          <button className="btn btn-secondary" style={{marginRight:5}}>Cancel</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </form>   
  );
};