import React from "react";
import Todo from './Todo';

const TodoList = ({todos, setTodos ,fiteredTodos}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {fiteredTodos.map(todo =>(
                    <Todo setTodos = {setTodos} todos = {todos} key = {todo.id} todo = {todo} text = {todo.text} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;