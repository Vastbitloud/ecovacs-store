function login() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");

    // Login padrão
    const USER = "admin";
    const PASS = "1234";

    if (user === "" || pass === "") {
        msg.textContent = "Preencha todos os campos!";
        return;
    }

    if (user === USER && pass === PASS) {
        msg.style.color = "#8fff9f";
        msg.textContent = "Login bem-sucedido!";

        // redireciona
        setTimeout(() => {
            window.location.href = "home.html";
        }, 900);

    } else {
        msg.style.color = "#ff8c8c";
        msg.textContent = "Usuário ou senha incorretos.";
    }
}
