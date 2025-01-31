function buscarAlumno() {
    let matricula = document.getElementById("matricula").value.trim();
    let nombre = document.getElementById("nombre").value.trim();
    let fecha = document.getElementById("fecha").value.trim();

    if (matricula === "" || nombre === "" || fecha === "") {
        alert("Por favor, llena todos los campos de búsqueda antes de continuar.");
        return;
    }

    alert("Búsqueda realizada con éxito. (Funcionalidad en desarrollo)");
}
