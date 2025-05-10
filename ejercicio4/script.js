let clics = 0;

function incrementar() {
  clics++;
  document.getElementById("contador").innerText = `Has hecho ${clics} clic${clics === 1 ? "" : "s"}.`;
}
