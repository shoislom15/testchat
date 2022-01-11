const createElement = (tag = "div", className = "", innerHTML = "", father = "") => {
    const element = document.createElement(tag);
    className && (element.className = className);
    innerHTML && (element.innerHTML = innerHTML);
    father && father.appendChild(element);

    return element;
};

const aler = (text = "salom") => {
    alert(text);
}


// Render starts

const chatSection = document.getElementById("chatSection");


// Chatti habarlari turadigan bodisini renderi

const chatMainRender = (array, userName) => {
    const main = createElement("main", "", "", chatSection)

    const container = createElement("div", "container-fluid", "", main);

    // Habarlar saqlanadigan ul
    const ul = createElement("ul", "m-0 p-0 w-100 pb-5", "", container);

    // Kirgan arrayni map qilib habarlar qurilmoqda
    array.map((habarObj) => {

        if (habarObj.userName != userName) {

            // Boshqa odam yozgan habarni lisi

            const li = createElement("li", "d-flex align-items-end w-100 my-2", "", ul)

            const left = createElement("div", "m-left mx-2 h-100", "", li);
            const userImg = createElement("img", "groupImg", "", left);

            // habarObj.img   - bu habarda kelgan Userri rasmi bolishi kere shu joydan ozgartirsa boladi
            userImg.src = habarObj.img;

            // right habar matni turadigan joy
            const right = createElement("div", "bg-white m-right birov-yozgan-habar p-2 pt-1 pb-1 w-50", "", li);

            // Top username bilan edit button turadigan joy
            const top = createElement("div", "m-top d-flex align-items-center justify-content-between mb-2  position-relative", "", right);

            // UserName
            const p = createElement("p", "p-0 m-0 text-yellow", "", top)
            // Habarri yozgan odammi ismi obyektdan olinishi kerak
            p.innerHTML = habarObj.userName;

            // Uch nuqta iconkali habrri buttoni
            const mainButton = createElement("button", "btn py-0 p-1", "", top);
            const mainButtonIcon = createElement("i", "fas fa-ellipsis-v", "", mainButton);

            // EDit qilish variantlari EDit bilan delete
            const mainDiv = createElement("div", "m-set bg-white border rounded li-hover d-none", "", top);

            const mainUl = createElement("ul", "", "", mainDiv);

            const editLi = createElement("li", "d-flex align-items-center", "", mainUl);
            editLi.onclick = () => {
                // edit onclick
                aler(
                    "edit"
                );
            };
            const editIcon = createElement("i", "fas fa-edit btn my-1", "", editLi);
            const editSpan = createElement("span", "", "Edit", editLi);

            const deleteLi = createElement("li", "d-flex align-items-center", "", mainUl);
            deleteLi.onclick = () => {
                // delete onclick
                aler("delete");
            };
            const deleteIcon = createElement("i", "far fa-trash-alt btn my-1", "", deleteLi);
            const deleteSpan = createElement("span", "", "Delete", deleteLi);
            // Edit ul render tugadi 

            const bottom = createElement("div", "m-bottom", "", right);
            const message = createElement("p", "", "", bottom);

            // Habar matnini inner qilish
            message.innerHTML = habarObj.text;

            const time = createElement("span", "fs-7", "", bottom);
            // Habar vaqtini inner qilish
            time.innerHTML = habarObj.time;

            mainButton.onclick = () => {

                if (mainDiv.classList.contains("d-none")) {
                    mainDiv.classList.remove("d-none")
                } else {
                    mainDiv.classList.add("d-none")
                };
            };


            mainButton.onblur = () => {
                setTimeout(() => {
                    mainDiv.classList.add("d-none");

                }, 300)
            }
        } else {
            // Ozi yozgan habarni lisi

            const li = createElement("li", "d-flex align-items-end justify-content-end my-2", "", ul);

            // right habar matni turadigan joy
            const right = createElement("div", "bg-blue m-right ozi-yozgan-habar p-2 pt-1 pb-1 w-50", "", li);

            // Top username bilan edit button turadigan joy
            const top = createElement("div", "m-top d-flex align-items-center justify-content-between mb-2 position-relative", "", right);

            // UserName
            const p = createElement("p", "p-0 m-0 text-yellow", "", top)
            // Habarri yozgan odammi ismi obyektdan olinishi kerak
            p.innerHTML = habarObj.userName;

            // Uch nuqta iconkali habrri buttoni
            const mainButton = createElement("button", "btn py-0 p-1", "", top);
            const mainButtonIcon = createElement("i", "fas fa-ellipsis-v", "", mainButton);

            // EDit qilish variantlari EDit bilan delete
            const mainDiv = createElement("div", "m-set bg-white border rounded li-hover d-none", "", top);

            const mainUl = createElement("ul", "", "", mainDiv);

            const editLi = createElement("li", "d-flex align-items-center", "", mainUl);

            editLi.onclick = () => {
                // edit onclick
                aler("edit");
            };

            const editIcon = createElement("i", "fas fa-edit btn my-1", "", editLi);
            const editSpan = createElement("span", "", "Edit", editLi);



            const deleteLi = createElement("li", "d-flex align-items-center", "", mainUl);
            deleteLi.onclick = () => {
                // delete onclick
                aler("delete");
            };
            const deleteIcon = createElement("i", "far fa-trash-alt btn my-1", "", deleteLi);
            const deleteSpan = createElement("span", "", "Delete", deleteLi)
            // Edit ul render tugadi 

            const bottom = createElement("div", "m-bottom", "", right);
            const message = createElement("p", "", "", bottom);

            // Habar matnini inner qilish
            message.innerHTML = habarObj.text;

            const time = createElement("span", "fs-7", "", bottom);
            // Habar vaqtini inner qilish
            time.innerHTML = habarObj.time;

            // HAbar yozganni img
            const left = createElement("div", "m-left mx-2 h-100", "", li);
            const userImg = createElement("img", "groupImg", "", left);

            // habarObj.img   - bu habarda kelgan Userri rasmi bolishi kere shu joydan ozgartirsa boladi
            userImg.src = habarObj.img;

            mainButton.onclick = () => {

                if (mainDiv.classList.contains("d-none")) {
                    mainDiv.classList.remove("d-none");
                } else {
                    mainDiv.classList.add("d-none");
                };
            };


            mainButton.onblur = () => {
                setTimeout(() => {
                    mainDiv.classList.add("d-none");

                }, 300)
            }
        };



    })


    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);

};

const chatFooterRender = () => {
    const footer = createElement("footer", "", "", chatSection)

    const form = createElement("form", "boder-0 d-flex align-items-center bg-white p-2 px-4", "", footer);

    const input = createElement("input", "w-100 border-0 h-100", "", form)
    input.setAttribute("placeholder", "Write a message...")
    input.setAttribute("type", "text");

    const button = createElement("button", "btn p-1", "", form);
    const buttonIcon = createElement("i", "far fa-paper-plane fs-5", "", button);

};

const array = [
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Elmurod",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Islom",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "To'rabek",
    },
    {
        img: "./images/didssph-guxJTmZKhsg-unsplash.jpg",
        time: "15:08",
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quis dolor inciduntsimilique expedita aliquid eius debitis obcaecati ut, dicta suscipit. Reiciendisillonihil necessitatibus eum dicta sunt quidem repellendus ipsa tempora at commodiveniam`,
        userName: "Shoislom",
    },

];

const chatRender = () => {
    chatSection.innerHTML = "";

    chatMainRender(array, "Shoislom");
    chatFooterRender();

};

// chatHeaderRender();

chatRender();