const STORAGE_KEY = 'gestor-tareas'
const THEME_KEY = 'kawaii-theme'

export function loadTasks() {
    try {
        const data = localStorage.getItem(STORAGE_KEY)
        return data ? JSON.parse(data) : []
    } catch {
        return []
    }
}

export function saveTasks(tasks) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
}

export function loadTheme() {
    try {
        const data = localStorage.getItem(THEME_KEY)
        return data ? JSON.parse(data) : false
    } catch {
        return false
    }
}

export function saveTheme(isKawaii) {
    localStorage.setItem(THEME_KEY, JSON.stringify(isKawaii))
}