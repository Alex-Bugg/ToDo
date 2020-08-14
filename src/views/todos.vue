<template>
  <div class="todolist">
    <div class="todolist_header">
      <router-link to="/addtodo" class="todolist_header_btn">Add todo</router-link>
    </div>
    <Loader v-if="loading" />
    <div>
      <div v-if="items.length" class="todolist_wrap">
        <Todoitem
          v-for="(item, idx) in items"
          :key="item.id"
          :item="item"
          :idx="idx"
          @deleteTodo="deleteTodo"
        />
      </div>
      <p v-else class="todolist_exit">Not yet ToDo</p>
    </div>
  </div>
</template>

<script>
import Todoitem from "@/components/Todoitem";
export default {
  name: "todos",
  data() {
    return {
      items: [],
      loading: true
    };
  },
  mounted() {
    const preTodoItem = JSON.parse(localStorage.getItem("todoList"));
    if (preTodoItem !== null) {
      this.items = preTodoItem;
      this.loading = false;
    }
  },
  methods: {
    deleteTodo(items) {
      this.items = items;
    }
  },
  components: { Todoitem }
};
</script>

<style lang="scss">
.todolist {
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
  color: aliceblue;
  background-color: #35495e;
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  &_exit {
    font-size: 18px;
    padding: 10px;
    font-weight: bold;
  }
  &_header {
    border-radius: 15px 15px 0 0;
    background-color: #41b883;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &_btn {
      background-color: transparent;
      color: aliceblue;
      font-size: 22px;
      border: aliceblue 2px solid;
      padding: 10px 20px;
      transition: background-color 0.2s, transform 0.1s, color 0.2s;
      border-radius: 10px;
      &:hover {
        color: #35495e;
        background-color: aliceblue;
      }
      &:active {
        transform: scale(1.1);
        opacity: 0.7;
      }
    }
  }
  &_wrap {
    padding: 10px;
  }
}
</style>