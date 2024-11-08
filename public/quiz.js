let savedValue = localStorage.getItem("clickedCard").toLocaleLowerCase();

let valueSelected = QuizData[savedValue];

Quizze(valueSelected);

function Quizze(value){

  // Response data-----------------------------------------------------------
let res = (id , reponse) => {
  let div = `<label class="z-50 btn">
           <input type="radio" name="reponse" class="hidden" onclick="selectResponse('response${id}' , ${id})" />
           <div id="response${id}" class="px-8 py-4  rounded-lg cursor-pointer bg-gray-200">
               ${reponse}
           </div>
       </label>`
      return div;
}

let questionsParent = document.getElementById("questionsParent");
let Parentrsp = document.getElementById("Parentrsp");

//console.log( "this is value" , value);

value.forEach(question => {

   let ques = `<h1 class="font-sans text-[40px] text-wrap text-white text-center font-bold w-11/12 hidden tab">${question.question}</h1>`

   questionsParent.innerHTML += ques;

})


// Radio response button -------------------------------------------------

window.selectResponse = function (selectedId , id) {
   
   document.querySelectorAll('div[id^="response"]').forEach(div => {
       div.classList.remove('bg-blue-500', 'text-white');
       div.classList.add('bg-gray-200');
   });


   //console.log(id);


   correctAnswers(id);
  //  value.forEach(res => {

  //  })
   
   document.getElementById(selectedId).classList.remove('bg-gray-200');
   document.getElementById(selectedId).classList.add('bg-blue-500', 'text-white');

}

// Correct Answers ----------------------------------------------------

function correctAnswers(id){  

  

  console.log(value[currentTab].type);

//   document.querySelectorAll('div[id^="response"]').forEach(div => {
//     div.classList.remove('bg-blue-500', 'text-white');
//     div.classList.add('bg-gray-200');
// });

// document.getElementById(selectedId).classList.remove('bg-gray-200');
// document.getElementById(selectedId).classList.add('bg-blue-500', 'text-white');

  //console.log(value[0].type);
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
     //console.log(response);
     
     Parentrsp.innerHTML += response;


     
   } 
 }else{

   //console.log(Parentrsp);
   Parentrsp.innerHTML = `<div class="font-[sans-serif] max-w-md mx-auto">
  <input type="text" placeholder="Saisir votre reponse..."
    class="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />

  <button type="button"
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


 // if(currentTab >= value.length){
 //   window.location.href = "www.google.com";
 // }
 
}
  
}

Quizze(valueSelected);