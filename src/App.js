import React, { Component } from 'react';
import { AddItem } from './components/addItem';
import { ItemList } from './components/itemList';
import { ItemDetail } from './components/itemDetail';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:this.props.items,
      selectedItem:''
    }
  };
  
  addNewItem = (newItem) => {
    this.setState({
      items:[...this.state.items,newItem]
    })
  };
  
  deleteItem = (title) => {
    //this.state.items.map(title => )
    this.setState({
      items:this.state.items.filter((item) => item.title !== title)
    });
  };

  changeComplete = (title) => {
    let newArray = this.state.items.map((item) => {
      if(item.title === title){
        return ({...item,completed:!item.completed});
      }else{
        return item
      }
    })
    this.setState({items:newArray})
  };

  selectedItem = (item) => {
    console.log(item)
    this.setState({
      selectedItem:item
    });
  };


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 style={{marginBottom:50}}>TO-DO:</h1>
            <AddItem addNewItem={this.addNewItem}/>
            <ItemList 
              items={this.state.items}
              deleteItem={this.deleteItem}
              selectedItem={this.selectedItem}
              changeComplete={this.changeComplete}/>
          </div>
          <div className="col-12 col-md-6 col-lg-6">
            <ItemDetail item = {this.state.selectedItem}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
