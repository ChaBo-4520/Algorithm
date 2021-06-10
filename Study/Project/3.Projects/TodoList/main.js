"use strict";
function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  // 이벤트 위임을 통해 각각의 button에 이벤트를 달지 않고 부모에게 이벤트를 걸어
  // 아래 까지 전달 되도록 한다.
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

function setEventListeners() {
  button.addEventListener("click", (event) => click_btn(event));
  items.addEventListener("click", (event) => delete_item(event));
}
function click_btn(event) {
  $(".items").append(`
    <li class="item">
      <span>${input.value}</span><button class="delete_btn">x</button>
    </li>
  `);
  input.value = "";
}
function delete_item(event) {
  console.log(event);
}
const button = document.querySelector(".add_button");
const input = document.querySelector("input");
const items = document.querySelector(".items");
setEventListeners();
