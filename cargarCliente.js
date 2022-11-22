"use strict"
class Clientes {
    constructor(Nombre, Apellido, Domicilio, CodigoPostal, Telefono, Dni , Cuit ) {
        this.Nombre= Nombre;
        this.Apellido= Apellido;
        this.Domicilio= Domicilio;
        this.CodigoPostal= CodigoPostal;
        this.Telefono= Telefono;
        this.Dni= Dni;
        this.Cuit= Cuit;
    }
}

var clientes = [];

function obtenerNombre(){
    let nombre = document.getElementById("Nombre").value;
    if (nombre.length > 0) {
        return nombre;
    }
    else {
        return false;
    }
    
}
function obtenerApellido(){
    let Apellido = document.getElementById("Apellido").value;
    if (Apellido.length > 0) {
        return Apellido;
    }
    else {
        return false;
    }
}

function obtenerDomicilio(){
    let Domicilio = document.getElementById("Domicilio").value;
    if (Domicilio.length > 0) {
        return Domicilio;
    }
    else {
        return false;
    }
}
function obtenerCodigoPostal(){
    let CodigoPostal = document.getElementById("CodigoPostal").value;
    if (CodigoPostal.length > 0) {
        return CodigoPostal;
    }
    else {
        return false;
    }
}
function obtenerTelefono(){
    let Telefono = document.getElementById("Telefono").value;
    if (Telefono.length > 0) {
        return Telefono;
    }
    else {
        return false;
    }
}
function obtenerDni(){
    let Dni = document.getElementById("Dni").value;
    if (Dni.length > 0) {
        return Dni;
    }
    else {
        return false;
    }
}
function obtenerCuit(){
    let Cuit = document.getElementById("Cuit").value;
    if (Cuit.length > 0) {
        return Cuit;
    }
    else {
        return false;
    }
}
function crearCliente(){
    if (obtenerNombre() == false || obtenerApellido()== false ||  obtenerDomicilio() == false || obtenerCodigoPostal()  == false ||  obtenerTelefono() == false || obtenerDni() == false ||  obtenerCuit()== false ){
        alert("Debe completar todos los campos de texto.");
    }
    else{
        var client = new Clientes(obtenerNombre(),obtenerApellido(),obtenerDomicilio(),obtenerCodigoPostal(),obtenerTelefono(),obtenerDni(),obtenerCuit());
        clientes.push(client);
         mostrarCliente();
           console.log(client)
    }
}
    

function mostrarCliente(){
    var nuevos = '';
    for(let i =0; i <clientes.length; i++){
        
        nuevos += `
       <tr> 
    
       <td> ${clientes[i].Nombre}</td>
         <td>${clientes[i].Apellido}</td>
         <td> ${clientes[i].Domicilio} </td>
         <td>  ${clientes[i].CodigoPostal} </td>
          <td>  ${clientes[i].Telefono} </td>
          <td> ${clientes[i].Dni} </td>
         <td> ${clientes[i].Cuit} </td>
       </tr>
        `
    }
    document.getElementById("nuevoCliente").innerHTML= nuevos;
    console.log(clientes)
    }


   