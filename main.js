// Proyecto llamado Farmaeducativa.

//1) Página para registrarse

function identificarUsuarios(){
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");

if (nombre != "" && apellido != "") {
  alert("Hola" + " " + nombre + " " + apellido);
} else {
  alert("El nombre y el apellido deben ser ingresados");
}

}
identificarUsuarios();

function identificarRegistrar(){

let email = prompt("Ingrese su email");
console.log(email);
alert("Su mail es" + " " + email);
let direccion = prompt("Dirección");
let ciudad = prompt("Ciudad");
let pais = prompt("pais");
console.log(pais);
alert(pais);
let codigoPostal = parseInt(prompt("Código Postal"));
console.log(codigoPostal);
alert("CP" + " " + codigoPostal);
let contraseña = prompt("contraseña");
console.log(contraseña);


consultar();
}
function consultar(){
let consulta = prompt("Deja su consulta");
console.log(consulta);

pedirTurno();

}
let turno = prompt("¿Quiere sacar un turno para una consulta?");
function pedirTurno(){
if (turno === "si") {
  console.log(turno);
  alert("complete sus datos");
  for (let turno = 1; turno <= 3; turno++) {
    let apellido = prompt("Ingrese su Apellido y Nombre");
    alert(`turno ${turno} : ${apellido}`);
}
}
alert("Se acabaron los turnos");
}
pedirTurno();

identificarRegistrar();

//2) Cálculos de dosis- Esto va a la página "Arma tu pastillero"

let pregunta = prompt("¿Tu medicación es en comprimidos? Responder SI O NO").toLowerCase();

switch (pregunta) {
  case "si":
    
    let remedio = prompt("¿Qué fármaco te recetó el médico");
    console.log(remedio);
    alert(remedio);
    let miligramos = parseFloat(
      prompt("¿Cuántos miligramos tiene un comprimido")
    );
    console.log(miligramos);
    alert("Cada comprimido tiene" + " " + miligramos + " " + "mg");

    let comprimidos = parseFloat(
      prompt("Ingrese cantidad de comprimidos en una caja")
    );
    console.log(comprimidos);
    alert("Cada caja tiene" + " " + comprimidos + "comprimidos");
    
    alert(
      "En una caja tienes" +
        " " +
        Number(miligramos) * Number(comprimidos) +
        " " +
        "mg"
    );
    break;
    
  case "no":
    let medicamento = prompt("¿Qué fármaco te recetó el médico?");
    console.log(medicamento);
    alert(medicamento);
    let mililitros = parseFloat(prompt("¿Cuántos mililitros tiene el frasco?"));
    console.log(mililitros);
    alert(" Cada frasco tiene" + " " + mililitros + " " + "ml");
  
    let dosis = parseFloat(prompt(
      "¿Cuál es la dosis por kilogramo de peso de la persona y por día?"
    ))
    console.log(dosis);
    alert("La dosis por kilogramo de peso es" + " " + dosis + " " + "mg");

    let pesoPersona = parseFloat(prompt("¿Cuál es el peso de la persona?"));
    console.log(pesoPersona);

    alert("La persona" + " " + "pesa" + " " + pesoPersona + " " + "kg");


    let vasitoMg = parseFloat(prompt("cantidad de mg que hay en 5 ml, ( mirar en la caja del jarabe)"));
    console.log(vasitoMg);
    alert("En 5 ml hay"+" "+ vasitoMg + " " + "mg");
    
    function calculo(pesoPersona, dosis, vasitoMg){
      console.log(((pesoPersona*dosis)/3)*5/vasitoMg);
      }
      calculo(pesoPersona, dosis, vasitoMg);
    
   
    //const calculo = (pesoPersona, dosis, vasitoMg) => ((pesoPersona*dosis)/3 * 5) /vasitoMg;
     
    alert("La persona tomará" +" "+ calculo +" "+  "ml");
    break;
  }

//let turno = prompt("¿Quiere sacar un turno para una consulta?");

/*function turno(){

if (turno === "si") {
  console.log(turno);
  alert("complete sus datos");
  for (let turno = 1; turno <= 3; turno++) {
    let apellido = prompt("Ingrese su Apellido y Nombre");
    alert(`turno ${turno} : ${apellido}`);
} 
}
  alert("Se acabaron los turnos")
}*/
