import { Trash2, Pencil } from "lucide-react"

export default function Tasks({task, dispatch}) {


    return (
        <section className="w-11/12 mx-auto border border-zinc-200 rounded-md">
          {task.map(tarea => (
            <article key={tarea.id} className="flex items-center justify-between gap-5 py-3 px-5 border-b border-zinc-200">
              <div className="flex gap-5 items-center md:w-full">
                <input
                  type="checkbox"
                  id={tarea.id}
                  checked={tarea.completed}
                  className="accent-green-400 w-5 h-5 cursor-pointer"
                  onChange={() => dispatch({type: 'TASK-COMPLETED', payload: tarea.id})}
                  />
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:w-full md:justify-between">
                  <label
                    className={`cursor-pointer text-sm ${tarea.completed && 'line-through'}`}
                    htmlFor={tarea.id}
                  >{tarea.task}</label>
                  {tarea.completed &&
                    <p className="w-fit text-sm bg-green-100 text-green-500 font-semibold py-0.5 px-1.5 rounded-md border border-green-200 shadow">Completada</p>
                  }
                </div>
              </div>
              <div className="flex gap-1">
                <button className={`${!tarea.completed && 'ml-auto'} border py-2.5 px-4 rounded-md border-zinc-200 cursor-pointer hover:shadow transition-shadow`}>
                  <Pencil size={19} />
                </button>
                <button 
                  className="border py-2.5 px-4 rounded-md border-zinc-200 cursor-pointer hover:shadow transition-shadow"
                  onClick={() => dispatch({type: 'DELETE-TASK', payload: tarea.id})}
                >
                  <Trash2 size={19} color="red" />
                </button>
              </div>
            </article>
          ))}
        </section>
    )
}
