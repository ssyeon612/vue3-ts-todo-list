<template>
    <div class="container">
        <div class="row">
            <the-header />
        </div>
        <div class="row"><todo-input @update:todo="handleUpdateTodoList" /></div>
        <div class="row">
            <router-view :todo-list="todoList" @remove:todo="handleRemoveTodoItem" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import TheHeader from "@/components/the-header.vue";
import TodoInput from "@/components/todo-input.vue";
</script>

<style lang="scss" scoped>
.container {
    padding: 2rem 0;
}
.row:nth-child(2) {
    margin: 2rem 0;
}
</style>
