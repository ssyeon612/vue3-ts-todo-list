import { defineStore } from 'pinia'
import { useStorage } from "@vueuse/core";
import { TodoItem } from '../index.interface'

export const useStoreTodo = defineStore('todo', {
  state: () => ({
    todoList: useStorage('todoList', [] as TodoItem[])
  }),
  getters: {},
  actions: {
    addTodoItem(item: TodoItem) {
      this.todoList.push(item);
    },
    removeTodoItem(id: number) {
     this.todoList = this.todoList.filter(item => item.id !== id);
    },
    changedStatus({
      id, status
    }: { id: TodoItem['id'], status: TodoItem['status'] }) {
      this.todoList.forEach((item: TodoItem) => {
        if (item.id === id) {
          item.status = status
        }
      })
    } 
  }
})