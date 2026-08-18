export default function Tracker({state}) {

    const completedTasks = state.filter(task => task.completed === true)
    const pendingTasks = state.filter(task => task.completed === false)
    
    return (
        <section className="flex justify-between md:gap-7 shadow rounded-md px-4 py-4">
            <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-indigo-700">{state.length}</p>
                <p className="text-sm text-gray-500">Total</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-yellow-500">{pendingTasks.length}</p>
                <p className="text-sm text-gray-500">Pendientes</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-green-500">{completedTasks.length}</p>
                <p className="text-sm text-gray-500">Completadas</p>
            </div>
        </section>
    )
}
