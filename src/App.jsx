import { useReducer, useEffect, useState } from "react"
import Tasks from "./components/Tasks"
import CleanTasks from "./components/CleanTasks"
import AddTasks from "./components/AddTasks"
import Filters from "./components/Filters"
import Tracker from "./components/Tracker"
import { initialState, reducer } from "./reducers/manage-reducer"
import { loadTasks, saveTasks, loadTheme, saveTheme } from "./helpers/localStorage"
import { ListTodo, MoreVertical, X, Sparkles, Heart, Panda } from "lucide-react"

function App() {
  const [state, dispatch] = useReducer(reducer, initialState, () => ({ tasks: loadTasks() }))
  const [filter, setFilter] = useState('all')

  // Estados para el Drawer y el Tema Kawaii
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isKawaii, setIsKawaii] = useState(() => loadTheme())

  const filteredTasks = state.tasks.filter(tarea => {
    if (filter === 'pending') return !tarea.completed
    if (filter === 'completed') return tarea.completed
    return true
  })

  useEffect(() => {
    saveTasks(state.tasks)
  }, [state.tasks])

  useEffect(() => {
    saveTheme(isKawaii)
  }, [isKawaii])

  return (
    <div className={`min-h-screen py-20 transition-colors duration-300 ${isKawaii ? 'bg-pink-100 font-sans' : 'bg-zinc-100'}`}>

      {/* Botón de puntos (Menú Superior Izquierda) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className={`fixed top-4 left-4 z-30 p-2 rounded-full shadow-md transition-transform hover:scale-110 ${isKawaii ? 'bg-pink-300 text-white hover:bg-pink-400' : 'bg-white text-zinc-700 hover:bg-zinc-100'
          }`}
      >
        <MoreVertical size={24} />
      </button>

      {/* Menú Lateral (Drawer) */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 p-6 shadow-2xl transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } ${isKawaii ? 'bg-pink-50 border-r-4 border-pink-200' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className={`font-bold text-lg flex items-center gap-2 ${isKawaii ? 'text-pink-600' : 'text-zinc-800'}`}>
            {isKawaii && <Heart size={18} className="fill-pink-400 text-pink-400" />} Ajustes
          </h2>
          <button onClick={() => setIsDrawerOpen(false)} className="text-zinc-500 hover:text-zinc-800">
            <X size={22} />
          </button>
        </div>

        {/* Switch para el modo Kawaii */}
        <div className={`p-4 rounded-2xl flex items-center justify-between shadow-sm ${isKawaii ? 'bg-pink-200/50' : 'bg-zinc-100'}`}>
          <span className={`text-sm font-semibold flex items-center gap-2 ${isKawaii ? 'text-pink-700' : 'text-zinc-700'}`}>
            <Sparkles size={18} className={isKawaii ? 'text-pink-500' : 'text-amber-500'} /> Modo Kawaii
          </span>
          <button
            onClick={() => setIsKawaii(!isKawaii)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 relative ${isKawaii ? 'bg-pink-400' : 'bg-zinc-300'
              }`}
          >
            <div className={`w-4 h-4 rounded-full bg-white transition-transform duration-300 ${isKawaii ? 'translate-x-6' : 'translate-x-0'
              }`} />
          </button>
        </div>
      </aside>

      {/* Contenedor Principal */}
      <main className={`md:max-w-4xl mx-auto rounded-3xl transition-all duration-300 ${isKawaii
        ? 'bg-white/90 border-4 border-pink-200 shadow-[0_10px_25px_rgba(244,114,182,0.2)]'
        : 'bg-white shadow-md'
        }`}>
        <header className={`mx-auto px-5 md:px-10 py-6 border-b flex flex-col md:flex-row md:justify-between gap-5 ${isKawaii ? 'border-pink-100' : 'border-zinc-200'
          }`}>
          <div className="flex gap-5 items-center">
            <div className={`p-3 rounded-2xl shadow-sm flex items-center ${isKawaii ? 'bg-pink-300 text-white' : 'bg-indigo-700 text-white'
              }`}>
              {isKawaii ? <Panda size={40} color="white" /> : <ListTodo size={40} color="white" /> }
            </div>
            <div>
              <h1 className={`text-2xl md:text-3xl font-bold flex items-center gap-2 ${isKawaii ? 'text-pink-500' : 'text-zinc-800'
                }`}>
                Gestor de Tareas {isKawaii && '✨'}
              </h1>
              <p className={isKawaii ? 'text-pink-400 text-sm md:text-base' : 'text-zinc-500 text-sm md:text-lg'}>
                {isKawaii ? 'Organiza tus tareitas con amor🌸' : 'Organiza tus tareas y sé más productivo'}
              </p>
            </div>
          </div>
          <Tracker state={state.tasks} isKawaii={isKawaii} />
        </header>

        <AddTasks dispatch={dispatch} state={state} isKawaii={isKawaii} />
        <Filters filter={filter} onFilterChange={setFilter} dispatch={dispatch} tasks={state.tasks} isKawaii={isKawaii} />
        <Tasks task={filteredTasks} dispatch={dispatch} isKawaii={isKawaii} />
        <CleanTasks task={state.tasks} dispatch={dispatch} isKawaii={isKawaii} />
      </main>
    </div>
  )
}

export default App