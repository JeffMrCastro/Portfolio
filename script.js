//# Efeito para mostrar o menu
'use strict'
function menuShow() {
    let menuMobile = document.querySelector('.menu__mobile');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}


//# Efeito scroll 
const myObserver = new IntersectionObserver((mostrar) => {
   mostrar.forEach ( (entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('ms__sobre');

        } else {
            entry.target.classList.remove('ms__sobre');
        
        }
    });
});
const element = document.querySelectorAll('.hiden');

element.forEach((element) => myObserver.observe(element));


//# Maquina de escrever
 function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(function(){
            elemento.innerHTML += letra
        }, 120 * i);
    });
    
   
 }

const efeitoMaquina = document.querySelector('.cor__text');
typeWriter(efeitoMaquina);
 

const mode = document.getElementById('sol');
mode.addEventListener('click', () => {
    const form = document.getElementById('pag')
    if(mode.classList.contains('fa-sun')) {
            mode.classList.remove('fa-sun');
            mode.classList.add('fa-moon');
            form.classList.add('branco')
            
            return;
        }
        mode.classList.add('fa-sun');
        mode.classList.remove('fa-moon');
        form.classList.remove('branco')
       
});


