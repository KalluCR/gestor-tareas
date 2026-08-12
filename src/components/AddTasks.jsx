import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function AddTasks({dispatch}) {

    const [task,setTask] = useState('')
    const [error,setError] = useState(false)

    function handleTask(e) {
        setTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(task.trim() === ''){
            console.log('Agrega un texto');
            setError(true)
            return
        }

        dispatch({type: 'ADD-TASK', payload: {id: uuidv4(), task: task, completed: false}})
        setError(false)
        setTask('')
    }

    return (
        <form className="bg-purple-100 w-11/12 p-2.5 rounded-md mx-auto my-8 flex gap-2.5">
            <input
                type="text"
                placeholder={error ? 'Agrega un texto' : 'Qué tarea necesitas hacer?'}
                className={`bg-white py-2 px-3 min-w-4/5 ${error ? 'border-2 border-red-500 placeholder:text-red-400' : 'border-neutral-50'}`}
                value={task}
                onChange={handleTask} />
            <button
                type="submit"
                className="text-white bg-indigo-700 w-1/5 rounded-md py-2 px-3 cursor-pointer hover:bg-indigo-600 hover:shadow transition-all"
                onClick={handleSubmit}
            >+ Agregar Tarea</button>
        </form>
    )
}
