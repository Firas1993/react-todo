import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  render() {
    const {
      items,
      clearList,
      handleEdit,
      handleDelete
    } = this.props;
    
    return (
      <div className="container">
        <ul className="list-group my-5">
        <h3 className="text-capitalize text-center"> todo list </h3>
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                item={item.title}
                handleEdit={() => handleEdit(item.id)}
                handleDelete={() => handleDelete(item.id)}
              />
            );
          })}
        </ul>

        <button
          type="button"
          className="btn btn-large btn-block btn-danger"
          onClick={clearList}
        >
          Clear List
        </button>
      </div>
    );
  }
}
