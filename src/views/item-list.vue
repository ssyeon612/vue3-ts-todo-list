<template>
    <todo-item v-for="item in renderTodoList" :key="item.id" :id="item.id" :title="item.title" :status="item.status" />
</template>

<script lang="ts">
export default {
    name: "todo-list",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStoreTodo } from "@/store/modules/todo";
import TodoItem from "@/components/todo-item.vue";

const route = useRoute();
const store = useStoreTodo();
const renderTodoList = ref(store.todoList);

watch(
    () => route.params.status,
    (val) => {
        if (!val) {
            renderTodoList.value = store.todoList;
        } else if (val === "active" || val === "clear") {
            renderTodoList.value = [...store.todoList].filter((item: any) => {
                return item.status === val;
            });
        }
    },
    { deep: true }
);
</script>

<style scoped></style>
