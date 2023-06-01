<template>
    <todo-item v-for="item in props.todoList" :key="item.id" :id="item.id" :title="item.title" :status="item.status" @remove:todo="(id) => emit('remove:todo', id)" />
</template>

<script lang="ts">
name: "todo-list";
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TodoItem from "@/components/todo-item.vue";

interface ITodoItem {
    id: number;
    title: string;
    status: "active" | "clear";
}

interface Props {
    todoList: ITodoItem[];
}

const props = defineProps<Props>();
const emit = defineEmits(["remove:todo"]);
</script>

<style scoped></style>
