import { RotateCcw, Calendar } from "lucide-react"

export default function CleanTasks({task, dispatch}) {
    return (
        <footer className="border-t border-zinc-200 mt-9 px-10 py-7 flex justify-between">
            <div className="flex items-center gap-4">
                <Calendar size={20} color="indigo" />
                <div className="">
                    <p className="font-bold text-gray-600">Sigue adelante 💪</p>
                    <p className="text-gray-500">Cada tarea completada te acerca a tus metas!</p>
                </div>
            </div>
            {task.length > 0 && (
                <button
                className="text-red-500 font-semibold px-7 border border-zinc-200 rounded-md flex items-center gap-2 cursor-pointer hover:bg-red-50 hover:shadow transition-all"
                onClick={() => dispatch({type: 'CLEAN-TASKS'})}
                >
                    <RotateCcw size={19} color="red" />
                    Limpiar todas las tareas
                </button>
            )}
        </footer>
    )
}
