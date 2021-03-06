import React from "react";

const Todos = (props)=>
{
    const todos = props.todos;
    const handleTodos = todos.length? (todos.map(todo=>{
      return (
          <div className="collection-item" key={todo.id}>
              <span>{todo.content} </span>
              <button onClick={()=>{ props.deleteTodo(todo.id)}}
                      type="button" className="btn btn-danger">Delete</button>
          </div>
      );
    })):(<p>Yo don't have any todos now</p>);
    return (
        <div className="todos collection">
            {handleTodos}
        </div>
    )
};

export default Todos;