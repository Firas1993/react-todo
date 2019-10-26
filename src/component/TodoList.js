import React, { Component } from 'react'
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
    render() {
        const {items, clearList, handleEdit, handleDelete} = this.props;
        return (
          <div className="container">
            <ul className="list-group">
              {items.map(element => (
                <TodoItem 
                key={element.id} 
                item={element.title} 
                handleEdit={()=>handleEdit(element.id)}
                handleDelete={()=>handleDelete(element.id)}
                />
              ))}
            </ul>
            <TodoItem />
            
            <button type="button" class="btn btn-large btn-block btn-danger"
            onClick={clearList}
            >Clear List</button>
            
          </div>
        );
    }
}
