// Proyecto llamado Farmaeducativa.
//1) Página para registrarse

let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
//console.log(apellido);
if (nombre != "" && apellido != "") {
  alert("Hola" + " " + nombre + " " + apellido);
} else {
  alert("El nombre y el apellido deben ser ingresados");
}

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
let consulta = prompt("Deja su consulta");
console.log(consulta);

//2) Cálculos de dosis

let pregunta = prompt("¿Tu medicación es en comprimidos?").toLowerCase();
if (pregunta === "si") {
  alert("Continua con los cálculos");
  let medicamento = prompt("¿Qué fármaco te recetó el médico");
  console.log(medicamento);
  alert(medicamento);
  let miligramos = parseFloat(prompt("¿Cuántos miligramos tiene un comprimido"));
  console.log(miligramos);
  alert("Cada comprimido tiene" + " " + miligramos + " " + "mg");
  
  let comprimidos = parseFloat(
    prompt("Ingrese cantidad de comprimidos en una caja")
  );
  console.log(comprimidos);
  alert("Cada caja tiene" + " " + comprimidos);
  
  alert(
    "En una caja tienes" +
      " " +
      Number(miligramos) * Number(comprimidos) +
      " " +
      "mg"
  );


} else if (pregunta != "no") {
  alert("continua en opción 2");
  console.log("Opcion 2");
} else if (pregunta != "no") {
  alert("¿Qué fármaco recetó el médico?");
  console.log(medicamento);
  alert(medicamento);
}

//4) Turno en la farmacia
let turno = prompt("¿Quiere sacar un turno para una consulta?");
if (turno ==="si") {
  console.log(turno);
alert("complete sus datos");  
for (let turno = 1; turno <= 3; turno++) {
    let apellido = prompt("Ingrese su Apellido y Nombre");
    alert(`turno ${turno} : ${apellido}`);
  }
  alert(" Se acabaron los turnos ");
}else if(turno !="no") {
    alert("Su consulta finalizó");
}


//5)
  


