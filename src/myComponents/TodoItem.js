import React from 'react'

export default function TodoItem(props) {
    return (
        <div className="container py-3 shadow p-3 mb-2 bg-body rounded d-flex justify-content-between">
            <div className="">
                {props.todo.status === true ? <h4 className="text-warning text-decoration-line-through">{props.todo.Title}</h4> :
                    <h4 className="text-warning">{props.todo.Title}</h4>}
                {props.todo.status === true ? <h6 className="text-decoration-line-through">{props.todo.Desc}</h6> :
                    <h6>{props.todo.Desc}</h6>}
            </div>
            <div className="mt-3">
                <button onClick={() => { props.onComplete(props.todo) }} className="btn btn-outline-success mx-3" type="submit">Complete</button>
                <button onClick={() => { props.onDelete(props.todo) }} className="btn btn-outline-danger " type="Clear">Delete</button>
            </div>
        </div>
    )
}
