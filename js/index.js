import userLogin from "./moduloDados.js";
const alertaLogin = new bootstrap.Modal('#alertaLogin')
const entrarUsuario = document.getElementsById("btnEntrar");

entrarUsuario.addEventListener("click", _event =>{
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let validaLogin = userLogin.find(userLogin => userLogin.userName === login);
    if(login === validaLogin.userName && senha === validaLogin.senha){
        alert("Login realizado com sucesso!");
        window.location.pathname="/app.html";
    } else {
        alertaLogin.show();
    }
});


// Minha solução
// function loginForm() {

//     for (var i in userLogin) {
//         var j = userLogin[i];
//         if(j.userName === login && j.senha === senha){
//             alert("Login realizado com sucesso!");
//             return true;
//         } 
//     }
//     alert("Usuário e/ou Senha incorretos");
//     return false;
// }

