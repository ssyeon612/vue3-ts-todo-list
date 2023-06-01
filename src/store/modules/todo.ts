import { defineStore } from 'pinia'
import { TodoItem } from '../index.interface'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    todoList: ([
      {
          id: 0,
          title: "study",
          status: "clear",
      },
      {
          id: 1,
          title: "clean room",
          status: "active",
      },
      {
          id: 2,
          title: "work out",
          status: "clear",
      },
  ] as TodoItem[])
  }),
  getters: {},
  actions: {
    addTodoItem(item: TodoItem) {
      this.todoList.push(item)
    },
    removeTodoItem(id: number) {
      this.todoList.splice(id, 1);
    },
    changedStatus({
      id, status
    }: { id: TodoItem['id'], status: TodoItem['status'] }) {
      this.todoList[id].status = status
    } 
  }
})