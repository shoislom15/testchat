import { addTask, showTask, removeTask, upDate } from "./main.js";

let userId;

function signUP() {
  bvzcxbxfbfdbfdbfdbfd;

  userId = uid;

}

const date = new Date();
let min = date.getMinutes();
if (min < 10) min = "0" + min;
const time = date.getHours() + ":" + min;
const fullTime = time;

const addForm = document.querySelector('#addForm');
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let task_text = addForm.task.value;

  addTask({ img: "https://avatars.githubusercontent.com/u/94689104?v=4", user: "Shoislom", text: task_text, date: fullTime, }, addForm);
})

const taskListUl = document.querySelector('#taskList');

showTask(createList);



const getElement = (tag = "div", classes = "", innerHTML = "") => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  element.className = classes;
  return element;
};

// const button = document.createElement("button");

// button.className = "btn btn-primary";




function createList(obj) {
  const tasks = Object.entries(obj);

  console.log(Object.entries(obj));

  taskListUl.innerHTML = "";

  tasks.forEach((arr) => {
    const item = arr[1];
    const keya = arr[0];
    const li = getElement('li', "d-flex align-items-center justify-content-between p-2");
    const left = getElement('div', "left d-flex  justify-content-between");
    li.append(left);

    const img = getElement('img', "mt-1 me-3", ``);
    img.src = `${item.img}`
    left.append(img);

    const texts = getElement('div', "texts me-3 w-400")
    const username = getElement('p', "p-0 m-0", `${item.user}`);
    const text = getElement('input', "p-0 m-0 w-100", `${item.text}`);
    text.readOnly = true;
    text.value = `${item.text}`;
    texts.append(username, text);
    left.append(texts);

    const date = getElement('p', "", `${item.date}`);
    left.append(date);

    const right = getElement('div', "right text-white")
    li.append(right);

    const save = getElement('button', "btn btn-success me-3", "Save");
    save.onclick = () => {
      text.readOnly = true;
      console.log(text.value);
      // writeUserData(`${keya}`, `${item.img}`, `${item.user}`, `${text.value}`, `${item.date}`)

      upDate(keya, { text: text.value });
    };

    const edit = getElement('button', "btn btn-warning text-white me-3", "edit");
    edit.onclick = () => {
      text.readOnly = false;
    };
    const deletE = getElement('button', "btn btn-danger", "delete");
    deletE.onclick = () => {
      removeTask(keya);
    };

    right.append(save, edit, deletE);


    taskListUl.append(li);
  })
}

window.removeTask = removeTask;



