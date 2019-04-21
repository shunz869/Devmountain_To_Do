import React, { Component } from 'react';
import { AddItem } from './components/addItem';
import { ItemList } from './components/itemList';
import { ItemDetail } from './components/itemDetail';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:this.items
    }
  }
  items=[
    { title: 'No Scrubs', description: '4:05' },
    { title: 'Macarena', description: '2:30' },
    { title: 'All Star', description: '3:15' },
    { title: 'I Want it That Way', description: '1:45' }
  ];
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 style={{marginBottom:50}}>TO-DO:</h1>
            <AddItem />
            <ItemList items={this.state.items}/>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <ItemDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
