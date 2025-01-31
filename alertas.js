document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let workerId = document.getElementById("workerId").value.trim();
    let password = document.getElementById("password").value.trim();

    if (workerId === "" || password === "") {
        alert("Por favor, complete todos los campos.");
    } else {
        alert("Inicio de sesión exitoso. Bienvenido a Asistencia UTC.");
        window.location.href = "pagina.html";
    }
});

