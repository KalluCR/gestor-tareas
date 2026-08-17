export const initialState = {
    tasks: [],
    activeTask: ''
}

export function reducer(state = initialState, action) {

    if(action.type === 'ADD-TASK') {

        const {completed, ...withoutCompleted} = action.payload 

        let updatedState = []
        if(state.activeTask) {
            updatedState = state.tasks.map(task => task.id === state.activeTask ? {...task, ...withoutCompleted} : task )
        } else {
            updatedState = [...state.tasks, action.payload]
        }

        return {
            ...state,
            tasks: updatedState,
            activeTask: ''
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

    if(action.type === 'ACTIVE-TASK') {



        return {
            ...state,
            activeTask: action.payload
        }
    }

    return state
}