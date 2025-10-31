// 🎂 Calcular edad automáticamente (cada 5 de diciembre)
function calcularEdad() {
  const nacimiento = new Date(2009, 11, 5); // 5 diciembre 2009
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  const m = hoy.getMonth() - nacimiento.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
  document.getElementById("edad").textContent = edad;
}
calcularEdad();

// 🌙 Activar modo noche según hora en España
function activarModoNoche() {
  const overlay = document.getElementById("night-overlay");
  const horaEspaña = new Date().toLocaleString("en-US", { timeZone: "Europe/Madrid" });
  const hora = new Date(horaEspaña).getHours();

  if (hora >= 18 || hora < 5) {
    overlay.style.opacity = 1;
  } else {
    overlay.style.opacity = 0;
  }
}
activarModoNoche();

// 🎶 Música autoplay sin bloqueo
window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musica");
  audio.volume = 0.0; // empieza en silencio
  const tryPlay = audio.play();

  if (tryPlay !== undefined) {
    tryPlay
      .then(() => {
        // Subir volumen suavemente
        setTimeout(() => {
          let vol = 0.0;
          const fade = setInterval(() => {
            vol += 0.05;
            if (vol >= 0.6) {
              vol = 0.6;
              clearInterval(fade);
            }
            audio.volume = vol;
          }, 200);
        }, 2000);
      })
      .catch(() => {
        // Si aún así se bloquea, reintentar tras clic
        console.log("Autoplay bloqueado, esperando interacción...");
        const resume = () => {
          audio.play().catch(() => {});
          document.removeEventListener("click", resume);
        };
        document.addEventListener("click", resume);
      });
  }
});

