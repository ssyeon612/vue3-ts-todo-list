<template>
    <div class="input-group">
        <div class="input-group-text">
            <input class="form-check-input mt-0" type="checkbox" :checked="props.status === 'clear'" />
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
import { defineProps, defineEmits } from "vue";

interface TodoItem {
    id: number;
    title: string;
    status: "active" | "clear";
}

const props = defineProps<TodoItem>();
const emit = defineEmits(["remove:todo"]);

const handleRemoveItem = () => {
    emit("remove:todo", props.id);
};
</script>

<style lang="scss" scoped>
.input-group {
    margin-bottom: 0.5rem;
}
</style>
