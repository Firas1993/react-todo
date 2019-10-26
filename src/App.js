import uuid from "uuid";

import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default class App extends Component {
  state = {
    items: [{ id: 1, title: "wake up" }, { id: 2, title: "make breakfast" }],
    id: uuid(),
    item: "", //pass it down to todoItem
    editItem: false
  };
  handleChange = e => {
    console.log("handle Change from app.js");
  };

  handleSubmit = e => {
    console.log("handle Submit from app.js");
  };
  clearList = e => {
    console.log("clear list from app.js");
  };
  handleDelete = (id) => {
    console.log(`delete item id ${id}`)
  }
  handleEdit = (id) =>{
    console.log(`edit ${id}`)
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">to do input</h3>
          </div>

          <TodoInput 
          item={this.state.item}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editItem={this.state.editItem}
          />
          
          <TodoList 
          items={this.state.items}
          clearList={this.clearList}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          />

        </div>
      </div>
    );
  }
}
