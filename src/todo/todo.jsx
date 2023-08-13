import React, { useState } from 'react'
import './todo.css'
import TodoCard from './todo_card'
function Todo() {
    const [todos, setTodo] = useState([])
    

    const handleAddTodo = ()=>{
        console.log("add todo clicked")
        setTodo(
            [
                ...todos,
                {
                    "title": 'Todo Title' + (todos.length + 1),
                    "desc": "Todo Description",
                    "completed": false,
                }
            ]
        )
    }
    return (
        <>
            <div className='navbar'>
                <h1>Todo Screen</h1>
            </div>

            {
                todos.map((todo, index) => {
                    const title = todo.title
                    const desc = todo.desc
                    return (
                        <TodoCard sn={index} title={title}
                            desc={desc}
                            onDelete={() => {
                                console.log("dlete clicked " + index)
                                const todoList = [];
                                todos.forEach((t, i)=>{
                                    if(index != i){
                                        todoList.push(t)
                                    }
                                })
                                setTodo(
                                    [
                                        ...todoList
                                    ]
                                )
                            }}
                            onChecked={(data)=>{
                                
                                todos[index]['completed'] = data.target.checked
                                
                                setTodo(
                                    [
                                        ...todos
                                    ]
                                )
                            }}
                            completed={todos[index]['completed']}
                        />
                    )
                })
            }
            <div onClick={handleAddTodo} className='fab'>
                <span>Add Todo</span>
            </div>
        </>
    )
}
export default Todo