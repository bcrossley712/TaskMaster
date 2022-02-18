import { List } from "./Models/List.js"
import { Task } from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


let fakeList = new List({ id: 1, name: 'Create list', color: '#ffffff' })
let fakeTask = new Task({ name: 'Create task', listId: 1 })

class AppState extends EventEmitter {
  /** @type {import('./Models/List').List[]} */
  lists = []

  /** @type {import('./Models/Task').Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
