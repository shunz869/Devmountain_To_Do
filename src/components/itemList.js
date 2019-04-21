import React from 'react';

export const ItemList = (props) => {
  console.log(props.items)
  const renderItems = () => {
    return props.items.map(item => {
      return(
        <ul className="list-group" key = {item.title}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {item.title}
            <button className="btn btn-secondary btn-sm">Complete</button>
          </li>
        </ul>
        );
    });
  };

  return(
    <div className="row" style={{marginTop:50}}>
      <div className="col-12">
        {renderItems()}
      </div>
    </div>
  );
};