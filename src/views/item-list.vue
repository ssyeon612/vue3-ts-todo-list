<template>
    <todo-item v-for="item in renderTodoList" :key="item.id" :id="item.id" :title="item.title" :status="item.status" />
</template>

<script lang="ts">
export default {
    name: "todo-list",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { useStoreTodo } from "@/store/modules/todo";
import TodoItem from "@/components/todo-item.vue";

const store = useStoreTodo();
const renderTodoList = ref(store.todoList);
</script>

<style scoped></style>
