// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

var btn1 = document.querySelector(".btn-toggle-menu");
var nav = document.querySelector(".nav-menu");

btn1.addEventListener('click',function () {
    nav.classList.toggle('nav-menu-hidden');
})



/* TASK 2 -- Select/Deslect an Icon */

var listIcons = document.querySelectorAll(".wish-list div");

listIcons.forEach(function (item) {
	item.addEventListener("click", function (event) {
		btn2 = event.currentTarget;
		btn2.classList.toggle("selected");
	})
})


/* TASK 3 -- Increase total number*/

var numbers = document.querySelectorAll(".point");
var total = document.querySelector(".total-points");
numbers.forEach(function (item) {
	item.addEventListener("click", function (event) {
		var result = parseInt(total.textContent);
		var number = parseInt(event.target.textContent);
		result = result + number;
		total.textContent = result;
	})
})

/* TASK 4 (Adventure Mode)-- Move Item List to List */

var parentGood = document.querySelector('.good-standing-list');
var parentProbation = document.querySelector('.probation-list');
var listGood = document.querySelectorAll('.good-standing-list');
var listProbation = document.querySelectorAll('.probation-list');

listGood.forEach(function (item) {
    item.addEventListener('click',function (e) {
        parentGood.removeChild(e.target);
        parentProbation.appendChild(e.target);
    })
})

listProbation.forEach(function (item) {
    item.addEventListener('click', function (e) {
        parentProbation.removeChild(e.target);
        parentGood.appendChild(e.target);
    })
})



/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */

var colors = document.querySelectorAll('.palette span');
var para = document.querySelector('.msg');

colors.forEach(function (item) {
    item.addEventListener('click', function (e) {
        para.className = "msg "+ e.target.className;
    })
})


/*var cuadro = document.querySelector(".msg")
var styleDefault = window.getComputedStyle(cuadro);
console.log(styleDefault);*/
