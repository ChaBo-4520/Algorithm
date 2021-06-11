"use strict";
var id_count = 1;
// 이벤트 추가
function Add_EventListeners() {
  input_text.addEventListener("keyup", enterkey);
  input_text.addEventListener("keyup", onFocus);
  list.addEventListener("click", Delete_item);
}
// text input이 포커스 됏을 때,
function onFocus() {
  if (input_text.value != "") {
    document.getElementById("delete-text").style.display = "block";
    const deleteBtn = document.querySelector("#delete-text");
    deleteBtn.addEventListener("click", deleteTextInput);
    return true;
  } else {
    document.getElementById("delete-text").style.display = "none";
    return false;
  }
}

// text input에서 enter를 눌렀을 때
function enterkey(event) {
  if (input_text.value == "") return;
  if (event.key == "Enter") {
    Add_item(input_text.value);
    deleteTextInput();
  }
}
// delete-text버튼을 눌렀을 때
function deleteTextInput() {
  input_text.value = "";
}
// todo-list에 아이템을 추가하는 함수
function Add_item(text) {
  var temp = document.createElement("li");
  temp.setAttribute("class", "item");
  temp.innerHTML = `
  <input type="checkbox" id="item${id_count}" />
  <label for="item${id_count}" class="toggle"></label>
  <span>${text}</span>
  <button class="delete"><i class="fas fa-times"></i></button>
  `;
  list.appendChild(temp);
  id_count++;
}

function Delete_item(event) {
  console.log(event);
}
const input_text = document.querySelector(".new-todo");
const list = document.querySelector(".items");
Add_EventListeners();

// list 변화 감지
// 감지대상
const target = document.querySelector(".items");
// 감지시 동작
const observer = new MutationObserver((mutations) => {
  const todoCount = document.querySelector(".todo-count");
  todoCount.removeChild(document.querySelector(".counting"));
  const temp = document.createElement("strong");
  temp.setAttribute("class", "counting");
  temp.innerHTML = `${mutations[0].target.childNodes.length}`;
  todoCount.prepend(temp);
});
// observer 옵션
const option = {
  childList: true,
};
// observer동작시작
observer.observe(target, option);
