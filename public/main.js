
// Toggle ----------------------------------------------------------------

let toggleOpen = document.getElementById('toggleOpen');
let toggleClose = document.getElementById('toggleClose');
let collapseMenu = document.getElementById('collapseMenu');

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


const TemplateCard = function(id,title , desc , nv , qs , time){
    const div = `<div class="bg-[#508aff17] relative shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] max-w-md rounded-lg overflow-hidden font-[sans-serif]" >
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


category.forEach(card => {

    let div = TemplateCard(card.id , card.titre , card.description , card.niveux , card.nbrQuestion , card.time);

    cardsParents.innerHTML += div;

});



let btnValue = document.querySelectorAll(".btnValue");

btnValue.forEach(btn =>

    btn.addEventListener("click" ,(e)=>{
        let clickedCard = e.target.value;
        localStorage.setItem("clickedCard" , clickedCard);
        window.location.href = "quiz.html"
        console.log(clickedCard);
    })
)









