const indicacao = document.querySelector('.indicacao');
const indicacaoX = document.querySelector('.indicacao .x');
const indicacaoXSpan = document.querySelectorAll('.indicacao .x span');
const [indicacaoXSpan1, indicacaoXSpan2] = indicacaoXSpan;

document.addEventListener('click', e => {

    const el = e.target;

    if(el == indicacaoX || el == indicacaoXSpan1 || el == indicacaoXSpan2){
        indicacao.classList.add('indicacao-ocultar');
    }

});