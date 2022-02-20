import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { Pop } from "../Utils/Pop.js"

function _draw() {
  let template = ''
  ProxyState.lists.forEach(l => template += l.Template)
  document.getElementById('lists').innerHTML = template
  // NOTE Attempted to get the masonry to reorganize each time the draw function is called...unsuccessfully.
  // document.getElementById('masonry').innerHTML = `
  //     <div id="masonry">
  //       <div class="row my-2 py-2" data-masonry='{ "percentPosition": true }' id="lists">${template}</div>
  //     </div>`
}


export class ListsController {
  constructor() {
    ProxyState.on('tasks', saveState)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', _draw)
    loadState()
  }

  createList(event) {
    window.event.preventDefault()
    let form = event.target
    let newList = {
      name: form.name.value,
      color: form.color.value
    }
    listsService.createList(newList)
    form.reset()
  }

  async deleteList(listId) {
    if (await Pop.confirm()) {
      listsService.deleteList(listId)
    }
  }

}