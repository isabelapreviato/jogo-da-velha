console.log('hello user');

const play=document.querySelector('.button'); 

const options=document.querySelector('.options'); 

const aboutus=document.querySelector('.about-us');

function jogar () {
    play.style.display='none';
    options.style.display='none';
    aboutus.style.display='none';
    // fade='slow';
}

play.onclick=jogar;