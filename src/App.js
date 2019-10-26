import uuid from "uuid";

import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

export default class App extends Component {
  state = {
    items: [
      { id: "abc10", title: "Wake up" },
      { id: "abc20", title: "make breakfast" },
      { id: "abc30", title: "take a shower" }
    ],
    id: uuid(),
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
      item: this.state.item
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      editItem: false,
      id: uuid()
    });
  };
  clearList = e => {
    console.log("clear list from app.js");
  };
  handleDelete = id => {
    console.log(`delete item id ${id}`);
  };
  handleEdit = id => {
    console.log(`edit ${id}`);
  };
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
            />
          </div>
          <div className="col-10 mx-auto col-md-8 mt-5">
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}
