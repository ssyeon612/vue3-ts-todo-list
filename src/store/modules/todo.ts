import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";
import { TodoItem } from '../index.interface'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    todoList: useStorage('todoList',[] as TodoItem[])
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