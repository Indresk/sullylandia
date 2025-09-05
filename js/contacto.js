document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contacto");
  const respuesta = document.getElementById("respuesta");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    const datos = new FormData(this);

    fetch("../php/procesamiento-contacto.php", {
      method: "POST",
      body: datos
    })
    .then(res => res.text())
    .then(data => {

      respuesta.innerHTML = data;

      if (data.includes("alert-success")) {
        this.reset();
      }

      setTimeout(() => {
        const alerta = document.querySelector("#respuesta .alert");
        if (alerta) alerta.remove();
      }, 5000);
    })
    .catch(err => {
      respuesta.innerHTML =
        "<div class='alert alert-danger'>❌ Error en el envío.</div>";
    });
  });
});