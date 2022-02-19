import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"
import { Task } from "../Models/Task.js"


class TasksService {
  createList(newList) {
    let addedList = new List(newList)
    ProxyState.lists = [...ProxyState.lists, addedList]
  }

  deleteList(listId) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != listId)
  }

  checkBox(id) {
    let currentTask = ProxyState.tasks.find(t => t.id == id)
    currentTask.complete = !currentTask.complete
    ProxyState.tasks = ProxyState.tasks
  }

  createTask(newTask) {
    let addedTask = new Task(newTask)
    ProxyState.tasks = [...ProxyState.tasks, addedTask]
  }

  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }
}

export const tasksService = new TasksService