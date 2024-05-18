window.addEventListener("load", getLocalStorageItems);
function getLocalStorageItems() {
  const todoLists = getItemsFromLocalStorage();
  console.log(todoLists);
  todoLists.forEach(({ checked, value }) => {
    console.log(checked, value);
    const divElement = document.createElement("div");
    divElement.setAttribute("class", "todo-item");
    divElement.innerHTML = `<input class="check-through item-checkbox" checked="false" type="checkbox" name="" id="todo-item" />
    <p>${value}</p>
    <button>
      <img src="./images/icon-cross.svg" alt="" srcset="" />
    </button>`;
    const sectionElement = document.querySelector("section");
    sectionElement.appendChild(divElement);
  });
}

const getItem = document.querySelector("section");

getItem.addEventListener("click", strikeThroughItem);
function strikeThroughItem({ target }) {
  if (target.tagName === "INPUT") {
    if (target.checked) {
      target.nextElementSibling.classList.add("strike-p");
      // update checked item
    } else {
      target.nextElementSibling.classList.remove("strike-p");
    }
  }
  // remove items logic
  if (target.tagName === "IMG") {
    target.parentElement.parentElement.remove();
    addDataToLocalStorage();
  }
}

// Add item logic
const addItem = document.querySelector(".add-todo");
addItem.addEventListener("click", addTodoItem);

function addTodoItem({ target }) {
  const getValue = document.querySelector(".input-element").value;
  const sectionElement = document.querySelector("section");
  if (target.type === "checkbox") {
    if (target.checked && getValue !== "") {
      const divElement = document.createElement("div");
      divElement.setAttribute("class", "todo-item");
      divElement.innerHTML = `<input checked="false" class="check-through item-checkbox" type="checkbox" name="" id="todo-item" />
        <p>${getValue}</p>
        <button>
          <img src="./images/icon-cross.svg" alt="" srcset="" />
        </button>`;
      sectionElement.appendChild(divElement);

      // after appending child you save to local storage
      addDataToLocalStorage();
    }
  }
}

// local storage implementation
function addDataToLocalStorage() {
  const itemsArray = [];
  const getAllItems = document.querySelectorAll(".todo-item");
  getAllItems.forEach((item) => {
    const itemDetail = {
      checked: item.children[0].checked,
      value: item.children[1].textContent,
    };
    itemsArray.push(itemDetail);
  });
  localStorage.setItem("todos", JSON.stringify({ arr: itemsArray }));
  console.log(localStorage);
}

// get items from local storage

function getItemsFromLocalStorage() {
  const items = window.localStorage.getItem("todos");
  const itemsArray = JSON.parse(items).arr;
  return itemsArray;
}
