function funcionValidacion() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,10}$/;
    var comments = document.getElementById('comments').value;

    if (nombre !== ""){
        document.getElementById('nombre').style.borderColor = "black";
    }
    else {
        document.getElementById('nombre').style.borderColor = "red";
    }

    if (apellido !== ""){
        document.getElementById('apellido').style.borderColor = "black";
    }
    else {
        document.getElementById('apellido').style.borderColor = "red";
    }

    if (patron.test(email)) {
        document.getElementById('email').style.borderColor = "black";
    }
    else {
        document.getElementById('email').style.borderColor = "red";
    }

    if (comments !== ""){
        document.getElementById('comments').style.borderColor = "black";
    }
    else {
        document.getElementById('comments').style.borderColor = "red";
    }
}


