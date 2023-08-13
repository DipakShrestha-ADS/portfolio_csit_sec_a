import { memo } from "react"

function NewTodo({todos, handleAddTodo}) {
    console.log('new todo called')
    return (
        <>
            <h1>Todo List:</h1>
            {
                todos.map(
                    (elem, index) => {
                        return <p key={index}>{elem}</p>
                    }
                )
            }
            <button onClick={handleAddTodo}>Add Todo</button>
        </>
    )
}
export default memo(NewTodo)