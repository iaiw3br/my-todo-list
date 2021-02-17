<template>
  <ul>
    <li
        v-for="(item, index) in listItems"
        :key="index"
        v-bind:class="{checked: item.isChecked}"
        v-on:click="changeChecked(item.id)"
    >{{ item.title }}
      <span
          class="close"
          v-on:click.stop="removeItem(item.id)"
      ></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    listItems: {
      type: Array
    }
  },
  methods: {
    changeChecked(id) {
      const item = this.listItems.find(item => item.id === id)
      item.isChecked = !item.isChecked
    },
    removeItem(id) {
      this.listItems = this.listItems.filter(item => item.id !== id)
    }
  }
}
</script>

<style>
div ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

/* Style the list items */
/* Remove margins and padding from the list */
div ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
div ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
div ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
div ul li.checked {
  text-decoration: line-through;
}

.close {
  position: absolute;
  right: 17px;
  top: 8px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 33px;
  width: 2px;
  background-color: #333;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}
</style>
