window.sr = ScrollReveal({reset: true});

sr.reveal('.intro-img1', {duration: 3000 , rotate: {x:100,y:100,z:0}
});
sr.reveal('.h-soft', {duration: 3000 , rotate: {x:100,y:100,z:0}
});
sr.reveal('.h-conhecimentos', {duration: 3000 , rotate: {x:100,y:100,z:0}
});
sr.reveal('.h-habilidades', {duration: 3000 , rotate: {x:80,y:0,z:30}
});
sr.reveal('.h-certificados', {duration: 3000 , rotate: {x:80,y:0,z:30}
});
sr.reveal('.h-lorayne', {duration: 3000 , rotate: {x:80,y:0,z:30}
});




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
*/
