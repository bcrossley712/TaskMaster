import { tasksService } from "../Services/TasksService.js"
import { Pop } from "../Utils/Pop.js"


export class TasksController {


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
    if (await Pop.confirm()) {
      tasksService.deleteTask(id)
    }
  }

  checkBox(id) {
    tasksService.checkBox(id)
  }

}