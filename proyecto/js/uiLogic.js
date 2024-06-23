document.querySelector('#registro').addEventListener('click', saveRegistro);

function saveRegistro(){
    var nombre = document.querySelector('#nombre').value,
    email = document.querySelector('#email').value,
    usuario = document.querySelector('#usuario').value,
    contraseña = document.querySelector('#contraseña').value

    addRegistro(nombre, email, usuario, contraseña);
    drawRegistro();
}

function drawRegistro(){
    var list = getFriendList()
}