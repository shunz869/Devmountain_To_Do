import React from 'react';

export const AddItem = () => {
  return(
    <form>
      <div className="form-group" >
        <input type="text" className="form-control" placeholder="please enter your title"/>
      </div>
      <button className="btn btn-primary">Add new To-do</button>
    </form>
  );
};