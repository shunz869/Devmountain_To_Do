import React, { Component } from 'react';
import { AddItem } from './components/addItem';
import { ItemList } from './components/itemList';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:this.props.items
    }
  }
  
  addNewItem = (newItem) => {
    this.setState({
      items:[...this.state.items,newItem]
    })
  }
  
  deleteItem = (title) => {
    //this.state.items.map(title => )
    this.setState({
      items:this.state.items.filter((item) => item.title !== title)
    });

  }



  render() {
    console.log(this.state.items)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 style={{marginBottom:50}}>TO-DO:</h1>
            <AddItem addNewItem={this.addNewItem}/>
            <ItemList items={this.state.items} deleteItem={this.deleteItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
