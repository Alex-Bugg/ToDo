<template>
  <div class="todoitem">
    <div class="todoitem_wrap">
      <label>
        <input class="todoitem_checkbox" type="checkbox" />
        <span class="todoitem_checkbox_new"></span>
      </label>
      <p class="todoitem_id">id |</p>
      <h3 class="todoitem_title">Title</h3>
      <p class="todoitem_desc">desc</p>
    </div>
    <div class="todoitem_btn_wrap">
      <button class="btn_item" type="button">&#10000;</button>
      <button class="btn_item" type="button">&#10006;</button>
    </div>
  </div>
</template>

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
  &_wrap {
    width: 100%;
    display: flex;
    align-items: center;
  }
  &_btn_wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &_id {
    margin-right: 5px;
    font-size: 14px;
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
</style>