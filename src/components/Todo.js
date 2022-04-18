import React from "react";

const Todo = () => {
    return(
        <div className="Todo">
            <li className='todo-item'>HEYYYYY</li>
            <button className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;