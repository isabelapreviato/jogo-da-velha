console.log('hello user');

const play=document.querySelector('.button'); 

const options=document.querySelector('.options'); 

const aboutus=document.querySelector('.about-us');

const jogo=document.querySelector('.areaGrid');

function jogar () {
    play.style.display='none';
    options.style.display='none';
    aboutus.style.display='none';
    jogo.style.display='flex';

    // fade='slow';
}

play.onclick=jogar;



function caixa () {
}