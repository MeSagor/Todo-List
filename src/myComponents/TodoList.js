import React, { useState } from 'react'
import Todoitem from './TodoItem'
import Header from './TodolistHeader'

export default function TodoList(props) {

    const add = (title, desc) => {
        // console.log("Title: ", title);
        // console.log("Description: ", desc);
        let serial;
        if (Todos.length === 0) serial = 1;
        else serial = Todos[Todos.length - 1].serial + 1;
        const newTodo = {
            serial: serial,
            status: false,
            Title: title,
            Desc: desc,
        }
        setTodos([...Todos, newTodo]);
    }

    const onDelete = (todo) => {
        // console.log("on Delete", todo);

        setTodos(Todos.filter((e) => {
            return e !== todo;
        }))

    }

    const onComplete = (todo) => {
        setTodos(Todos.filter((e) => {
            if (e === todo && (!(todo.status))) {
                todo.status = true;
            }
            return todo;
        }))
    }

    const [Todos, setTodos] = useState([{
        serial: 1,
        status: false,
        Title: "Task1",
        Desc: "Have to go Gym"
    },
    {
        serial: 2,
        status: false,
        Title: "Task2",
        Desc: "Have to practise React"
    },
    ])

    return (
        <div className="container">
            <div>
                <Header addTodo={add} />
            </div>
            <div>
                {Todos.length === 0 ? "No Todos" : Todos.map((todo) => {
                    return <Todoitem todo={todo} key={todo.serial} onDelete={onDelete} onComplete={onComplete} />
                })}
            </div>
        </div>
    )
}
