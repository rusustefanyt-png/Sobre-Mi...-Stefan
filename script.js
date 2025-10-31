// 🎂 Edad automática (actualiza cada 5 de diciembre)
function calcularEdad() {
  const nacimiento = new Date(2009, 11, 5); // 5 diciembre 2009
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
  }
  document.getElementById("edad").textContent = edad;
}
calcularEdad();

// 🌙 Activar modo noche según hora en España
function activarModoNoche() {
  const overlay = document.getElementById('night-overlay');
  const horaEspaña = new Date().toLocaleString('en-US', { timeZone: 'Europe/Madrid' });
  const hora = new Date(horaEspaña).getHours();

  if (hora >= 18 || hora < 5) {
    overlay.style.opacity = 1;
    overlay.style.zIndex = 0;
  } else {
    overlay.style.opacity = 0;
  }
}

// Ejecutar al cargar
activarModoNoche();
