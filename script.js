const menu = document.querySelector('.menu');
const line = document.querySelectorAll('.line');

console.log(line)

menu.addEventListener("mouseover", function () {

    for (let elem of line) {
        elem.style.border = "2px solid Teal";
    }
});

menu.addEventListener('mouseout', function () {
    for (let elem of line) {
        elem.style.border = "2px solid black";
    }
})