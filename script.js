function calcularEdad() {
  const nacimiento = new Date('2009-12-05'); // Cumpleaños 5 diciembre 2009
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const cumpleEsteAño = new Date(hoy.getFullYear(), nacimiento.getMonth(), nacimiento.getDate());
  if (hoy < cumpleEsteAño) edad--;

  document.getElementById('edad').textContent = edad;
}

calcularEdad();

