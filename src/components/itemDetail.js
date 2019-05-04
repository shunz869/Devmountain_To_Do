import React, { Component }  from 'react';

 class ItemDetail extends Component{
  updateContext = (e) => {
    e.preventDefault(); 
    const id =this.props.item.id;
    const title = this.refs.title.value === "" ? this.props.item.title:this.refs.title.value;
    const description = this.refs.description.value === "" ? this.props.item.description:this.refs.description.value;
    this.props.handleUpdate(id,title,description)
    this.refs.title.value = null
    this.refs.description.value = null
  };

  handleCancel = (e) => {
    e.preventDefault();
    this.refs.title.value = null
    this.refs.description.value = null
  }

  render(){
    if(this.props.item.title == null){
      return null;
    }

    return(
      <form style={{marginTop:50}} >
        <div className="form-group" >
          <label>Task</label>
          <input type="text" className="form-control" placeholder={this.props.item.title} ref='title'/>
        </div>
        <div className="form-group" >
          <label>Description</label>
          <input type="text" className="form-control" placeholder={this.props.item.description} ref='description'/>
        </div>
        <div className="btn-group">
          <button className="btn btn-primary" style={{marginRight:5}} onClick={this.updateContext}>Save</button>
          <button className="btn btn-secondary" style={{marginRight:5}} onClick={this.handleCancel}>Cancel</button>
        </div>
      </form>   
    );
  };
};
export default ItemDetail;