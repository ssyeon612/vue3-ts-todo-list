<template>
    <div class="container">
        <div class="row">
            <the-header />
        </div>
        <div class="row"><todo-input /></div>
        <div class="row">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts" setup>
import TheHeader from "@/components/the-header.vue";
import TodoInput from "@/components/todo-input.vue";
</script>

<style lang="scss">
.container {
    padding: 2rem 0;
}
</style>
