<template><div>

<h3> Buildings</h3>

<ul  >
      <!-- <h3>{{ task.text}}</h3> -->
      <!-- @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)" -->
    <Task :key="task.id" v-for="task in tasks"
      :task="task"
    />
  </ul>
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>

<style scope>
ul {
  list-style: none;
  padding: 10;
}

</style>