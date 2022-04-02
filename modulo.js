

var angX = 0;
var angY = 0;

$('.boton').on('click', function() {
  switch ($(this).attr("id")) {
    case "arriba":
      angX = angX + 90;
      break;
    case "abajo":
      angX = angX - 90;
      break;
    case "derecha":
      angY = angY + 90;
      break;
    case "izquierda":
      angY = angY - 90;
      break;
  }
  $('#cube').attr('style', 'transform: rotateX(' + angX + 'deg) rotateY(' + angY + 'deg);')
});