const data = [
  {
      id: 1,
      niveux: "facile",
      titre: "JavaScript",
      description: "Un quiz pour tester vos bases en JavaScript, des variables aux boucles.",
      nbrQuestion: 5,
      time: 3 , 
      status: false 
  },
  {
      id: 2,
      niveux: "moyenne",
      titre: "HTML",
      description: "Découvrez votre niveau en HTML en répondant à des questions de difficulté moyenne.",
      nbrQuestion: 7,
      time: 5 , 
      status: false 
  },
  {
      id: 3,
      niveux: "facile",
      titre: "CSS",
      description: "Connaissez-vous les bases du CSS ? Vérifiez-le avec ce quiz simple.",
      nbrQuestion: 6,
      time: 2 , 
      status: false 
  },
  {
      id: 4,
      niveux: "difficile",
      titre: "Python",
      description: "Un challenge en Python pour les développeurs expérimentés !",
      nbrQuestion: 10,
      time: 8 , 
      status: false 
  },
  {
      id: 5,
      niveux: "moyenne",
      titre: "Java",
      description: "Testez vos compétences en Java avec des questions intermédiaires.",
      nbrQuestion: 6,
      time: 6 , 
      status: false 
  },
  {
      id: 6,
      niveux: "facile",
      titre: "React",
      description: "Découverte des concepts de base du framework React.",
      nbrQuestion: 5,
      time: 4 , 
      status: false 
  },
  {
      id: 7,
      niveux: "difficile",
      titre: "Node.js",
      description: "Un quiz avancé pour les experts en développement backend.",
      nbrQuestion: 8,
      time: 10 , 
      status: false 
  },
  {
      id: 8,
      niveux: "facile",
      titre: "SQL",
      description: "Maîtrisez les requêtes de base avec ce quiz sur SQL.",
      nbrQuestion: 4,
      time: 3 , 
      status: false 
  },
  {
      id: 9,
      niveux: "moyenne",
      titre: "PHP",
      description: "Mettez vos connaissances PHP à l’épreuve avec des questions variées.",
      nbrQuestion: 7,
      time: 6 , 
      status: false 
  },
  {
      id: 10,
      niveux: "difficile",
      titre: "Git",
      description: "Vérifiez votre maîtrise de Git et des commandes avancées.",
      nbrQuestion: 9,
      time: 8 , 
      status: false 
  },
  {
      id: 11,
      niveux: "facile",
      titre: "JSON",
      description: "Apprenez les bases du format JSON avec des questions simples.",
      nbrQuestion: 3,
      time: 2 , 
      status: false 
  },
  {
      id: 12,
      niveux: "moyenne",
      titre: "MongoDB",
      description: "Testez vos connaissances intermédiaires en bases de données NoSQL.",
      nbrQuestion: 7,
      time: 5 , 
      status: false 
  },
  {
      id: 13,
      niveux: "facile",
      titre: "Vue.js",
      description: "Apprenez les bases de Vue.js avec des questions pour débutants.",
      nbrQuestion: 4,
      time: 3 , 
      status: false 
  },
  {
      id: 14,
      niveux: "difficile",
      titre: "Typescript",
      description: "Un quiz pour les développeurs avancés en TypeScript.",
      nbrQuestion: 10,
      time: 9 , 
      status: false 
  },
  {
      id: 15,
      niveux: "moyenne",
      titre: "C++",
      description: "Testez vos compétences en programmation orientée objet avec le C++.",
      nbrQuestion: 6,
      time: 7 , 
      status: false 
  },
  {
      id: 16,
      niveux: "facile",
      titre: "Bootstrap",
      description: "Découvrez les bases de Bootstrap pour le design responsive.",
      nbrQuestion: 5,
      time: 3 , 
      status: false 
  },
  {
      id: 17,
      niveux: "difficile",
      titre: "Docker",
      description: "Un quiz avancé pour maîtriser Docker et les conteneurs.",
      nbrQuestion: 8,
      time: 9 , 
      status: false 
  },
  {
      id: 18,
      niveux: "facile",
      titre: "Angular",
      description: "Approfondissez vos connaissances d’Angular avec des questions de base.",
      nbrQuestion: 4,
      time: 4 , 
      status: false 
  },
];



let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let collapseMenu = document.getElementById('collapseMenu');
let modalQuizze = document.querySelector(".modalQuizze");
let submitBtn = document.getElementById("submitBtn");
let inputQuiz = document.getElementById("inputQuiz");
let close1 = document.querySelector(".close");
let clickedCard = "";
let existUser = document.getElementById("exist");
let arrayResult; 


arrayResult = localStorage.arrayResult != undefined ? JSON.parse(localStorage.arrayResult) : [];

let category;

if(localStorage.category != undefined){
  category = JSON.parse(localStorage.category); 
  console.log(category);
}else{
  localStorage.category = JSON.stringify(data); 
  category = data;
}


// Toggle ----------------------------------------------------------------

function handleClick() {
if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
} else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);



// Les Choix de Quizze ------------------------------------------------

let cardsParents = document.getElementById("cardsParents");


const TemplateCard = function(id,title , desc , nv , qs , time , status){
    const div = `<div class="bg-[#508aff17] ${status ? 'hidden' : ''} relative shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] max-w-md rounded-lg overflow-hidden font-[sans-serif]">
          <div class="min-h-[256px]">
            <img src="../images/imgq.webp" class="w-full" />
          </div>
    
          <div>
              <div class="absolute px-2 bg-yellow-500 rounded-sm  top-3 left-3 text-[14px] font-medium">Q : ${qs}</div>
              <div class="absolute px-2 bg-yellow-500 rounded-sm top-3 right-3 text-[14px] font-medium">T : ${time}min</div>
          </div>
    
          <div class="p-6">
            <div>
              <h3 class="text-white mt-3 text-xl font-bold text-[30px]">${title} <span class="float-end font-medium  text-[14px] ${nv =='facile' ? 'text-yellow-500' : ''} ${nv =='moyenne' ? 'text-green-500' : ''} ${nv =='difficile' ? 'text-red-500' : ''}">${nv}</span></h3>
            </div>
            <p class="mt-4 text-sm text-white leading-relaxed">${desc}</p>
            <button value="${title}"
            class='btnValue px-6 py-3 my-2 mt-5 text-sm rounded-md font-bold text-white bg-[#4a6cf7] transition-all ease-in-out duration-300 hover:bg-[#2f49af] '>Play Now</button>
    
          </div>
        </div>
     `

     return div;
}


category.forEach((card) => {

    let div = TemplateCard(card.id , card.titre , card.description , card.niveux , card.nbrQuestion , card.time , card.status);
    

    cardsParents.innerHTML += div;

});



let btnValue = document.querySelectorAll(".btnValue");

btnValue.forEach(btn =>

    btn.addEventListener("click" ,(e)=>{
      clickedCard = e.target.value;
      modalQuizze.style.display = "flex";
        
    })
);

submitBtn.addEventListener("click" , ()=> {

  let username = inputQuiz.value;
  let exist = false;

  for (let i = 0; i < arrayResult.length; i++) {
    
    if(arrayResult[i].username === username || username === ""){
      exist = true;
      console.log(exist);
      break;
    }else{
      exist = false;
    }
    
  }

  if(!exist){
    localStorage.setItem("clickedCard" , clickedCard);
    localStorage.setItem("username" , username);
    inputQuiz.innerHTML = "";
    window.location.href = "quiz.html";
    modalQuizze.style.display = "none";
  }else{
    inputQuiz.value = "";
    inputQuiz.style.border = "1px solid red";
    existUser.innerHTML = "Le nom déja exist";
    existUser.style.color = "red";
    existUser.style.marginTop = "8px";
  }



});


close1.addEventListener("click" , ()=> {
  
  modalQuizze.style.display = "none";

})





