function calcularEdad() {
  const anio = document.getElementById("anioNacimiento").value;
  const anioActual = new Date().getFullYear();

  if (anio === "" || isNaN(anio) || anio > anioActual || anio < 1900) {
    document.getElementById("resultado").innerText = "Por favor ingresa un año válido.";
    return;
  }

  const edad = anioActual - parseInt(anio);
  document.getElementById("resultado").innerText = `Tienes ${edad} años.`;
}
