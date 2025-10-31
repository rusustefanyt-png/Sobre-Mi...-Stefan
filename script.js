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

// 🌙 Activar o desactivar modo noche con F7
document.addEventListener("keydown", (e) => {
  if (e.key === "F7") {
    const overlay = document.getElementById("night-overlay");
    overlay.classList.toggle("active");
    document.body.style.background = overlay.classList.contains("active")
      ? "linear-gradient(180deg, #30003f, #000000)"
      : "linear-gradient(180deg, #000000, #001f3f)";
  }
});


