//grabbing elements
let catQA1 = document.getElementById("questionOne");
let catQA2 = document.getElementById("questionTwo");
let catQA3 = document.getElementById("questionThree");
let catQA4 = document.getElementById("questionFour");
let catQA5 = document.getElementById("questionFive");
let catQA6 = document.getElementById("questionSix");
let catQA7 = document.getElementById("questionSeven");
let catQA8 = document.getElementById("questionEight");

let slots = [catQA1, catQA2, catQA3, catQA4, catQA5, catQA6, catQA7, catQA8]

//fetching clues


function gameBoard(){
    for (let slot in slots){
        fetch('http://jservice.io/api/random', {mode: 'cors',})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        slots[slot].innerText = `${response[0].category.title}`
        console.log(response)

    });

    }
}
gameBoard();
