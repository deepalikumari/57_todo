import React, { Component } from "react";

export default class Input extends Component {
  render() {
    const { value, handleinp, addTask } = this.props;

    return (
      <form id="input-container" onSubmit={addTask}>
        <input type="text" value={value} onChange={handleinp} />
        <button type="submit">ADD</button>
      </form>
    );
  }
}