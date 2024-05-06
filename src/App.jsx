import './App.css'
import React, { Component } from 'react'
import Input from './Components/input';
import ToDo from './Components/todo';

export default class App extends Component {

  constructor(props) {
    super(props),
    this.state = {
      taskList: [],
      newTask: "",
    };
  }

  handleinp = (event) => {
    this.setState({ newTask: event.target.value})
  }

  addTask = (event)=> {
    event.preventDefault();

    if (this.state.newTask.trim() !=="") {
      this.setState((prevState)=> ({
        taskList: [...prevState.taskList, this.state.newTask],
        newTask: "",
      }))
    }
  }

  deleteTask = (index) => {
    this.setState((prevState) => {
      const updatedTask = [...prevState.taskList];
      updatedTask.splice(index, 1);
      return { taskList: updatedTask };
    });
  }

  editTask = (index) => {
    const userInput = prompt(`Update To-Do ${index + 1}`);

    if (userInput !== null && userInput.trim() !== "") {
      this.setState((prevState) => ({
        taskList: prevState.taskList.map((item, itemIndex) =>
          itemIndex === index ? userInput : item
        ),
      }));
    }
  }

  render() {
    return (
      <div id='container'>
        <h1>To Do List</h1>


        <Input
          value={this.state.newTask}
          handleinp={this.handleinp}
          addTask={this.addTask}
        />

        <ToDo
          taskList={this.state.taskList}
          deleteMethod={this.deleteTask}
          editMethod={this.editTask}
        />
      </div>

      
    )
  }
}