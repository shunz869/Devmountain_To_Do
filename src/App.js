import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './components/itemList';
import ItemDetail  from './components/itemDetail';
import AddItem from './components/addItem';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      selectedItem:''
    }
  };
  componentDidMount(){
    axios.get('https://5cd907320b0040001471fdec.mockapi.io/todos')
      .then(res => {
        this.setState({
          items:res.data
        });
      });
  };
  
  addNewItem = (item) => {
    this.setState({
      items:[...this.state.items,item]
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
    this.setState({
      selectedItem:item
    });
  };

  handleUpdate = (id,title,description) => {
    let newArray = this.state.items.map((item) => {
      if(item.id === id){
        return ({...item,title:title,description:description});
      }else{
        return item
      }
    })
    this.setState({items:newArray})
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
            <ItemDetail 
              item = {this.state.selectedItem}
              handleUpdate={this.handleUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;