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

export default {
  components: {AddItem, TodoItem},
  data() {
    return {
      listItems: [
        {id: 1, title: "Learn JavaScript", isChecked: false},
        {id: 2, title: "Learn Vue", isChecked: false},
        {id: 3, title: "Learn Node.js", isChecked: false},
      ],
    }
  },
  methods: {
    addItem(item) {
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
