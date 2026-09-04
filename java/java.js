let pontos = 0;
// some pontos conforme as respostas...

if (pontos >= 8) {
  window.location.href = "resultado-alto.html";
} else if (pontos >= 4) {
  window.location.href = "resultado-medio.html";
} else {
  window.location.href = "resultado-baixo.html";
}
