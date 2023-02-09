<script setup>
import {ref} from 'vue';
const todos=ref([]);
const task = ref('');

const add=()=>{
  if(task.value.trim()===''){
    console.log("Loi r ne cu")
    return;
  }
  todos.value.push({
    content: task.value,
    done: false,
    created: new Date().getTime()
  })
  task.value="";
}
const remove=(task)=>{
  todos.value=todos.value.filter((t)=> t !==task);
}

const done=(task)=>{
    task.done=!task.done;
}
</script>

<template>
  <div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <div class="h-100 w-full flex items-center justify-center font-sans">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
          <h1 class="text-gray-800 text-2xl">Todo list</h1>
          <div class="flex mt-4">
                <input name="content" class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" placeholder="Add Todo" 
                v-model="task" />
                <button class="flex-no-shrink p-2 border-2 rounded text-teal-500 border-teal hover:text-white hover:bg-teal-500" @click="add()">Add</button>
          </div>
        </div>
        <div class="flex mb-4 items-center"
        v-for="task in todos">
                <p v-if="task.done" class="w-full line-through text-green-800">{{ task.content }}</p>
                <p v-else class="w-full text-gray-600">{{  task.content }}</p>
                <button v-if="task.done" class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-green hover:bg-gray-500" @click="done(task)">Undone</button>
                <button v-else class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green hover:bg-green-500" @click="done(task)">Done</button>
                <button class="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red hover:text-white hover:bg-red-500" @click="remove(task)">Remove</button>
                
          </div>
      </div>
    </div>
  </div>
 
  

  <!--Todo list Section-->

</template>

<style scoped>
  @import url("./style.css");
</style>
