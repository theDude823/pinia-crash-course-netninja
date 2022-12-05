<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i @click="taskStore.deleteTask(task.id)" class="material-icons"
        >delete</i
      >
      <i
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
        class="material-icons"
        >favorite</i
      >
    </div>
  </div>
</template>

<script setup>
import { useTaskStore } from "../stores/TaskStore";

defineProps({ task: Object });
const taskStore = useTaskStore();
</script>

<style lang="scss" scoped></style>
