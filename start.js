function startGame() {
  let nivel = document.getElementById("nivel").value;
  
  if(nivel === '') {
    alert("Selecione um nível para iniciar o game!!!")
    return false;
  }

  window.location.href = "game.html?" + nivel;
}