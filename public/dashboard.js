
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


let QuizData = JSON.parse(localStorage.getItem("QuizData"));
let category = JSON.parse(localStorage.getItem("category"));

let QuizItems = Object.keys(QuizData); 


function getContent(){

    let taille = category.length;
    taille++;
    let obj = {
        id:taille,
        niveux:nvQuiz.value,
        titre:tittreQuiz.value,
        description:descriptionQuiz.value,
        nbrQuestion:nbrQuiz.value,
        time:timeQuiz.value
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

function TemplateTableQuiz(id , titre , niveux , time , question , des){

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

                  <!-- Description -->
                  <td class="p-4 text-sm text-white">
                    ${des}
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

category.forEach(element => {
    quiztable.innerHTML += TemplateTableQuiz(element.id , element.titre , element.niveux , element.time , element.nbrQuestion , element.description);
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


// Display Quizzes -----------------------------------------------------------

function TemplateTableQuesiotn(titre , type , question , options , correctAnswer , explanation){

    let tbody = `<tr class="hover:bg-[#253189]">

                <!-- titre -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${titre}</p>
                      </div>
                    </div>
                  </td>

                  <!-- type -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${type}</p>
                      </div>
                    </div>
                  </td>

                  <!-- Question -->
                  <td class="p-4 text-sm text-white">
                    <div class="flex items-center cursor-pointer w-max">
                      <div>
                        <p class="text-sm text-white">${question}</p>
                      </div>
                    </div>
                  </td>


                  <!-- Options -->
                  <td class="p-4 text-sm text-white">
                    ${options} min
                  </td>


                    <!-- correct Answer -->
                  <td class="p-4 text-sm text-white">
                  ${correctAnswer}
                  </td>

                  <!-- Explication -->
                  <td class="p-4 text-sm text-white">
                    ${explanation}
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
  opt.forEach(element => {

    correctAnswerQuestion.innerHTML += `<option value="${element}">${element}</option>`

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

 


})



