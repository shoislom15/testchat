const getElement = (tag = "div", classes = "", innerHTML = "") => {
    const element = document.createElement(tag);
    element.innerHTML = innerHTML;
    element.className = classes;
    return element;
};

const inner = document.querySelector("#inner");
console.log(inner);
inner.innerHTML = "";

const li = getElement('li', "d-flex align-items-center justify-content-between p-2");
console.log(li);
const left = getElement('div', "left d-flex  justify-content-between");

li.append(left);

const img = getElement('img', "mt-1 me-3", "https://avatars.githubusercontent.com/u/94689104?v=4");
left.append(img);

const texts = getElement('div', "texts me-3")
const username = getElement('p', "p-0 m-0", "ism");
const text = getElement('p', "p-0 m-0", "matn");
texts.append(username, text);
left.append(texts);

const date = getElement('p', "", "05.01.2022");
left.append(date);

const right = getElement('div', "right text-white")
li.append(right);

const save = getElement('button', "btn btn-success me-2", "Save");
const edit = getElement('button', "btn btn-warning text-white me-2", "edit");
const deletE = getElement('button', "btn btn-danger", "delete");

right.append(save, edit, deletE);

inner.appendChild(li)

console.log(li, left, img, text, texts, username, date, right);
