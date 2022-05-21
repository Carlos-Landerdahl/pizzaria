const qs = (el) => document.querySelector(el);
const qsa = (el) => document.querySelectorAll(el);

function load(){
   setTimeout(() => {
    qs(".bolas").style.display = "none";
}, 5000);

setTimeout(() => {
    qs("h1").style.display = "none";
}, 5000); 
};
load();

function voltar() {
    setTimeout(() => {
        history.go(-1);
    }, 4000);
}
voltar();

