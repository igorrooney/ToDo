import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {

  state = {
    task: ''
  }

  onChangeHandler = (event) => {
    const value = event.target.value
    this.setState({
      task: value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.task);
    this.setState({task: ''});
  }

  render() {
    return (
      <form className="top-panel d-flex item-add-form"
        onSubmit={this.onSubmit}>
        <input type="text"
                  className="form-control add-input"
                  placeholder="What do you want to do?"
                  value={this.state.task}
                  onChange={this.onChangeHandler}/>
        <button 
          className="btn btn-outline-secondary">Add Task</button>
      </form>
    );
  }
};
