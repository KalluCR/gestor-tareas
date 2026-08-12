import { useReducer } from "react"
import Tasks from "./components/Tasks"
import CleanTasks from "./components/CleanTasks"
import AddTasks from "./components/AddTasks"
import Filters from "./components/Filters"
import { initialState, reducer } from "./reducers/manage-reducer"
import { loadTasks, saveTasks } from "./helpers/localStorage"
import { useEffect } from "react"
import { ListTodo } from "lucide-react"
import { useState } from "react"

function App() {

  const [state, dispatch] = useReducer(reducer,initialState,() => ({tasks: loadTasks()}))
  const [filter,setFilter] = useState('all')

  const filteredTasks = state.tasks.filter(tarea => {
    if(filter === 'pending') return !tarea.completed
    if(filter === 'completed') return tarea.completed
    return  true
  })

  useEffect(() => {
    saveTasks(state.tasks)
  }, [state.tasks])

  return (
    <>
      <main className="bg-white max-w-4xl mx-auto my-12 rounded-md shadow-md">
        <header className="mx-auto px-10 py-5 border-b border-zinc-200 flex gap-5">
          <div className="bg-indigo-700 p-2 rounded-md shadow">
            <ListTodo size={50} color="white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Gestor de Tareas</h1>
            <p className="text-zinc-500">Organiza tus tareas y sé más productivo</p>
          </div>
        </header>
        <AddTasks
          dispatch={dispatch}
        />
        <Filters
          filter={filter}
          onFilterChange={setFilter}
          dispatch={dispatch}
          tasks={state.tasks}
        />
        <Tasks
          task={filteredTasks}
          dispatch={dispatch}
        />
        <CleanTasks
          task={state.tasks}
          dispatch={dispatch}
        />
      </main> 
    </>
  )
}

export default App
