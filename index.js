const getItem = document.querySelector("section");

getItem.addEventListener("click", strikeThroughItem);
function strikeThroughItem({ target }) {
  if (target.tagName === "INPUT") {
    if (target.checked) {
      target.nextElementSibling.classList.add("strike-p");
    } else {
      target.nextElementSibling.classList.remove("strike-p");
    }
  }
  // remove items logic
  if (target.tagName === "IMG") {
    target.parentElement.parentElement.remove();
  }
}

// Add item logic
const addItem = document.querySelector(".add-todo");
addItem.addEventListener("click", addTodoItem);

function addTodoItem({ target }) {
  const sectionElement = document.querySelector("section");
  if (target.type === "checkbox") {
    if (target.checked) {
      const value = target.nextElementSibling.value;
      console.log(value);

      const divElement = document.createElement("div");
      divElement.setAttribute("class", "todo-item");
      divElement.innerHTML = `<input class="check-through" type="checkbox" name="" id="todo-item" />
        <p>${value}</p>
        <button>
          <img src="./images/icon-cross.svg" alt="" srcset="" />
        </button>`;
      sectionElement.appendChild(divElement);
    }
  }
}

// local storage implementation

function addDataToLocalStorage() {
  const itemsArray = [];
  const getAllItems = document.querySelectorAll(".todo-item");
  getAllItems.forEach((item) => {
    console.log(item.children[1].textContent);
    const itemDetail = {
      checked: item.children[0].checked,
      value: item.children[1].textContent
    };
    console.log(itemDetail);
  });
}
addDataToLocalStorage();
