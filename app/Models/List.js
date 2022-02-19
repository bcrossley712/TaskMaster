import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return `
        <div class="col-md-4 ">
          <div class="m-2 bg-dark text-light shadow rounded p-0 d-flex flex-column list">
            <div class="rounded-top bg-light p-1 text-dark text-center" style="border: 1.5rem solid ${this.color};">
              <div class="text-end">
                <i class="mdi mdi-close selectable" title="Delete ${this.name} list" onclick="app.tasksController.deleteList('${this.id}')"></i>
              </div>
              <h3>${this.name}</h3>
              <span>${this.CheckedCount} of ${this.TaskCount}</span>
            </div>
            <div class="grow">
            ${this.TasksTemplate}
            </div>
            <form class="p-1 d-flex justify-content-between" onsubmit="app.tasksController.createTask('${this.id}')">
              <input required minlength="3" maxlength="50" type="text" class="form-control" name="name" id="new-task" aria-describedby="helpId"
                placeholder="New task...">
              <button class="btn"><i class="mdi mdi-plus text-light" title="Add new task"></i></button>
            </form>
          </div>
        </div>
    `
  }

  get TasksTemplate() {
    let template = ''
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    myTasks.forEach(t => template += t.Template)
    return template
  }

  get TaskCount() {
    let out = 0
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id)
    out += myTasks.length
    return out
  }

  get CheckedCount() {
    const myTasks = ProxyState.tasks.filter(t => t.listId == this.id && t.complete)
    return myTasks.length
  }
}