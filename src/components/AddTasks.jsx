import { useState, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"

export default function AddTasks({ dispatch, state }) {

    const [task, setTask] = useState('')
    const [error, setError] = useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
        if (state.activeTask) {
            const editTask = state.tasks.filter(task => task.id === state.activeTask)[0]
            setTask(editTask.task);

            inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            inputRef.current?.focus({preventScroll:true})
        }
    }, [state.activeTask])

    function handleTask(e) {
        setTask(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()

        if (task.trim() === '') {
            console.log('Agrega un texto');
            setError(true)
            return
        }

        dispatch({ type: 'ADD-TASK', payload: { id: uuidv4(), task: task, completed: false } })
        setError(false)
        setTask('')
    }

    return (
        <form className="bg-purple-100 w-11/12 p-2.5 rounded-md mx-auto my-8 flex flex-col gap-2.5 md:flex-row">
            <input
                type="text"
                ref={inputRef}
                placeholder={error ? 'Agrega un texto' : 'Qué tarea necesitas hacer?'}
                className={`bg-white py-2 px-3 min-w-4/5 ${error ? 'border-2 border-red-500 placeholder:text-red-400' : 'border-neutral-50'}`}
                value={task}
                onChange={handleTask} />
            <button
                type="submit"
                className={`w-full text-white md:w-1/5 rounded-md py-2 px-3 cursor-pointer hover:shadow transition-all ${state.activeTask ? 'bg-yellow-600 hover:bg-yellow-500' : 'bg-indigo-700 hover:bg-indigo-600'}`}
                onClick={handleSubmit}
            >{state.activeTask ? 'Editar Tarea' : '+ Agregar Tarea'}</button>
        </form>
    )
}
