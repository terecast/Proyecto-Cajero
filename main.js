

var cuentas = [
    { nombre: "Mali", password: 1234, saldo: 200 },
    { nombre: "Gera", password: 4321, saldo: 290 },
    { nombre: "Maui", password: 9876, saldo: 67 },
    { nombre: "Karo", password: 6789, saldo: 400 },
    { nombre: "Beto", password: 5432, saldo: 250 },
];

let cuentaActual = undefined;



function botonBuscar() {
    let usuario = document.getElementById("name").value;

    let contrasena = document.getElementById("pass").value;

    validarUser(usuario, contrasena);
    document.getElementById("pass").type = "password";
    
}



function validarUser(usuario, contrasena) {
    

    for (let i = 0; i < cuentas.length; i++) {
        if (cuentas[i].nombre == usuario && cuentas[i].password == contrasena) {
            document.getElementById("Validar-User").innerText = ("Bienvenido " + usuario);
            document.getElementById("options").style.display = "block";
            console.log(cuentas);
            cuentaActual = i;
            console.log(cuentas[i]);
            console.log(cuentas[i].saldo);
            document.getElementById("Saldo").innerText = ("Tu Saldo es " + cuentas[i].saldo);

            return;

        }

    }
    document.getElementById("Validar-User").innerText = ("Nombre Incorrecto, verifica tus datos");
    


}


function depositos() {


    if (cuentaActual !== undefined) {
        let nuevoSaldo = cuentas[cuentaActual].saldo + Number(document.getElementById("ingresar-monto-input").value);
        if (nuevoSaldo > 990) {
            document.getElementById("Saldo").innerText = ("No Puedes tener mas de 990 ");
            
        } else {
            cuentas[cuentaActual].saldo = nuevoSaldo;
            document.getElementById("Saldo").innerText = ("Tu Saldo es " + cuentas[cuentaActual].saldo);
            
        }

        document.getElementById("ingresar-monto-input").value="";

    }
    

}

function retiros() {

    if (cuentaActual !== undefined) {
        let nuevoSaldo = cuentas[cuentaActual].saldo - Number(document.getElementById("retirar-monto-input").value);
        if (nuevoSaldo < 10) {
            document.getElementById("Saldo").innerText = ("No puedes tener menos de 10");

        }else{
            cuentas[cuentaActual].saldo = nuevoSaldo;
            document.getElementById("Saldo").innerText = ("Tu Saldo es " + cuentas[cuentaActual].saldo);
            document.getElementById("retirar-monto-input").value = "";
        }

        document.getElementById("retirar-monto-input").value="";
        
    }

}

function mostrarSaldo() {

    document.getElementById("Saldo").style.display = 'flex';
    document.getElementById("Ingresar-monto").style.display = 'none';
    document.getElementById("Retirar-monto").style.display = 'none';
    document.getElementById("salir-cuenta").style.display = 'flex';
    if (cuentaActual !== undefined) {
        document.getElementById("Saldo").innerText = ("Tu Saldo es " + cuentas[cuentaActual].saldo);
    }


}

function mostrarIngresos() {

    document.getElementById("Saldo").style.display = 'flex';
    document.getElementById("Ingresar-monto").style.display = 'flex';
    document.getElementById("Retirar-monto").style.display = 'none';
    document.getElementById("salir-cuenta").style.display = 'flex';

}

function mostrarRetiro() {

    document.getElementById("Saldo").style.display = 'flex';
    document.getElementById("Ingresar-monto").style.display = 'none';
    document.getElementById("Retirar-monto").style.display = 'flex';
    document.getElementById("salir-cuenta").style.display = 'flex';

}

function salirUsuario() {
    document.getElementById("Saldo").style.display = 'none';
    document.getElementById("Ingresar-monto").style.display = 'none';
    document.getElementById("Retirar-monto").style.display = 'none';
    document.getElementById("salir-cuenta").style.display = 'none';
    document.getElementById("Validar-User").style.display = 'none';
    document.getElementById("options").style.display = 'none';
    document.getElementById("pass").value = "";
    document.getElementById("name").value = "";
    document.getElementById("pass").type = "search";



}

