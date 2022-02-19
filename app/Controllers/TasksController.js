import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

function _draw() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
}

export class TasksController {

  constructor() {
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    loadState()
  }

  createList(event) {
    window.event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value
    }
    tasksService.createList(newList)
    form.reset()
  }

  async deleteList(listId) {
    await Pop.confirm()
    tasksService.deleteList(listId)
  }

  createTask(listId) {
    window.event.preventDefault()
    let form = window.event.target
    let newTask = {
      listId,
      // @ts-ignore
      name: form.name.value,
    }
    tasksService.createTask(newTask)
  }

  async deleteTask(id) {
    await Pop.confirm()
    tasksService.deleteTask(id)
  }

  checkBox(id) {
    tasksService.checkBox(id)
  }

}