import React from 'react';

const ToDoItem = ({ todo }) => {
    return (
        <div className='todo'
        style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
        >
        <span style={{ cursor: 'pointer' }}>{todo.title}</span>
        <button>    
            <i className='fas fa-trash-alt' />
        </button>
        </div>
    );
};

export default ToDoItem;
