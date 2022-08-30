// variáveis
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 20;
let tempoMosquito = 2000;

//url
let nivel = window.location.search
nivel = nivel.replace("?", "");

//tempo mosquito
if(nivel === "noob") {
  tempoMosquito = 2000;
  tempo = 20;
} else if(nivel === "normal") {
  tempoMosquito = 1500;
  tempo = 15;
} else if(nivel === "chucknorris") {
  tempoMosquito = 500;
  tempo = 10;
}

//ajustar tamanho da tela
function ajustarTamanho() {
  altura = window.innerHeight;
  largura = window.innerWidth;
}

ajustarTamanho();

//cronometro
let cronometro = setInterval(() => {
  tempo -= 1

  if(tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criaMosquito);
    window.location.href = "vitoria.html"
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000)

//posicionar mosquito
function posicaoRandom() {

  //remover mosquito
  if(document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    //controle pontos de vidas
    if(vidas > 3) {
      window.location.href = "game_over.html"
    } else {
      document.getElementById('v' + vidas).src = "img/coracao_vazio.png";
      vidas++
    }
  }
 
  let posicaoX = Math.floor(Math.random() * largura) - 90;
  let posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //criar img mosquito
  let mosquito = document.createElement("img");
  mosquito.src = "img/mosquito.png";
  mosquito.className = `${tamanhoRandom()} ${ladoRandom()}`;
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function() {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

//tamanho do mosquito
function tamanhoRandom() {
  let classe = Math.floor(Math.random() * 3);

  switch(classe) {
    case 0:
      return "mosquito1"
    case 1:
      return "mosquito2"
    case 2:
      return "mosquito3"
  }
}

function ladoRandom() {
  let classe = Math.floor(Math.random() * 2);

  switch(classe) {
    case 0:
      return "ladoA"
    case 1:
      return "ladoB"
  }
}