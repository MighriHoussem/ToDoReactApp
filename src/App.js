import React, { Component } from 'react';
import Todos from "./Todos";

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
  render()
  {
    return (
        <div className="todo-app container">
          <h1 className="center blue-text">List of Todos:  </h1>
          <Todos todos={this.state.todos} />
        </div>
    );
  }

}

export default App;
