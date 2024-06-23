var registroList = [];

function addRegistro( nombre, email, usuario, contraseña){
    var newRegistro = {
        nombre: nombre,
        email: email,
        usuario: usuario,
        contraseña: contraseña
    };
    console.log(newRegistro);
    registroList.push(newRegistro);
    localStorageRegistroList(registroList);
    alert("Usduario almacenado exitosamente");
}

function getFriendList(){
    var storedList = localStorage.getItem('localRegistroList');
  if(storedList == null){
    registroList = [];
  }else{
    registroList = JSON.parse(storedList);
  }
  return registroList;
}

function localStorageRegistroList(plist){
    localStorage.setItem('localRegistroList', JSON.stringify(plist));
}

function loguear(){
    var email= document.getElementById("email").value;
    var contraseña= document.getElementById("contraseña").value;

    var verify = !!registroList.find(element => element.email === email && element.contraseña === contraseña);

    console.log(verify);

    if (email == "" && contraseña== "") {
        alert("Ingrese el Email y contraseña ");
    }
    else{
        if(verify)
            {
                alert("Usuario logueado correctamente");
                window.location="/Descargas/proyecto/index.html";
            }
        else{
            alert("Contraseña/Usuario incorrecto")
        }
    }
}