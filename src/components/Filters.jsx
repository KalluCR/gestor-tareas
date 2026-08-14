import { Trash2 } from "lucide-react"

export default function Filters({filter, onFilterChange, dispatch, tasks}) {

  const activeClass = "bg-indigo-700 text-white"
  const baseClass = "text-sm md:text-base border border-zinc-200 rounded-md py-1 px-2 md:py-1.5 md:px-3 font-semibold hover:shadow transition-shadow"
  const disabledClass = "opacity-40"

  const hasCompleted = tasks.some(tarea => tarea.completed)
  
  return (
    <section className="w-11/12 mx-auto my-8 flex flex-col gap-4 justify-between md:flex-row">
        <div className="flex gap-2 md:gap-4">
          <button
            className={`${baseClass} cursor-pointer ${filter === 'all' ? activeClass : ''}`}
            onClick={() => onFilterChange('all')}
          >
            Todas
          </button>
          <button
            className={`flex items-center gap-2 ${baseClass} cursor-not-allowed ${filter === 'pending' ? activeClass : ''} ${!hasCompleted ? disabledClass : "opacity-100 cursor-pointer"}`}
            onClick={() => onFilterChange('pending')}
            disabled={!hasCompleted}
          >
              <span className="w-2.5 h-2.5 bg-amber-400 block rounded-full"></span>
              Pendientes
          </button>
          <button
            className={`flex items-center gap-2 ${baseClass} cursor-not-allowed ${filter === 'completed' ? activeClass : ''} ${!hasCompleted ? disabledClass : "opacity-100 cursor-pointer"}`}
            onClick={() => onFilterChange('completed')}
            disabled={!hasCompleted}
          >
              <span className="w-2.5 h-2.5 bg-green-400 block rounded-full"></span>
              Completadas
          </button>
        </div>
        <button 
          className={`text-sm md:text-base w-fit border border-zinc-200 rounded-md py-2 px-3 flex items-center gap-2 text-red-500 font-semibold cursor-not-allowed hover:shadow hover:bg-red-50 transition-all ${!hasCompleted ? disabledClass : "opacity-100 cursor-pointer"}`}
          onClick={() => dispatch({ type: 'DELETE-COMPLETED' })}
          disabled={!hasCompleted}
        >
            <Trash2 color="red" size={19}/>
            Eliminar completadas
        </button>
    </section>
  )
}
