import React, { Component } from 'react'

export default class TodoItem extends Component {
    render()
     {
         const {item, handleEdit, handleDelete} = this.props;
        return (
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <span className="p-2 badge badge-white badge-pill ">
              <i className="fas fa-cog text-primary" onClick={handleEdit}></i>
              <i className="fas fa-trash text-danger" onClick={handleDelete}></i>
            </span>
            <span className="p-2 badge badge-white badge-pill text-danger"></span>
          </li>
        );
    }
}
