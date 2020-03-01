import React, { Component } from 'react';
import Todos from "./Todos";
import AddForm from "./AddForm";

class App extends Component  {

  constructor(props)
  {
    super(props);
    this.state= {
      todos: [
        {id: 1,content: "buy some milk"},
        {id: 2,content: "play with ps4"}
      ]
    }
  }
  handleDelete = (id)=>
  {
    console.log("delete todo => "+id);
    this.setState({
      todos: this.state.todos.filter((todo)=>{
        return todo.id !== id;
      })
    });
  };
  handleAddTodo = (todo)=>
  {
    this.setState({
      todos: [...this.state.todos,todo]
    });
  };
  render()
  {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">List of Todos:  </h1>
          <Todos todos={this.state.todos} deleteTodo={this.handleDelete} />
          <br/>
          <AddForm addTodo={this.handleAddTodo} />
        </div>
    );
  }

}

export default App;
