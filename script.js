let botao = document.querySelector("#botao");
botao.style.background="pink";
botao.style.color="white"
let estaQuebrado=false;              //falso
let contaCliques=0;


botao.addEventListener("mouseover",e =>{
    if (!estaQuebrado)               //este ! caractere siguinifica não.
    botao.style.background="blue"
});

botao.addEventListener("mouseout",e =>{
     if(!estaQuebrado)                //este ! caractere siguinifica não.
     botao.style.background="yellow"
});

botao.addEventListener("click",e =>{
          contaCliques++;              //contaCliques=contaCliques+1
          if (contaCliques >=12){      //se contaClique for maior ou igual a 15 cliques
          botao.style.background="red";//pintar de vermelho
          botao.innerHTML="Quebrei";   //mudar mensagem para Quebrei
          estaQuebrado=true;}          //verdadeiro
});


