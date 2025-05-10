function convertirMayusculas() {
  const texto = document.getElementById("entrada").value;
  const textoMayus = texto.toUpperCase();
  document.getElementById("resultado").innerText = textoMayus;
}
