import React, { Fragment } from 'react';
import ToDoItem from './ToDoItem';

const ToDos = () => {
    const todos = [
        {
            id: 1,
            title: 'Take out the trash',
            completed: true
        },
        {
            id: 2,
            title: 'Pick up kids from school',
            completed: false
        },
        {
            id: 3,
            title: 'Dinner with boss',
            completed: false
        }                
    ];
    return (
        <Fragment>
            <h1>Todos</h1>
            <p>Click todo item to toggle completed</p>
            <hr/>
            {todos.map(todo =>  (
                  <ToDoItem todo={todo} key={todo.id} />
            ))}
        </Fragment>
    );
};

export default ToDos;