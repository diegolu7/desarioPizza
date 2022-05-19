const input = document.querySelector("#id");
const btn = document.querySelector("#btn");
const nombre = document.querySelector("#nombre");
const precio = document.querySelector("#precio");

btn.addEventListener('click', (e) => {
  e.preventDefault();
  let bandera = false;
  precio.textContent = "";
  nombre.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == input.value) {
      bandera = true;
      //agregamos precio + nombre
      nombre.textContent = `Nombre: ${data[i].nombre}`;
      precio.textContent = `Precio: ${data[i].precio}$`;
    }

    (!bandera) ? precio.textContent = "Pizza no encontrada" : console.log("");
  }
});


