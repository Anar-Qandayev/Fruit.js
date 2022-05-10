let navElements = document.querySelectorAll(".nav-el");
let basketContainer = document.querySelector(".basketContainer");
let basket = document.querySelector(".basket");
let totalPriceDiv = document.querySelector(".totalPrice");
let basketFruit = document.querySelector(".basketFruit");

navElements.forEach(x => {
    x.addEventListener("click", function() {
        if (x.getAttribute("data-target") == "Səbət") {
            basketContainer.classList.remove("hide");
        } else if (x.getAttribute("data-target") == "Hesabla") {
            totalPriceDiv.classList.remove("hide");
        }
    })
})

let fruitType = null;
let totalPrice = 0.00;

let orange1 = document.querySelector(".orange1");
let orange2 = document.querySelector(".orange2");
let orange3 = document.querySelector(".orange3");
let dragItem;
orange1.ondragstart = function() {
    dragItem = this;
}
orange2.ondragstart = function() {
    dragItem = this;
}
orange3.ondragstart = function() {
    dragItem = this;
}


let currant1 = document.querySelector(".currant1");
let currant2 = document.querySelector(".currant2");
let currant3 = document.querySelector(".currant3");


currant1.ondragstart = function() {
    dragItem = this;
}
currant2.ondragstart = function() {
    dragItem = this;
}
currant3.ondragstart = function() {
    dragItem = this;
}

let raspberry1 = document.querySelector(".raspberry1");
let raspberry2 = document.querySelector(".raspberry2");
let raspberry3 = document.querySelector(".raspberry3");


raspberry1.ondragstart = function() {
    dragItem = this;
}
raspberry2.ondragstart = function() {
    dragItem = this;
}
raspberry3.ondragstart = function() {
    dragItem = this;
}


basket.ondragover = function(e) {
    e.preventDefault();
}

basket.ondrop = function() {
    if (fruitType == dragItem.getAttribute("data-id") || !fruitType) {
        totalPriceDiv.classList.add("hide")
        basket.appendChild(dragItem);
        fruitType = dragItem.getAttribute("data-id");
        totalPrice += Number(dragItem.children[2].children[0].textContent.split(":")[1])
        totalPriceDiv.textContent = "( Total price: " + totalPrice + " )"
        basketFruit.textContent = fruitType

    }
}