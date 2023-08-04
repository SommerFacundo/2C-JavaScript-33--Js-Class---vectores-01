class CPerson{
    constructor(nombre,apellido,id,fechaNac,email){
        this.nombre = nombre;
        this.apellido = apellido;
        this.id = id;
        this.fechaNac = fechaNac;
        this.email = email;
    }
    get getFecha(){
        return this.fechaNac;
    }
    get getEmail(){
        return this.email;
    }
    get getApellido(){
        return this.apellido;
    }
    get getNombre(){return this.nombre}
    get getId(){return this.id}

    filtrarEdad() {
        let fechaAct = new Date();
        let edadTime = fechaAct.getTime() - this.fechaNac.getTime();
        let edad = Math.floor(edadTime / (1000 * 60 * 60 * 24 * 365));
        return edad >= 18;
      }
    
      filtrarEmail() {
        return this.email.endsWith('@gmail.com');
      }
    
      filtraApellido() {
        return this.apellido.startsWith('S');
      }
}
let personas = [];

function addPerson(p){
    personas.push(p)
}
function displayPersons(p){
    let cont = document.getElementById("newPersonContenedor");

   
  while (cont.rows.length > 1) {
      cont.deleteRow(1);
    }
    for (const persona of p) {
        let tdNombre = document.createElement("td");
        let tdApellido = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdId = document.createElement("td");
        let tdFechaNac = document.createElement("td");
        let tr;
         tr = document.createElement("tr");
        tdNombre.innerHTML = persona.getNombre;
        tdApellido.innerHTML = persona.getApellido;
        tdEmail.innerHTML = persona.getEmail;
        tdId.innerHTML = persona.getId;
        tdFechaNac.innerHTML = "" + (persona.getFecha.getDate() + 1) + "/" + (persona.getFecha.getMonth() + 1) + "/" + persona.getFecha.getFullYear();
        tr.appendChild(tdId);
        tr.appendChild(tdNombre);
        tr.appendChild(tdApellido);
        tr.appendChild(tdFechaNac);
        tr.appendChild(tdEmail);
        cont.appendChild(tr)
    }
}

function filtros(opc){
    let filtroReq;
    switch(opc){
        case 1: //EDAD
            filtroReq = personas.filter(personas => personas.filtrarEdad());
        break;
        case 2: //EMAIL
            filtroReq = personas.filter(personas => personas.filtrarEmail());
        break;
        case 3: //APELLIDO
             filtroReq = personas.filter(personas => personas.filtraApellido());
        break;
    }
    return filtroReq;
}

document.getElementById("agregar").addEventListener("click",()=>{
    event.preventDefault();
    let nombre_persona = document.getElementById("Nombre").value;
    let apellido_persona = document.getElementById("Apellido").value;
    let email_persona = document.getElementById("mail").value;
    let id_persona = document.getElementById("id").value;
    let fecha_persona = new Date(document.getElementById("FechaNacimiento").value);
    let personaObj = new CPerson(nombre_persona,apellido_persona,id_persona,fecha_persona,email_persona);
    addPerson(personaObj)
})

document.getElementById("filtrarEd").addEventListener("click",()=>{
    event.preventDefault();
    displayPersons(filtros(1));
});
document.getElementById("filtrarMail").addEventListener("click",()=>{
    event.preventDefault();
    displayPersons(filtros(2));
});
document.getElementById("filtrarApellido").addEventListener("click",()=>{
    event.preventDefault();
    displayPersons(filtros(3));
});


