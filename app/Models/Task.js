import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.complete = data.complete || false
    this.listId = data.listId
  }

  get Template() {
    return `
      <div id="tasks" class="d-flex justify-content-between align-items-center p-2">
        <div class="form-check form-check-inline">
          <input type="checkbox" class="form-check-input" name="" id="${this.id}" value="checkedValue" ${this.complete ? 'checked' : ''} onclick="app.tasksController.checkBox('${this.id}')">
          <label class="form-check-label" for="${this.id}">
            ${this.name}
          </label>
        </div>
        <i class="mdi mdi-delete selectable" title="Delete task" onclick="app.tasksController.deleteTask('${this.id}')"></i>
      </div>
    `
  }
}