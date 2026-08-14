import { RotateCcw, Calendar } from "lucide-react"

export default function CleanTasks({task, dispatch}) {
    return (
        <footer className="border-t border-zinc-200 mt-9 px-10 py-7 flex flex-col gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-4">
                <Calendar size={30} color="indigo" />
                <div className="">
                    <p className="font-bold text-gray-600 text-sm">Sigue adelante 💪</p>
                    <p className="text-gray-500 text-sm">Cada tarea completada te acerca a tus metas!</p>
                </div>
            </div>
            {task.length > 0 && (
                <button
                className="text-sm md:text-base text-center text-red-500 font-semibold px-7 py-2 border border-zinc-200 rounded-md flex items-center gap-2 justify-center cursor-pointer hover:bg-red-50 hover:shadow transition-all"
                onClick={() => dispatch({type: 'CLEAN-TASKS'})}
                >
                    <RotateCcw size={19} color="red" />
                    Limpiar todas las tareas
                </button>
            )}
        </footer>
    )
}
