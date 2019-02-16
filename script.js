console.log('hello user');

const play=document.querySelector('.button'); 

const options=document.querySelector('.options'); 

const aboutus=document.querySelector('.about-us');

const jogo=document.querySelector('.areaGrid');

// grid

const gridd=document.querySelector('.gridd');

function jogar () {
    play.style.display='none';
    // play.style.color='aquamarine';
    options.style.display='none';
    aboutus.style.display='none';
    jogo.style.display='flex';
   // fade='slow';
}

function caixa () {
    gridd.style.color='black';
}

gridd.onclick=caixa
play.onclick=jogar;

