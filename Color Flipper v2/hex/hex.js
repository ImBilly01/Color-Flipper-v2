const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", ];
const textColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", ];
const btn = document.getElementById('btn');
// const textBtn = document.getElementById('txtbtn');
const color = document.querySelector(".color");
const text = document.querySelector(".text");

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    text.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

btn.addEventListener('click', function() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomTextNumber()];
        color.textContent = hexColor;
        document.body.style.color = hexColor;
    }
});

function getRandomTextNumber() {
    return Math.floor(Math.random() * textColor.length);
}

const hamburgerButton = document.querySelector('#check');
const html = document.querySelector('html');
hamburgerButton.addEventListener('click', open);

window.onLoad = open();

function open() {
    if (hamburgerButton.matches('#check:checked')) {
        html.classList.add('no-scroll');
    } else {
        html.classList.remove('no-scroll');
    }

}