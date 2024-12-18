const quizData = {
  javascript: [
      {  
        type: 'qcm',
        question: 'Quelle méthode JavaScript permet de filtrer les éléments d\'un tableau?',
        options: ['map()', 'filter()', 'reduce()', 'forEach()'],
        correctAnswer: 1,
        explanation: 'filter() crée un nouveau tableau avec les éléments qui passent le test.'
      },
      {
        type: 'boolean',
        question: 'JavaScript est un langage typé de manière statique?',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'JavaScript est faiblement typé et dynamique.'
      },
      {
        type: 'text',
        question: 'Quelle méthode permet d\'ajouter un élément à la fin d\'un tableau?',
        correctAnswer: ['push', 'push()', '.push', '.push()'],
        explanation: 'La méthode push() ajoute un ou plusieurs éléments à la fin d\'un tableau.'
      },
      {
        type: 'mcq',
        question: 'Quelle déclaration est correcte pour créer une fonction anonyme en JavaScript?',
        options: ['function() {}', '()=>{}', 'function {}', 'let f() {}'],
        correctAnswer: 1,
        explanation: 'La syntaxe ()=>{} est utilisée pour créer des fonctions fléchées, qui sont anonymes.'
      }
  ],

  html: [
      {
        id: 1,
        type: 'mcq',
        question: 'Quelle balise HTML est utilisée pour les titres de niveau supérieur?',
        options: ['head', 'header', 'h1', 'title'],
        correctAnswer: 2,
        explanation: 'La balise h1 est utilisée pour les titres de niveau supérieur.'
      },
      {
        id: 2,
        type: 'boolean',
        question: 'La balise br crée un saut de ligne en HTML.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'La balise br crée un saut de ligne sans interrompre le flux de texte.'
      },
      {
        id: 3,
        type: 'mcq',
        question: 'Quel attribut HTML est utilisé pour lier une feuille de style CSS?',
        options: ['rel', 'src', 'type', 'href'],
        correctAnswer: 3,
        explanation: 'href est l\'attribut qui spécifie le lien vers le fichier CSS.'
      },
      {
        id: 4,
        type: 'mcq',
        question: 'Quelle balise HTML est utilisée pour insérer une image?',
        options: ['image', 'img', 'picture', 'src'],
        correctAnswer: 1,
        explanation: 'img est la balise utilisée pour afficher une image.'
      }
  ],

  css: [
      {
        id: 1,
        type: 'mcq',
        question: 'Quelle propriété CSS contrôle la taille du texte?',
        options: ['font-size', 'text-size', 'font-weight', 'size'],
        correctAnswer: 0,
        explanation: 'font-size est utilisée pour spécifier la taille de la police.'
      },
      {
        id: 2,
        type: 'boolean',
        question: 'La propriété "color" change la couleur d\'arrière-plan en CSS.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 1,
        explanation: 'La propriété background-color modifie l’arrière-plan, tandis que color change la couleur du texte.'
      },
      {
        id: 3,
        type: 'mcq',
        question: 'Quelle valeur de positionnement permet de fixer un élément en haut de la page?',
        options: ['static', 'absolute', 'fixed', 'relative'],
        correctAnswer: 2,
        explanation: 'fixed fixe l\'élément en position par rapport à la fenêtre du navigateur.'
      },
      {
        id: 4,
        type: 'text',
        question: 'Quelle propriété est utilisée pour ajouter de l’espace à l’intérieur d’un élément?',
        correctAnswer: ['padding'],
        explanation: 'padding ajoute de l\'espace à l\'intérieur d\'un élément, entre son contenu et sa bordure.'
      }
  ],

  python: [
      {
        id: 1,
        type: 'mcq',
        question: 'Quel mot-clé est utilisé pour définir une fonction en Python?',
        options: ['function', 'def', 'func', 'define'],
        correctAnswer: 1,
        explanation: 'def est utilisé pour définir une fonction en Python.'
      },
      {
        id: 2,
        type: 'boolean',
        question: 'Python est sensible à la casse.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'Python distingue les majuscules des minuscules.'
      },
      {
        id: 3,
        type: 'mcq',
        question: 'Quelle méthode est utilisée pour lire les entrées utilisateur en Python 3?',
        options: ['scan()', 'input()', 'read()', 'get()'],
        correctAnswer: 1,
        explanation: 'input() est utilisé pour lire les entrées utilisateur en Python 3.'
      },
      {
        id: 4,
        type: 'text',
        question: 'Quel mot-clé est utilisé pour gérer les exceptions en Python?',
        correctAnswer: ['try', 'try-except'],
        explanation: 'try est utilisé avec except pour gérer les exceptions en Python.'
      }
  ],

  java: [
      {
        id: 1,
        type: 'mcq',
        question: 'Quel est le mot-clé pour créer un nouvel objet en Java?',
        options: ['class', 'new', 'instance', 'object'],
        correctAnswer: 1,
        explanation: 'Le mot-clé new est utilisé pour instancier un objet.'
      },
      {
        id: 2,
        type: 'boolean',
        question: 'Java est un langage de programmation orienté objet.',
        options: ['Vrai', 'Faux'],
        correctAnswer: 0,
        explanation: 'Java est un langage orienté objet avec concepts comme héritage et encapsulation.'
      },
      {
        id: 3,
        type: 'mcq',
        question: 'Quelle est la méthode principale par laquelle un programme Java démarre?',
        options: ['init()', 'start()', 'main()', 'run()'],
        correctAnswer: 2,
        explanation: 'main() est la méthode d\'entrée d\'un programme Java.'
      },
      {
        id: 4,
        type: 'text',
        question: 'Quel mot-clé est utilisé pour hériter d’une classe en Java?',
        correctAnswer: ['extends'],
        explanation: 'extends est utilisé pour l\'héritage en Java.'
      }
  ]

  
};

let QuizData;

if(localStorage.QuizData != undefined){
  QuizData = JSON.parse(localStorage.QuizData); 
}else{
  localStorage.QuizData = JSON.stringify(quizData); 
  QuizData = quizData;
}

let username = localStorage.username;

let arr = localStorage.arrayResult;
let arrayResult = []; 

if(arr != undefined){
  arrayResult = JSON.parse(localStorage.arrayResult);
}

console.log(arrayResult);

let savedValue = localStorage.getItem("clickedCard").toLocaleLowerCase();
let nextBtn = document.getElementById("nextBtn");
let modal = document.getElementById("modal");
let score = document.getElementById("score");
let counter = 0;
let valueSelected = QuizData[savedValue];

let resultQuize = document.getElementById("resultQuize");

let NumberOfCorrectAnswers = 0;
let NumberOfInCorrectAnswers = 0;

Quizze(valueSelected);

function Quizze(value){

  resultQuize.style.display = "none";
  // Response data-----------------------------------------------------------
let res = (id , reponse) => {
  
  let div = `<label class="z-50 max-md:w-28 btn">
           <input type="radio" name="reponse" class="hidden responseInput" onclick="selectResponse('response${id}' , ${id})" />
           <div id="response${id}" class="px-8 py-4 max-md:px-6 max-md:py-4 max-md:text-[12px] text-center rounded-lg cursor-pointer bg-gray-200">
               ${reponse}
           </div>
       </label>`
      return div;
}

let questionsParent = document.getElementById("questionsParent");
let Parentrsp = document.getElementById("Parentrsp");

//console.log( "this is value" , value);

value.forEach(question => {

   let ques = `<h1 class="font-sans text-[40px] max-md:text-[25px] text-wrap text-white text-center font-bold w-11/12 hidden tab">${question.question}</h1>`

   questionsParent.innerHTML += ques;

})

// Templates --------------------------------------------------------------

function multiOption(question , rep1 , rep2 , rep3 , rep4  , correct , color , selected = null){

  
  if(selected != null){
    console.log(selected);
    let div = `<div class="bg-[#161e6bbc] flex flex-col gap-6 border-2 border-red-500 text-white max-sm:px-8 px-12 py-8 w-8/12 rounded">
    <h2 class="text-2xl font-bold"> ${question}</h2>
    <div class="font-[sans-serif] space-y-6">

      <div class=" ${(correct == rep1) ? "bg-" + color + "-500 " + "text-white" : (selected == rep1) ? 'bg-red-500 text-white' : 'bg-gray-100 text-black'} p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep1}</span>
      </div>

      <div class=" ${(correct == rep2) ? "bg-" + color + "-500 " + "text-white" : (selected == rep2) ? 'bg-red-500 text-white' : 'bg-gray-100 text-black'} p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep2}</span>
      </div>

      <div class="${rep3 == undefined ? 'hidden' : ''} ${(correct == rep3) ? "bg-" + color + "-500 " + "text-white" : (selected == rep3) ? 'bg-red-500 text-white' : 'bg-gray-100 text-black'} p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep3}</span>
      </div>

      <div class="${rep4 == undefined ? 'hidden' : ''} ${(correct == rep4) ? "bg-" + color + "-500 " + "text-white" : (selected == rep4) ? 'bg-red-500 text-white' : 'bg-gray-100 text-black'} p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep4}</span>
      </div>

    </div>
  </div>`

  return div

  }else{
    let div = `<div class="bg-[#161e6bbc] flex flex-col gap-6 border-2 border-${color}-500 text-white max-sm:px-8 px-12 py-8 w-8/12 rounded">
          <h2 class="text-2xl font-bold max-md:text-[16px]">${question}</h2>
          <div class="font-[sans-serif] space-y-6">

            <div class="${correct == rep1 ? "bg-" + color + "-500 " + "text-white" : 'bg-gray-100 text-black'} p-4 rounded-lg" >
              <span class="block text-sm sm:inline max-sm:mt-2">${rep1}</span>
            </div>
      
            <div class="${correct == rep2 ? "bg-" + color + "-500 " + "text-white" : 'bg-gray-100 text-black'} p-4 rounded-lg" >
              <span class="block text-sm sm:inline max-sm:mt-2">${rep2}</span>
            </div>

            <div class="${rep3 == undefined ? 'hidden' : ''} ${correct == rep3 ? "bg-" + color + "-500 " + "text-white" : 'bg-gray-100 text-black'} p-4 rounded-lg" >
              <span class="block text-sm sm:inline max-sm:mt-2">${rep3}</span>
            </div>
      
            <div class="${rep4 == undefined ? 'hidden' : ''} ${correct == rep4 ? "bg-" + color + "-500 " + "text-white" : 'bg-gray-100 text-black'} p-4 rounded-lg" >
              <span class="block text-sm sm:inline max-sm:mt-2">${rep4}</span>
            </div>
          </div>
        </div>`

        return div
  }

}

function inputTextCorrect(question , rep1){

    let div = `<div class="bg-[#161e6bbc] flex flex-col gap-6 border-2 border-green-500 text-white max-sm:px-8 px-12 py-8 w-8/12 rounded">
    <h2 class="text-2xl font-bold max-md:text-[16px]">${question}</h2>
    <div class="font-[sans-serif] space-y-6">

      <div class="bg-green-500 text-white p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep1}</span>
      </div>
    
    </div>
  </div>`

  return div
}

function inputTextInCorrect(question , rep1 , correct){

    let div = `<div class="bg-[#161e6bbc] flex flex-col gap-6 border-2 border-red-500 text-white max-sm:px-8 px-12 py-8 w-8/12 rounded">
    <h2 class="text-2xl font-bold max-md:text-[16px]">${question}</h2>
    <div class="font-[sans-serif] space-y-6">

      <div class="bg-green-500 text-white p-4 rounded-lg">
        <span class="block text-sm sm:inline max-sm:mt-2">${correct}</span>
      </div>
    
      <div class="bg-red-500 text-white p-4 rounded-lg" >
        <span class="block text-sm sm:inline max-sm:mt-2">${rep1}</span>
      </div>
    
    </div>
  </div>`

  return div
}

function getResult(username , quizName , correct , incorrect , score){
    
    let obj = {
      username : username ,
      quizName : quizName ,
      correct : correct ,
      incorrect: incorrect ,
      score : score 
    }
    return obj;
}

// Radio response button -------------------------------------------------

window.selectResponse = function (selectedId , id) {
  nextBtn.style.visibility = "visible";

  // if(currentTab == value.length - 1){
  //   resultQuize.style.display = "flex";

  //   setTimeout(function () {
  //     scrollTo({
  //       top: 800, 
  //       left: 0,  
  //       behavior: 'smooth' 
  //     });
  //   }, 1500);



  //   console.log();

  // }

  if(--id == value[currentTab].correctAnswer){
  
    let responseInput = document.querySelectorAll(".responseInput");
    document.querySelectorAll('div[id^="response"]').forEach(div => {
        div.classList.remove('bg-green-500', 'text-white');
        div.classList.add('bg-gray-500');
    });

        
    document.getElementById(selectedId).classList.remove('bg-gray-200');
    document.getElementById(selectedId).classList.add('bg-green-500', 'text-white');


    responseInput.forEach(input => {
      input.disabled = true;
    });

    counter += 100;
    score.innerHTML = counter;

    NumberOfCorrectAnswers += 1;

    let queestion = value[currentTab].question;
    let rep1 = value[currentTab].options[0];
    let rep2 = value[currentTab].options[1];
    let rep3 = value[currentTab].options[2];
    let rep4 = value[currentTab].options[3];
    let correct = value[currentTab].options[id];
    let color = 'green';

    let div = multiOption(queestion , rep1 , rep2 , rep3 , rep4 , correct , color);

    resultQuize.innerHTML += div;

  
  } else {
    let responseInput = document.querySelectorAll(".responseInput");
    document.querySelectorAll('div[id^="response"]').forEach(div => {
      div.classList.remove('bg-green-500', 'text-white');
      div.classList.add('bg-gray-500');
      });

    responseInput.forEach(input => {
      input.disabled = true;
    })

    NumberOfInCorrectAnswers += 1;    
  
  document.getElementById(selectedId).classList.remove('bg-gray-200');
  document.getElementById(selectedId).classList.add('bg-red-500', 'text-white');

  let queestion = value[currentTab].question;
    let rep1 = value[currentTab].options[0];
    let rep2 = value[currentTab].options[1];
    let rep3 = value[currentTab].options[2];
    let rep4 = value[currentTab].options[3];
    let selected = value[currentTab].options[id];
    let a = value[currentTab].correctAnswer; 
    let correct = value[currentTab].options[a];
    let color = 'green';

    let div = multiOption(queestion , rep1 , rep2 , rep3 , rep4 , correct , color , selected);
    resultQuize.innerHTML += div;


  // modal ----------------------------------------
  // modal ----------------------------------------

  let explication = document.getElementById("explication");
  explication.innerHTML = value[currentTab].explanation;

    setTimeout(function () {
      modal.style.display = "flex";
    }, 400);

    setTimeout(function () {
        modal.style.display = "none";
    }, 10000);
  
    document.querySelector(".close").onclick = function () {
        document.getElementById("modal").style.display = "none";
    };

    window.onclick = function (event) {
        let modal = document.getElementById("modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

  // end modal ----------------------------------------------
  // end modal ----------------------------------------------
  
  }



let titleQuize = document.getElementById("titleQuize");
let scoreQuiz = document.getElementById("scoreQuiz");
let percentageQuize = document.getElementById("percentageQuize");
let correctQuiz = document.getElementById("correctQuiz");
let incorrectQuiz = document.getElementById("incorrectQuiz");

  // console.log("title : ",savedValue); // title
  // console.log("score : ", counter); // score
  // console.log("correct answer : ", NumberOfCorrectAnswers); // correct answer
  // console.log("in correct answer : ", NumberOfInCorrectAnswers); // incorrect answer
  // console.log("total question :  " , value.length);

  let accuracy = Math.floor((NumberOfCorrectAnswers/value.length) * 100);
  titleQuize.innerHTML = savedValue;
  scoreQuiz.innerHTML = counter;
  percentageQuize.innerHTML = accuracy;
  correctQuiz.innerHTML = NumberOfCorrectAnswers;
  incorrectQuiz.innerHTML = NumberOfInCorrectAnswers; 



  
  if(currentTab == value.length - 1){
    resultQuize.style.display = "flex";

    setTimeout(function () {
      scrollTo({
        top: 800, 
        left: 0,  
        behavior: 'smooth' 
      });
    }, 1500);


    let objectResult = getResult(username , savedValue , NumberOfCorrectAnswers , NumberOfInCorrectAnswers , counter);
    console.log(objectResult);

    arrayResult.push(objectResult);
    localStorage.arrayResult = JSON.stringify(arrayResult);
  }


}

// Radio response button -------------------------------------------------

window.textInput = function (){

  nextBtn.style.visibility = "visible";
  console.log("here input text");
  let selectInput = document.getElementById("selectInput");
  let textBtn = document.getElementById("textBtn");

  let result = selectInput.value;  
 
  if(value[currentTab].correctAnswer.includes(result)){
    selectInput.disabled = true;
    textBtn.disabled = true;
    selectInput.style.backgroundColor = "green";
    textBtn.style.backgroundColor = "green";
    counter += 100;
    score.innerHTML = counter;

    let queestion = value[currentTab].question;

    NumberOfCorrectAnswers += 1;

    let div = inputTextCorrect(queestion , result);

    resultQuize.innerHTML += div;

  }else{
    selectInput.disabled = true;
    textBtn.disabled = true;
    selectInput.style.backgroundColor = "red";
    textBtn.style.backgroundColor = "red";

    NumberOfInCorrectAnswers += 1;


  // modal ----------------------------------------

  let explication = document.getElementById("explication");
  explication.innerHTML = value[currentTab].explanation;

    setTimeout(function () {
      modal.style.display = "flex";
    }, 400);

    setTimeout(function () {
        modal.style.display = "none";
    }, 10000);
  
    document.querySelector(".close").onclick = function () {
        document.getElementById("modal").style.display = "none";
    };

    window.onclick = function (event) {
        let modal = document.getElementById("modal");
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };


    let correct = value[currentTab].correctAnswer[0];
    let queestion = value[currentTab].question;

    let div = inputTextInCorrect(queestion , result , correct);

    resultQuize.innerHTML += div;

  // end modal ----------------------------------------------
  }


  if(currentTab == value.length - 1){
    resultQuize.style.display = "flex";

    setTimeout(function () {
      scrollTo({
        top: 800, 
        left: 0,  
        behavior: 'smooth' 
      });
    }, 1500);


    console.log('haaada rah lakher dyal lakher 2222');


    let titleQuize = document.getElementById("titleQuize");
    let scoreQuiz = document.getElementById("scoreQuiz");
    let percentageQuize = document.getElementById("percentageQuize");
    let correctQuiz = document.getElementById("correctQuiz");
    let incorrectQuiz = document.getElementById("incorrectQuiz");
    
      // console.log("title : ",savedValue); // title
      // console.log("score : ", counter); // score
      // console.log("correct answer : ", NumberOfCorrectAnswers); // correct answer
      // console.log("in correct answer : ", NumberOfInCorrectAnswers); // incorrect answer
      // console.log("total question :  " , value.length);
    
      let accuracy = Math.floor((NumberOfCorrectAnswers/value.length) * 100);
      titleQuize.innerHTML = savedValue;
      scoreQuiz.innerHTML = counter;
      percentageQuize.innerHTML = accuracy;
      correctQuiz.innerHTML = NumberOfCorrectAnswers;
      incorrectQuiz.innerHTML = NumberOfInCorrectAnswers; 


      let objectResult = getResult(username , savedValue , NumberOfCorrectAnswers , NumberOfInCorrectAnswers , counter);
      console.log(objectResult);
  
      arrayResult.push(objectResult);
      localStorage.arrayResult = JSON.stringify(arrayResult);

  }

 
}


// Timer -------------------------------------------------------------

let timeLeft = 300; 
const timerInterval = setInterval(() => {
 if (timeLeft <= 0) {
   clearInterval(timerInterval);
   timerElement.textContent = "Temps écoulé!";
 } else {
   const minutes = Math.floor(timeLeft / 60); 
   const seconds = timeLeft % 60; 
   timerElement.textContent = `${minutes} min ${seconds} s`;
   timeLeft--;
 }
}, 1000);


// Applt multiple step ---------------------------------------------------

var currentTab = 0; 

showTab(currentTab);

function showTab(n) {
  nextBtn.style.visibility = "hidden";
 var x = document.getElementsByClassName("tab");
 x[n].style.display = "block";

 if (n == 0) {
   document.getElementById("prevBtn").style.visibility = "hidden";
 } else {
   document.getElementById("prevBtn").style.visibility = "";
 }

 let ques = document.getElementById("ques");
 let len = value.length;
 ques.innerHTML = `${currentTab+1} / ${len}`;
 
 Parentrsp.innerHTML = "";
 
 if("options" in value[currentTab]){
   let taille = value[currentTab].options.length;
   for(let i=0; i< taille ; i++){
      let response = res(i+1 , value[currentTab].options[i]);

     Parentrsp.innerHTML += response;
   } 
 }else{

   Parentrsp.innerHTML = `<div class="font-[sans-serif] max-w-md mx-auto">
  <input type="text" placeholder="Saisir votre reponse..." id="selectInput"
    class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />

  <button type="button" onclick='textInput()' id="textBtn"
    class="!mt-2 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
  </div>`

 }



}

let progress = document.getElementById("progress");
var test = 100 / value.length;
var width = test;
progress.style.width = width + "%"


window.nextPrev = function (n) {

 var x = document.getElementsByClassName("tab");
 
 if(n == 1 && currentTab < value.length - 1){
   width = width + test;
   progress.style.width = width + "%"

   x[currentTab].style.display = "none";
   
   currentTab = currentTab + n;

   showTab(currentTab); 
 }else if(n == -1 && currentTab > 0){
   width = width - test;
   progress.style.width = width + "%"
   
   x[currentTab].style.display = "none";

   currentTab = currentTab + n;
   showTab(currentTab); 
  
 } 
}


  
}

