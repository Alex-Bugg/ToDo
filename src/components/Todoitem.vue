<template>
  <div class="todoitem">
    <div class="todoitem_wrap">
      <label>
        <input
          @click="cheackedHandler"
          class="todoitem_checkbox"
          type="checkbox"
          :checked="item.checked"
        />
        <span class="todoitem_checkbox_new"></span>
      </label>
      <p :class="checked ? 'todoitem_title_line_through':''" class="todoitem_id">{{idx + 1}}|</p>
      <h3 :class="checked ? 'todoitem_title_line_through':''" class="todoitem_title">{{item.title}}</h3>
      <p :class="checked ? 'todoitem_title_line_through':''" class="todoitem_desc">{{item.desc}}</p>
    </div>
    <div class="todoitem_btn_wrap">
      <button @click="$router.push(`/item/${item.id}`)" class="btn_item" type="button">&#10000;</button>
      <button @click="activeDelete = !activeDelete" class="btn_item" type="button">&#10006;</button>
      <div class="modal_delete" :class="activeDelete?'modal_delete_active':''">
        <p class="modal_detele_parag">Are you sure?</p>
        <div class="modal_delete_wrap_btn">
          <button @click="deleteItem" class="modal_delete_btn" type="button">Yes</button>
          <button @click="activeDelete = !activeDelete" class="modal_delete_btn" type="button">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    idx: Number
  },
  data() {
    return {
      checked: this.item.checked,
      activeDelete: false
    };
  },
  methods: {
    cheackedHandler() {
      this.checked = !this.checked;
      const toDoitems = JSON.parse(localStorage.getItem("todoList"));
      toDoitems.filter(toDoitem => {
        if (toDoitem.id === this.item.id) {
          toDoitem.checked = !toDoitem.checked;
        }
        localStorage.setItem("todoList", JSON.stringify(toDoitems));
      });
    },
    deleteItem() {
      this.activeDelete = !this.activeDelete;
      const toDoitems = JSON.parse(localStorage.getItem("todoList"));
      toDoitems.splice(this.idx - 1, 1);
      this.$emit("deleteTodo", toDoitems);
      localStorage.setItem("todoList", JSON.stringify(toDoitems));
    }
  }
};
</script>

<style lang="scss">
.todoitem {
  display: flex;
  justify-content: space-between;
  font-family: "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial,
    sans-serif;
  font-size: 18px;
  padding: 10px;
  border-bottom: 1px solid aliceblue;
  &:last-child {
    border-bottom: 0;
  }
  &_checkbox_new {
    width: 20px;
    height: 20px;
    display: block;
    border: solid 1px aliceblue;
    border-radius: 50%;
    margin-right: 10px;
    position: relative;
  }
  &_checkbox:checked + .todoitem_checkbox_new {
    &::after {
      content: "";
      width: 10px;
      height: 10px;
      display: block;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: aliceblue;
    }
  }
  &_title_line_through {
    text-decoration: line-through;
  }
  &_checkbox {
    display: none;
  }
  &_title {
    width: 100%;
    max-width: 150px;
    text-align: left;
  }
  &_desc {
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &_wrap {
    width: 100%;
    display: flex;
    align-items: center;
  }
  &_btn_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  &_id {
    margin-right: 5px;
  }
}
.btn_item {
  background-color: transparent;
  color: aliceblue;
  font-size: 20px;
  transition: color 0.3s;
  &:first-child {
    margin-right: 10px;
  }
  &:hover {
    color: #41b883;
  }
  &:active {
    transform: scale(1.2);
    opacity: 0.7;
  }
}
.modal_delete {
  transition: 0.5s;
  transform: translateX(1000px);
  opacity: 0;
  min-width: 100px;
  padding: 15px;
  background: #35495e;
  z-index: 5;
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  position: absolute;
  left: 60px;
  top: -20px;
  &_wrap_btn {
    margin-top: 7px;
    display: flex;
  }
  &_btn {
    min-width: 35px;
    background-color: #41b883;
    color: aliceblue;
    padding: 5px;
    &:first-child {
      margin-right: 5px;
    }
  }
}
.modal_delete_active {
  transform: translateX(0);
  opacity: 1;
}
</style>