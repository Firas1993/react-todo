/* eslint-disable array-callback-return */
import uuid from "uuid";

import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    idToEdit:'',
    item: "", //pass it down to todoItem
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      editItem: false,
      id: uuid()
    })
  };
  clearList = e => {
    this.setState({
      items:[]
    })
  };
  handleDelete = id => {
    const updated = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: updated
    });
  };
  handleEdit = id => {
   const toEdit = this.state.items.filter(item => item.id === id)[0];
   this.setState({
     item: toEdit.title,
     editItem: true,
     idToEdit: id
   });
  };
  handleEditBtn = (e) =>{
  e.preventDefault();
   const newItems = this.state.items;
   newItems.find(item => item.id === this.state.idToEdit).title = this.state.item;
   this.setState({
     items:newItems,
     item:"",
     editItem:false,
     idToEdit:''
    
   })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">to do input</h3>

            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              handleEditBtn={this.handleEditBtn}
            />
          </div>
          <div className="col-10 mx-auto col-md-8 mt-5">
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleEditBtn={this.handleEditBtn}
            />
          </div>
        </div>
      </div>
    );
  }
}
