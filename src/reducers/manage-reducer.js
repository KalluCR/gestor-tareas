export const initialState = {
    tasks: []
}

export function reducer(state = initialState, action) {

    if(action.type === 'ADD-TASK') {

        

        return {
            ...state,
            tasks: [...state.tasks, action.payload]
        }
    }

    if(action.type === 'TASK-COMPLETED') {

        const updatedState = state.tasks.map(tarea => {
            if(tarea.id === action.payload) {
                return {
                    ...tarea,
                    completed: !tarea.completed
                }
            }
            return tarea
        })

        return {
            ...state,
            tasks: updatedState
        }
    }

    if(action.type === 'CLEAN-TASKS') {
        return {
            ...state,
            tasks: []
        }
    }

    if(action.type === 'DELETE-COMPLETED') {
        return {
            ...state,
            tasks: state.tasks.filter(tarea => !tarea.completed)
        }
    }
    if(action.type === 'DELETE-TASK') {
        const updatedState = state.tasks.filter(task => task.id !== action.payload)

        return {
            ...state,
            tasks: updatedState
        }
    }

    return state
}