import React from "react";
import './todo_card.css'
function TodoCard({ sn, title, desc, onDelete, onChecked, completed }) {
    return (
        <div className='todocard' style={{ backgroundColor: completed ? "grey" : "green", }}>
            {/* First Section */}
            <div className='first'>
                <h1>{sn}.</h1>

                <div className='title'>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            {/* Second Section */}
            <div className='action'>
                <div onClick={onDelete} className='delete'>
                    <span>Del</span>
                </div>
                <input onChange={onChecked} type='checkbox' />
            </div>
        </div>
    )
}
export default TodoCard