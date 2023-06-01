<template>
    <input type="text" class="form-control" placeholder="할일을 입력해주세요." :value="inputValue" @keyup.enter="handelAddItem" />
</template>

<script lang="ts">
export default {
    name: "todo-input",
};
</script>

<script lang="ts" setup>
import { ref } from "vue";
import { useStoreTodo } from "@/store/modules/todo";

const store = useStoreTodo();
const inputValue = ref("");

const handelAddItem = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    if (!value) return;
    inputValue.value = value;
    store.addTodoItem({
        id: 1,
        title: value,
        status: "active",
    });
    inputValue.value = "";
};
</script>

<style lang="scss" scoped></style>
