<template>
    <todo-item v-for="item in renderTodoList" :key="item.id" :id="item.id" :title="item.title" :status="item.status" />
</template>

<script lang="ts">
export default {
    name: "item-list",
};
</script>
<script lang="ts" setup>
import { ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useStoreTodo } from "@/store/modules/todo";
import TodoItem from "@/components/todo-item.vue";

const route = useRoute();
const store = useStoreTodo();
const renderTodoList = ref(store.todoList);

console.log("storeToRefs", storeToRefs);
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
