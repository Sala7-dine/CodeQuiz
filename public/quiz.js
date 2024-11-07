// Response data-----------------------------------------------------------

let res = (id , reponse) => {
   let div = `<label class="z-50  btn">
            <input type="radio" name="reponse" class="hidden" onclick="selectResponse('response${id}')" />
            <div id="response${id}" class="px-8 py-4  rounded-lg cursor-pointer bg-gray-200">
                ${reponse}
            </div>
        </label>`

    
        return div;
}

let questionsParent = document.getElementById("questionsParent");
let Parentrsp = document.getElementById("Parentrsp");


javascript.forEach(question => {

    let ques = `<h1 class="font-sans text-[40px] text-wrap text-white text-center font-bold w-11/12 hidden tab">${question.question}</h1>`
   

    questionsParent.innerHTML += ques;

})





// Radio response button -------------------------------------------------

function selectResponse(selectedId) {
    // Réinitialise tous les div de réponse
    document.querySelectorAll('div[id^="response"]').forEach(div => {
        div.classList.remove('bg-blue-500', 'text-white');
        div.classList.add('bg-gray-200');
    });
    
    // Applique le style au div sélectionné
    document.getElementById(selectedId).classList.remove('bg-gray-200');
    document.getElementById(selectedId).classList.add('bg-blue-500', 'text-white');
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
  let len = javascript.length;
  ques.innerHTML = `${currentTab+1} / ${len}`;
  
  Parentrsp.innerHTML = "";
  
  if("options" in javascript[currentTab]){
    let taille = javascript[currentTab].options.length;
    for(let i=0; i< taille ; i++){
        let response = res(i+1 , javascript[currentTab].options[i]);   
      console.log(response);
      
      Parentrsp.innerHTML += response;
      
    } 
  }else{

    console.log(Parentrsp);
    Parentrsp.innerHTML = "<input type='text' placeholder='saisir votre reponse...'>"


  }


  
 
}


let progress = document.getElementById("progress");
var test = 100 / javascript.length;
var width = test;
progress.style.width = width + "%"
function nextPrev(n) {

  var x = document.getElementsByClassName("tab");
  
  if(n == 1 && currentTab < javascript.length - 1){
    width = width + test;
    progress.style.width = width + "%"
  }else if(n == -1){
    width = width - test;
    progress.style.width = width + "%"
  } 

  x[currentTab].style.display = "none";
 
  currentTab = currentTab + n;

  // if(currentTab >= javascript.length){
  //   window.location.href = "www.google.com";
  // }
  
  showTab(currentTab);
}


