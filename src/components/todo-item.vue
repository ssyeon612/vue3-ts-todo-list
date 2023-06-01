<template>
    <div class="input-group">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" :checked="props.status === 'clear'" @change="handleChangeStatus" />
        </div>
        <input type="text" class="form-control" :value="props.title" disabled />
        <button type="button" class="btn btn-outline-danger" @click="handleRemoveItem">X</button>
    </div>
</template>

<script lang="ts">
export default {
    name: "todo-item",
};
</script>
<script setup lang="ts">
import { defineProps } from "vue";
import { useStoreTodo } from "@/store/modules/todo";
import { TodoItem } from "@/store/index.interface";

interface Props {
    id: TodoItem["id"];
    title: TodoItem["title"];
    status: TodoItem["status"];
}

const store = useStoreTodo();
const props = defineProps<Props>();

const handleChangeStatus = () => {
    const changeStatus = props.status === "active" ? "clear" : "active";
    store.changedStatus({
        id: props.id,
        status: changeStatus,
    });
};

const handleRemoveItem = () => {
    store.removeTodoItem(props.id);
};
</script>

<style lang="scss" scoped>
.input-group {
    margin-bottom: 0.5rem;
}
</style>
