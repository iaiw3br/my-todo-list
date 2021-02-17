<template>
  <div>
    <input
        class="search-text"
        type="text"
        placeholder="Title..."
        v-model="newItem"
        required
    >
    <input
        class="add-btn"
        type="submit"
        value="Add"
        v-on:click.prevent="addItem"
    >
  </div>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array,
    }
  },
  data() {
    return {
      newItem: null,
    }
  },
  methods: {
    addItem() {
      const newId = this.listItems.length + 1;
      const newItem = {
        title: this.newItem,
        id: newId,
        isChecked: false,
      };
      this.$emit('add-item', newItem);
      this.newItem = null;
    }
  }
}
</script>

<style>
/* Style the input */
div input {
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 10px;
  float: left;
  font-size: 16px;
}


/* Style the "Add" button */
.add-btn {
  padding: 10px;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.add-btn:hover {
  background-color: #bbb;
}

.search-text {
  margin-top: 1rem;
}
</style>
