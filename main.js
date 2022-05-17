//grabbing elements
let catQA1 = document.getElementById("questionOne");
let catQA2 = document.getElementById("questionTwo");
let catQA3 = document.getElementById("questionThree");
let catQA4 = document.getElementById("questionFour");
let catQA5 = document.getElementById("questionFive");
let catQA6 = document.getElementById("questionSix");
let catQA7 = document.getElementById("questionSeven");
let catQA8 = document.getElementById("questionEight");
let catQA9 = document.getElementById("questionNine");
let catQA10 = document.getElementById("questionTen");
let catQA11 = document.getElementById("questionEleven");
let catQA12 = document.getElementById("questionTwelve");
let catQA13 = document.getElementById("questionThirteen");
let catQA14 = document.getElementById("questionFourteen");
let catQA15 = document.getElementById("questionFifteen");
let catQA16 = document.getElementById("questionSixteen");

let reveal1 = document.getElementById("reveal1");
let reveal2 = document.getElementById("reveal2");
let reveal3 = document.getElementById("reveal3");
let reveal4 = document.getElementById("reveal4");
let reveal5 = document.getElementById("reveal5");
let reveal6 = document.getElementById("reveal6");
let reveal7 = document.getElementById("reveal7");
let reveal8 = document.getElementById("reveal8");
let reveal9 = document.getElementById("reveal9");
let reveal10 = document.getElementById("reveal10");
let reveal11 = document.getElementById("reveal11");
let reveal12 = document.getElementById("reveal12");
let reveal13 = document.getElementById("reveal13");
let reveal14 = document.getElementById("reveal14");
let reveal15 = document.getElementById("reveal15");
let reveal16 = document.getElementById("reveal16");


let reveals = [reveal1, reveal2, reveal3, reveal4, reveal5, reveal6, reveal7, reveal8, reveal9, reveal10, reveal11, reveal12, reveal13, reveal14, reveal15, reveal16]
let slots = [catQA1, catQA2, catQA3, catQA4, catQA5, catQA6, catQA7, catQA8, catQA9, catQA10, catQA11, catQA12, catQA13, catQA14, catQA15, catQA16]
let question = {};
let answer = {};

//fetching clues

function gameBoard(){
    for (let slot in slots){
        fetch('https://jservice.io/api/random', {mode: 'cors',})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
        reveals[slot].style.display = "none";
        slots[slot].innerText = `${response[0].category.title}`
        question[slot] = response[0].question;
        answer[slot] = response[0].answer;
        slots[slot].addEventListener('click', event =>{
            slots[slot].innerText = `${response[0].question}`

            reveals[slot].style.display = "grid";
            reveals[slot].addEventListener('click', event =>{
                reveals[slot].innerText = `${response[0].answer}`

            })

        })

    });

    }
}

//addEventListener for Selection


gameBoard();

let gibsonName = document.getElementById("gib");
let williamsName = document.getElementById("wil");
let gilikinName = document.getElementById("gil");
let gibsons = document.getElementById("gibsPoints");
let williams = document.getElementById("wilPoints");
let gilikin = document.getElementById("gilPoints");
let currentPoints = 'gibsons';
let gibsonPoints = 0;
let williamsPoints = 0;
let gilikinPoints = 0;
let questionPoints = 3;


function gamePlay(){
    let correct = document.getElementById("correct");
    let incorrect = document.getElementById("incorrect");
    let pass = document.getElementById("pass");
    correct.addEventListener('click', event =>{
        if(currentPoints == 'gibsons'){
            gibsonPoints += questionPoints
            gibsons.innerText =  `${gibsonPoints}`
            currentPoints = 'williams';
            gibsonName.style.textDecoration = "none";
            williamsName.style.textDecoration = "underline";

        }
        else if(currentPoints == 'williams'){
            williamsPoints += questionPoints
            williams.innerText =  `${williamsPoints}`
            currentPoints ='gilikin';
            williamsName.style.textDecoration = "none";
            gilikinName.style.textDecoration = "underline";

        }
        else{
            gilikinPoints += questionPoints
            gilikin.innerText =  `${gilikinPoints}`
            currentPoints = 'gibsons';
            gilikinName.style.textDecoration = "none";
            gibsonName.style.textDecoration = "underline";

        }


    })
    incorrect.addEventListener('click', event =>{
        if(currentPoints == 'gibsons'){
            gibsonPoints -= questionPoints
            gibsons.innerText =  `${gibsonPoints}`
            currentPoints = 'williams';
            gibsonName.style.textDecoration = "none";
            williamsName.style.textDecoration = "underline";
        }
        else if(currentPoints == 'williams'){
            williamsPoints -= questionPoints
            williams.innerText =  `${williamsPoints}`
            currentPoints ='gilikin';
            williamsName.style.textDecoration = "none";
            gilikinName.style.textDecoration = "underline";

        }
        else{
            gilikinPoints -= questionPoints
            gilikin.innerText =  `${gilikinPoints}`
            currentPoints = 'gibsons';
            gilikinName.style.textDecoration = "none";
            gibsonName.style.textDecoration = "underline";

        }


    })
    pass.addEventListener('click', event =>{
        if(currentPoints == 'gibsons'){
            currentPoints = 'williams';
            gibsonName.style.textDecoration = "none";
            williamsName.style.textDecoration = "underline";
        }
        else if(currentPoints == 'williams'){
            currentPoints ='gilikin';
            williamsName.style.textDecoration = "none";
            gilikinName.style.textDecoration = "underline";

        }
        else{
            currentPoints = 'gibsons';
            gilikinName.style.textDecoration = "none";
            gibsonName.style.textDecoration = "underline";

        }


    })
    
}

let double = document.getElementById("double");

double.addEventListener("click", event=>{
    questionPoints = 6;
    gameBoard()
})

gamePlay()



