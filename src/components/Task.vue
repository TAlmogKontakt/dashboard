<template>

    <!-- <h3>{{ task.text}} 
        
        
    </h3> -->
    <li >
      <div class='task'> 
      {{ task.name }} 
      </div>
    
    </li>

  
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: Object,
  },
  methods:{
      onDelete(id){
        //   console.log(id)
        this.$emit('delete-task',id)
      }
  }
}
</script>


<style scope>
li {
  display: inline-block;
  padding: 10;
  background: rgb(0, 255, 85);
}
.fas {
  color: red;
}
.task {
  background: #f4f4f4;
  cursor: pointer;
  display: inline;
  margin: 10px;
}
.task.reminder {
  border-left: 5px solid green;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.inline {
  display: inline;
}
</style>