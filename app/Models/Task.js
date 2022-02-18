import { generateId } from "../Utils/generateId.js";

export class Task {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.listId = data.listId
  }

  get Template() {
    return `
    
    `
  }
}