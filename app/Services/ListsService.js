import { ProxyState } from "../AppState.js"
import { List } from "../Models/List.js"

class ListsService {
  createList(newList) {
    let addedList = new List(newList)
    ProxyState.lists = [...ProxyState.lists, addedList]
  }

  deleteList(listId) {
    ProxyState.lists = ProxyState.lists.filter(l => l.id != listId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.listId != listId)
  }

}

export const listsService = new ListsService