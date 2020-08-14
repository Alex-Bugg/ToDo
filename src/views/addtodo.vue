<template>
  <div class="todolist">
    <div class="todolist_header">
      <router-link to="/" class="back"></router-link>
      <h3 class="todolist_header_btn_add">Add todo</h3>
    </div>
    <div class="todolist_wrapper">
      <form action="submit" class="todolist_form" @submit.prevent="submitHendler">
        <input
          required
          v-model="title"
          class="todolist_input_title"
          type="text"
          placeholder="Title"
        />
        <textarea
          required
          v-model="desc"
          class="todolist_textarea"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <button class="todolist_btn" type="submit">Add ToDo</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "addtodo",
  data: () => ({
    title: "",
    desc: ""
  }),
  methods: {
    submitHendler() {
      console.log(this.title, this.desc);
      this.title = "";
      this.desc = "";
    }
  }
};
</script>

<style lang="scss" >
.todolist {
  max-width: 600px;
  min-height: 500px;
  margin: 0 auto;
  color: aliceblue;
  background-color: #35495e;
  box-shadow: 0px 0px 31px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  &_header {
    position: relative;
    border-radius: 15px 15px 0 0;
    background-color: #41b883;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &_btn_add {
      background-color: transparent;
      font-size: 22px;
      border: aliceblue 2px solid;
      padding: 10px 20px;
      transition: background-color 0.2s, transform 0.1s, color 0.2s;
      border-radius: 10px;
      color: #35495e;
      background-color: aliceblue;
    }
  }
  &_wrapper {
    padding: 10px;
  }
  &_form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &_input_title {
    padding: 10px;
    margin-bottom: 10px;
    width: 100%;
    font-size: 18px;
    font-family: inherit;
    background-color: #35495e;
    box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.3);
    color: white;
    &::placeholder {
      color: aliceblue;
    }
  }
  &_textarea {
    resize: none;
    min-width: 580px;
    min-height: 280px;
    margin-bottom: 10px;
    padding: 10px;
    font-size: 18px;
    font-family: inherit;
    background-color: #35495e;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.3);
    color: white;
    &::placeholder {
      color: aliceblue;
    }
  }
  &_btn {
    min-width: 300px;
    padding: 15px;
    background-color: #41b883;
    border-radius: 10px;
    color: aliceblue;
    font-family: inherit;
    font-size: 18px;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      opacity: 0.7;
    }
  }
}
.back {
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border: 10px solid transparent;
  border-right: 10px solid aliceblue;
  transition: 0.2s;
  &:hover {
    left: 8px;
    border: 12px solid transparent;
    border-right: 12px solid aliceblue;
  }
  &:active {
    opacity: 0.7;
  }
}
</style>