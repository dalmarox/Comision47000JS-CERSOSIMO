// Proyecto llamado Farmaeducativa.

//1) Página para registrarse

function identificarUsuarios() {
  let nombre = prompt("Ingrese su nombre");
  let apellido = prompt("Ingrese su apellido");

  if (nombre != "" && apellido != "") {
    alert("Hola" + " " + nombre + " " + apellido);
  } else {
    alert("El nombre y el apellido deben ser ingresados");
  }
}
identificarUsuarios();

function identificarRegistrar() {
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
function consultar() {
  let consulta = prompt("Deja su consulta");
  console.log(consulta);

  pedirTurno();
}
function pedirTurno() {
  let turno = prompt("¿Quiere sacar un turno para una consulta?");
  if (turno === "si") {
    console.log(turno);
    alert("complete sus datos");
    for (let turno = 1; turno <= 3; turno++) {
      let apellido = prompt("Ingrese su Apellido y Nombre");
      alert(`turno ${turno} : ${apellido}`+ " " + "tienes"+ " "+ (turno-1)+ " "+ "personas antes");
    }
    pedirTurno();
  
  }
  alert("Se acabaron los turnos");
  
}

identificarRegistrar();

let remedio=prompt("Ingresa el nombre del medicaamento, si quieres salir escribe ESC").toLowerCase();
while(remedio !="ESC"){
  console.log( "Ingresaste" +" "+ remedio);
remedio=prompt("Ingresa el nombre del fármaco o  ESC para salir");


let pregunta = prompt(
  "¿Tu medicación es en comprimidos? Responder SI O NO"
).toLowerCase();

switch (pregunta) {
  
  case "si":
    
    let miligramos = parseFloat(
      prompt("¿Cuántos miligramos tiene un comprimido")
    );
    console.log(miligramos);
    alert("Cada comprimido tiene" + " " + miligramos + " " + "mg");

    let comprimidos = parseFloat(
      prompt("Ingrese cantidad de comprimidos en una caja")
    );
    console.log(comprimidos);
    alert("Cada caja tiene" + " " + comprimidos +" " + "comprimidos");

    let y = multiplicacion (miligramos, comprimidos, remedio);
    function multiplicacion (miligramos, comprimidos) {
      return miligramos*comprimidos;
    }
    multiplicacion(y);
    console.log(y);
    alert("En una caja tienes"+ " "+ y + " "+ "mg de " + remedio);
  
    break;
    

  case "no":
    let medicamento = prompt("¿Qué fármaco te recetó el médico?");
    console.log(medicamento);
    alert(medicamento);
    let mililitros = parseFloat(prompt("¿Cuántos mililitros tiene el frasco?"));
    console.log(mililitros);
    alert(" Cada frasco tiene" + " " + mililitros + " " + "ml");

    let dosis = parseFloat(
      prompt("¿Cuál es la dosis por kilogramo de peso de la persona y por día?")
    );
    console.log(dosis);
    alert("La dosis por kilogramo de peso es" + " " + dosis + " " + "mg");

    let pesoPersona = parseFloat(prompt("¿Cuál es el peso de la persona?"));
    console.log(pesoPersona);

    alert("La persona" + " " + "pesa" + " " + pesoPersona + " " + "kg");

    let vasitoMg = parseFloat(
      prompt("cantidad de mg que hay en 5 ml, ( mirar en la caja del jarabe)")
    );
    console.log(vasitoMg);
    alert("En 5 ml hay" + " " + vasitoMg + " " + "mg");

    let x = reglaTres(dosis, pesoPersona, vasitoMg, medicamento); // Pasar los argumentos necesarios a la función

    function reglaTres(dosis, pesoPersona, vasitoMg, medicamento) {
      return ((dosis*pesoPersona)/3 * 5)/vasitoMg;
    }
    reglaTres(x);
    console.log(x);
    alert("el resultado es" +" "+ x +" "+ "ml de" +" "+ medicamento) ;
    
    break;
    default:
      console.log("Fin");
    break;
    
  }}
