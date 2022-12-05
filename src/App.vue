<script setup>
import { useTaskStore } from "./stores/TaskStore";
import { ref } from "vue";

import TaskDetails from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";
const taskStore = useTaskStore();
const filter = ref("all");
// line 33 only "tasks" written. Not "taskStore.tasks"
const { tasks } = storeToRefs(taskStore);
</script>

<template>
  <!-- heading -->

  <header>
    <img src="./assets/pinia-logo.svg" alt="" />
    <h1>Pinia Tasks</h1>
  </header>
  <!-- new task form -->
  <div class="new-task-form">
    <TaskForm />
  </div>
  <!-- filter -->
  <nav class="filter">
    <button @click="filter = 'all'">All tasks</button>
    <button @click="filter = 'favs'">Fav tasks</button>
  </nav>
  <!-- Task list -->
  <div class="task-list" v-if="filter === 'all'">
    <p>You have {{ taskStore.totalCount }} tasks left to do</p>
    <!-- only "tasks" written not "taskStore.tasks" -->
    <div v-for="task in tasks">
      <TaskDetails :task="task" />
    </div>
  </div>
  <div class="task-list" v-if="filter === 'favs'">
    <p>You have {{ taskStore.favCount }} favs left to do</p>
    <div v-for="task in taskStore.favs">
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<style scoped></style>
