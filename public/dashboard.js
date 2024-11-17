let QuizData = JSON.parse(localStorage.getItem("QuizData"));
let category = JSON.parse(localStorage.getItem("category"));

let QuizItems; 

if(QuizData != null){
    QuizItems = Object.keys(QuizData);
}

let arr = localStorage.arrayResult;
let arrayResult;

if(arr != undefined){
  arrayResult = JSON.parse(localStorage.arrayResult);
}

// Sidebar ------------------------------------------------------------------

let dashboard = document.querySelector(".dashboard");
let quizzes = document.querySelector(".quizzes");
let questions = document.querySelector(".questions");

let dashboardSection = document.getElementById("dashboardSection");
let quizSection = document.getElementById("quizSection");
let questionSection = document.getElementById("questionSection");

dashboardSection.addEventListener("click" , ()=>{

  dashboard.classList.remove("hidden"); 
  quizzes.classList.add("hidden");
  questions.classList.add("hidden");

});

quizSection.addEventListener("click" , ()=>{

  dashboard.classList.add("hidden"); 
  quizzes.classList.remove("hidden");
  questions.classList.add("hidden");

});

questionSection.addEventListener("click" , ()=>{

  dashboard.classList.add("hidden"); 
  quizzes.classList.add("hidden");
  questions.classList.remove("hidden");

});


/****************************** Statistiques ***********************************/

let totalQuiz = document.getElementById("totalQuiz");
let nbrParticipation  = document.getElementById("nbrParticipation");
let moyenneScore = document.getElementById("moyenneScore");

let totalScore = 0;


let totalParcticip;

if(arrayResult != undefined){
  totalParcticip = arrayResult.length;
}

let totalQ;

if(category != undefined){
  totalQ = category.length;
}

arrayResult.forEach(element => {
    totalScore += element.score;
});

let ScoreMoyenne = totalScore / totalParcticip;

totalQuiz.textContent = totalQ;
nbrParticipation.textContent = totalParcticip;
moyenneScore.textContent = Math.floor(ScoreMoyenne);

//console.log(ScoreMoyenne);


/** Display All Questions **/

let questiontable = document.getElementById("questiontable");

function DisplayQuestions(titre, type , ques , options , correctAnswer ){

  let tbody = `<tr class="hover:bg-[#253189]">

                <!-- titre -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer">
                      <div>
                        <p class="text-sm text-white">${titre}</p>
                      </div>
                    </div>
                  </td>

                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer">
                      <div>
                        <p class="text-sm text-white">${type}</p>
                      </div>
                    </div>
                  </td>

                  <!-- type -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer">
                      <div>
                        <p class="text-sm text-white">${ques}</p>
                      </div>
                    </div>
                  </td>

                  <!-- Question -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer">
                      <div>
                        <p class="text-sm text-white">${options}</p>
                      </div>
                    </div>
                  </td>


                  <!-- Options -->
                  <td class="p-4 text-sm text-white">
                    ${correctAnswer}
                  </td>

                  <!-- Action -->
                  <td class="p-4">
                    <div class="flex items-center gap-4">
                      <i class="fa fa-trash cursor-pointer text-yellow-500" style="font-size:23px"></i>
                      <i class="fa fa-edit cursor-pointer text-yellow-500" style="font-size:24px"></i>
                    </div>
                  </td>
              </tr>`

    return tbody;

}

// Users -------------------------------------------------------------------

function userTemplate(username , quizName , correct , incorrect , score){

  let tr = `<tr class="hover:bg-[#253189]">
                      <td class="p-4 text-sm text-white">
                        <div class="flex items-center cursor-pointer w-max">
                          <div>
                            <p class="text-sm text-white">${username}</p>
                          </div>
                        </div>
                      </td>


                      <td class="p-4 text-sm text-white">
                        <div class="flex items-center cursor-pointer w-max">
                          <div>
                            <p class="text-sm text-white">${quizName}</p>
                          </div>
                        </div>
                      </td>


                      <td class="p-4 text-sm text-green-500">
                        ${correct}
                      </td>


                      <td class="p-4 text-sm text-red-500">
                        ${incorrect}
                      </td>


                      <td class="p-4 text-sm text-white">
                        ${score}
                      </td>


                      <td class="p-4">
                        <div class="flex items-center gap-4">
                          <i class="fa fa-trash cursor-pointer text-yellow-500" style="font-size:23px"></i>
                          <i class="fa fa-edit cursor-pointer text-yellow-500" style="font-size:24px"></i>
                        </div>
                      </td>
          </tr>`


  return tr;

}


let userTable = document.getElementById("userTable");

arrayResult.forEach(element => {

      let tr = userTemplate(element.username , element.quizName , element.correct  , element.incorrect  , element.score);

      userTable.innerHTML += tr;

})




// end --------------------------------------------------------------------




for (let category in QuizData) {
  //console.log(`Catégorie: ${category}`);
  
  QuizData[category].forEach((questionObj, index) => {

      let tr = DisplayQuestions( category , questionObj.type , questionObj.question , questionObj.options , questionObj.correctAnswer)

      questiontable.innerHTML += tr; 
      // console.log(`Question ${index + 1}: ${questionObj.question}`);
      // console.log(`Option ${index + 1}: ${questionObj.options}`);


  });
}


// ************************************************************************// 
// *************************** Quiz Section *******************************// 
// ************************************************************************// 

let quiztable= document.getElementById("quiztable");
let quizValue = document.querySelectorAll(".quizValue");
let tittreQuiz = document.getElementById("titreQuiz");
let descriptionQuiz = document.getElementById("descriptionQuiz");
let nbrQuiz = document.getElementById("nbrQuiz");
let timeQuiz  = document.getElementById("timeQuiz");
let nvQuiz = document.getElementById("nvQuiz");
let ajoutBtn = document.getElementById("ajoutBtn");
let ajoutModalQuiz = document.getElementById("ajoutModalQuiz");
let close1 = document.getElementById("close1");
let ajoutQuizBtn = document.getElementById("ajoutQuizBtn");


function getContent(){

    let taille = category.length;
    taille++;
    let obj = {
        id:taille,
        niveux:nvQuiz.value,
        titre:tittreQuiz.value,
        description:descriptionQuiz.value,
        nbrQuestion:nbrQuiz.value,
        time:timeQuiz.value,
        statut:false 
    }

    return obj;
}


ajoutBtn.addEventListener("click" , ()=> {
    ajoutModalQuiz.style.display = "flex";

})
close1.addEventListener("click" , ()=> {
    ajoutModalQuiz.style.display = "none";
});


ajoutQuizBtn.addEventListener("click" , ()=> {

    let obj = getContent(); 
    
    category.push(obj); 

    ajoutModalQuiz.style.display = "none";
    localStorage.setItem("category" ,JSON.stringify(category));

    window.location.reload(); 

    alert("le quizze a ete ajouter avec succes");
    //console.log(category);
    

});

// Display Quizzes -----------------------------------------------------------

function TemplateTableQuiz(id , titre , niveux , time , question , status , des){

    let tbody = `<tr class="hover:bg-[#253189]">

                <!-- id -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${id}</p>
                      </div>
                    </div>
                  </td>

                  <!-- Titre -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${titre}</p>
                      </div>
                    </div>
                  </td>

                  <!-- Niveux -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${niveux}</p>
                      </div>
                    </div>
                  </td>


                  <!-- Time -->
                  <td class="p-4 text-sm text-white">
                    ${time} min
                  </td>


                    <!-- Nombre Question -->
                  <td class="p-4 text-sm text-white">
                  ${question}
                  </td>

                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center">
                    <input id="checkbox${id}" type="checkbox" class="hidden peer checkbox" value="${id}" ${status ? "" : "checked"}/>
                    <label for="checkbox${id}"
                      class="relative flex items-center justify-center p-1 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-6 h-6 cursor-pointer bg-green-500 border rounded overflow-hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-full fill-white" viewBox="0 0 520 520">
                        <path
                          d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
                          data-name="7-Check" data-original="#000000" />
                      </svg>
                    </label>
                  </div>
                  </td>

                  <!-- Description -->
                  <td class="p-4 text-sm text-white">
                    ${des}
                  </td>


                  <!-- Action -->
                  <td class="p-4">
                    <div class="flex items-center gap-4">
                      <i class="fa fa-trash cursor-pointer text-yellow-500" style="font-size:23px"></i>
                      <i class="fa fa-edit cursor-pointer text-yellow-500 modifie" style="font-size:24px" id="${id}"></i>
                    </div>
                  </td>
                </tr>`


    return tbody;


}

category.forEach(element => {
    quiztable.innerHTML += TemplateTableQuiz(element.id , element.titre , element.niveux , element.time , element.nbrQuestion ,element.status ,  element.description);
});

let checkbox = document.querySelectorAll(".checkbox");

checkbox.forEach(btn => {
  btn.addEventListener("click"  , (e) => {
    let value = e.target.value;

    category.forEach(elem => {
      if(elem.id == value){
        //console.log(btn.checked)
          if(btn.checked){
            elem.status = false;
            localStorage.category = JSON.stringify(category);
            //console.log(elem);
          }else{
            elem.status = true;
            localStorage.category = JSON.stringify(category);
            //console.log(elem);
          }
        
      }
    })

      // console.log(e.target.value);
      // console.log(btn.checked);
  });
});

// Modifie -----------------------------------------------------------------------


let tittreQuizm = document.getElementById("titreQuizm");
let descriptionQuizm = document.getElementById("descriptionQuizm");
let nbrQuizm = document.getElementById("nbrQuizm");
let timeQuizm  = document.getElementById("timeQuizm");
let nvQuizm = document.getElementById("nvQuizm");
let modifieModalQuiz = document.getElementById("modifieModalQuiz");
let closem = document.getElementById("closem");
let modifieQuizBtn = document.getElementById("modifieQuizBtn");

let modifie = document.querySelectorAll(".modifie");

function getModifieContent(){

  let obj = {
      niveux:nvQuizm.value,
      titre:tittreQuizm.value,
      description:descriptionQuizm.value,
      nbrQuestion:nbrQuizm.value,
      time:timeQuizm.value,
  }

  return obj;

}



let idm = null;

modifie.forEach(element => {

  element.addEventListener("click" , (e)=>{

    modifieModalQuiz.style.display = "flex";
    idm = e.target.id-1;
    let obj = category[idm];

    nvQuizm.value = obj.niveux
    tittreQuizm.value = obj.titre
    descriptionQuizm.value = obj.description
    nbrQuizm.value = obj.nbrQuestion
    timeQuizm.value = obj.time

  })

});


modifieQuizBtn.addEventListener("click" , () => {
  let modifiedContent = getModifieContent();
  category[idm] = modifiedContent;
  localStorage.category = JSON.stringify(category);  
  alert("Le Quizze a ete Modifie avec succes !");
  modifieModalQuiz.style.display = "none";

});



// ***************************************************************************** // 
// *************************** Questions Section ******************************* // 
// ***************************************************************************** // 


let ajoutModalQuestion = document.getElementById("ajoutModalQuestion");
let questionBtn = document.getElementById("questionBtn");
let close2 = document.getElementById("close2"); 
let ToggleMenu = document.getElementById('ToggleMenu');
let Menu = document.getElementById('Menu');
let selectOptions = document.getElementById("selectOptions");
let Ques = document.getElementById("Ques");
let optionQuestion = document.getElementById("optionQuestion");
let correctAnswerQuestion = document.getElementById("correctAnswerQuestion");
let explicationQuestion = document.getElementById("explicationQuestion");
let quizzesOptions = document.getElementById("quizzesOptions");
let ajoutQuestionBtn = document.getElementById("ajoutQuestionBtn");



questionBtn.addEventListener("click" , ()=> {
    ajoutModalQuestion.style.display = "flex";

    quizzesOptions.innerHTML = ""
    category.forEach(element => {

      quizzesOptions.innerHTML += `<option value="${element.titre}">${element.titre}</option>`

  });
});

close2.addEventListener("click" , ()=> {
    ajoutModalQuestion.style.display = "none";
});

  
// Display Questions -----------------------------------------------------------

selectOptions.addEventListener("change" , (e)=> {
  let textSection = document.getElementById("textSection");
  let input = `<input type="text" placeholder="La reponse..."
                class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:bg-transparent rounded-lg" id="correctAnswerQuestionn" />`

  console.log(e.target.value);
  if(e.target.value === "text"){


    document.getElementById("optionQuestionSection").style.display = "none";
    document.getElementById("bonneReponse").style.display = "none" ; 
    textSection.style.display = "";
    textSection.innerHTML = input; 

                
  }else{


    document.getElementById("optionQuestionSection").style.display = "";
    textSection.style.display = "none"; 
    document.getElementById("bonneReponse").style.display = "" ; 

  }
})

optionQuestion.addEventListener("change" , (e)=>{
  let opt = e.target.value.split(",");
  
  correctAnswerQuestion.innerHTML = ""
  opt.forEach((element , index) => {

    correctAnswerQuestion.innerHTML += `<option value="${index}">${element}</option>`

  });
  
});



function getContentQuestion(){

  let type = selectOptions.value;
  let question = Ques.value ;
  let options = optionQuestion.value.split(",");
  let correctAnswer = correctAnswerQuestion.value;
  let explanation = explicationQuestion.value;
  let quiz = quizzesOptions.value;
  
  if(type === "text"){
      let correctAnswerQuestionn = document.getElementById("correctAnswerQuestionn").value;
      let obj =  {  
        type: type,
        question: question,
        correctAnswer: correctAnswerQuestionn,
        explanation: explanation,
        quiz : quiz
      }

      return obj; 
    }else{

      let obj =  {  
        type: type,
        question: question,
        options: options,
        correctAnswer: correctAnswer,
        explanation: explanation,
        quiz : quiz
      }

      return obj; 

    }

}


// function handleClickMenu() {
//     if (Menu.className.includes('block')) {
//         Menu.classList.add('hidden');
//         Menu.classList.remove('block');
//     } else {
//         Menu.classList.add('block');
//         Menu.classList.remove('hidden');
//     }
// }

// ToggleMenu.addEventListener('click', handleClickMenu);

ajoutQuestionBtn.addEventListener("click" , ()=> {

  let obj = getContentQuestion();
  let title = obj.quiz.toLowerCase();

  if(QuizData[title] == undefined){

      QuizData[title] = [];
      QuizData[title].push(obj);
      localStorage.QuizData = JSON.stringify(QuizData);
      console.log(QuizData); 
      alert("ajouter");

  }else{
     QuizData[title].push(obj);

    localStorage.QuizData = JSON.stringify(QuizData);

    console.log(QuizData);
    alert("ajouter");
  }

});




