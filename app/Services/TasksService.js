import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { Pop } from "../Utils/Pop.js";

class TasksService {
  createTask(newTask) {
    let addedTask = new Task(newTask)
    ProxyState.tasks = [...ProxyState.tasks, addedTask]
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  checkBox(id) {
    let currentTask = ProxyState.tasks.find(t => t.id == id)
    currentTask.complete = !currentTask.complete
    if (currentTask.complete == true) {
      Pop.toast('Another one bites the dust!', 'success')
    }
    ProxyState.tasks = ProxyState.tasks
  }
}

export const tasksService = new TasksService