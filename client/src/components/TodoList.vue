<template>
  <form>
    <div class="todo-list">
      <h2>My To Do List</h2>
      <todo-item
          :list-items="listItems"
      ></todo-item>
      <add-item
          :list-items="listItems"
          v-on:add-item="addItem"
      ></add-item>
    </div>
  </form>

</template>

<script>
import TodoItem from "@/components/TodoItem";
import AddItem from "@/components/AddItem";

import http from "../http-common"

export default {
  name: 'TodoList',
  components: {AddItem, TodoItem},
  data() {
    return {
      listItems: [],
    }
  },
  mounted() {
    this.showTodoList()
  },
  methods: {
    async showTodoList() {
      const todoResponse = await http.get('/todos')
      this.listItems = todoResponse.data
    },
    async addItem(item) {
      await http.post('/', item)
      this.listItems.push(item);
    }
  }
}
</script>


<style>
/* Include the padding and border in an element's total width and height */
* {
  box-sizing: border-box;
  width: 50rem;
}

div h2 {
  padding-left: 2rem;
}

/* Style the todo-list */
.todo-list {
  padding: 12rem 30rem;
  text-align: center;
}

/* Clear floats after the todo-list */
.todo-list:after {
  content: "";
  display: table;
  clear: both;
}

</style>
