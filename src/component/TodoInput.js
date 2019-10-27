import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem,handleEditBtn } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={!editItem ? handleSubmit : handleEditBtn}>
          <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <i className="fas fa-book"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add todo item"
              value={item}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={item ? false: true}
            className={
              editItem
                ? "btn btn-success mt-3 text-uppercase"
                : "btn btn-primary mt-3 text-uppercase"
            }
          >
            {editItem ? "Edit item" : "add item"}
          </button>
        </form>
      </div>
    );
  }
}
