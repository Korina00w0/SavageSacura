/* ---------------------- ventana emergente de aviso ---------------- */
var btnAbrirAviso = document.getElementById("abrirAviso");
var aviss = document.getElementById("miAviso");

var btnCierra = document.getElementsByClassName("cierra")[0];

btnAbrirAviso.onclick = function () {
  aviss.style.display = "block";
}

btnCierra.onclick = function () {
  aviss.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == aviss) {
    aviss.style.display = "none";
  }
}


/* -------------------- correo electronico ------------------- */
let boton = document.getElementById("boton");
var info = document.getElementById("info");

boton.addEventListener("click", function () {
  var hrefValue = boton.href;
  var asuntoEmail = info.value;
  boton.href = "mailto:brokenwing00w0@gmail.com?subject=" + asuntoEmail + "&body=";
  console.log(hrefValue);
  console.log(info.value);
});