var bodybutton = document.getElementById("body-button");
var body = document.getElementById("body");

bodybutton.addEventListener("click", function() {

    body.classList.toggle("hide");

});

window.sr = ScrollReveal({reset: true});

sr.reveal('.intro-img1', {duration: 4000 , rotate: {x:100,y:100,z:0}
});
sr.reveal('.soft-s , .h-soft', {duration: 4000 , rotate: {x:-30,y:-90,z:-30}
});
sr.reveal('.conhecimentos , .h-conhecimentos', {duration: 4000 , rotate: {x:-30,y:-90,z:-30}
});
sr.reveal('.certificados , .h-certificados ', {duration: 4000 , rotate: {x:-30,y:-90,z:-30}
});
sr.reveal('.section-projeto , .h-projetos', {duration: 4000, rotate: {x:-30,y:-90,z:-30}
})
const button = document.querySelector('.chat-button');
const form = document.querySelector('.page-form');
const button1 = document.querySelector('.jogo-button');
const form1 = document.querySelector('.pag-form');

const ChatbotButton = (event) => {

    event.preventDefault();
    window.location.href = '/Primeiro-projeto/Primeiro-projeto/index.html';  
}
const JogoButton = (event) => {

    event.preventDefault();
    window.location.href = '/Projeto-Jogo-da-Memoria/index.html';
  
}
  
form.addEventListener('submit', ChatbotButton);
form1.addEventListener('submit', JogoButton);
  


let count =1;

document.getElementById("radio1").checked = true;

setInterval(function(){

  nextImage();

}, 5000)

function nextImage(){

  count++;
    
  if(count>4){
        
    count =1;

  }
  document.getElementById("radio"+count).checked = true;
  
}

function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() =>{
            elemento.innerHTML +=letra;
        }, 100 * i)
    });
}
const titulo = document.querySelector('h1');

typeWriter(titulo);
/*
var header = document.getElementById('header');
var menus = document.getElementById('menu');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar()
{
    showSidebar = !showSidebar;
    if(showSidebar)
    {
        menus.style.marginLeft ='-10vw';
        menus.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else
    {
        menus.style.marginLeft ='-80vw';
        menus.style.animationName = '';
        content.style.filter = '';
    }
}
function closeSidebar()
{
    if(showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth > 768 && showSidebar)
    {
        showSidebar = true;
        toggleSidebar();
    }
});

var softbutton = document.getElementById("h-soft");

softbutton.addEventListener("click", function() {

    var softs = document.getElementById("soft-s");
    softs.classList.toggle(".hide");

});
*/
