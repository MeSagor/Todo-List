import React, { useState } from 'react'

export default function TodolistHeader(props) {

    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!Title || !Desc) {
            alert("Title or Description can't be blank!");
        } else {
            props.addTodo(Title, Desc);
        }
        setTitle("");
        setDesc("");
    }


    return (
        <div className="container py-3 shadow p-3 mb-5 bg-body rounded">
            <div className="py-3 d-flex justify-content-center">
                <h1>My Todos</h1>
            </div>
            <div className="row g-3 ">
                <div className="col">
                    <input type="text" value={Title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
                </div>
                <div className="col">
                    <input type="text" value={Desc} onChange={(e) => setDesc(e.target.value)} className="form-control" placeholder="Description" />
                </div>
                <div className="col mt-3 d-flex flex-row-reverse">
                    <button onClick={onSubmit} className="btn btn-outline-success" type="submit">Add Todo</button>
                </div>
            </div>
        </div>
    )
}
