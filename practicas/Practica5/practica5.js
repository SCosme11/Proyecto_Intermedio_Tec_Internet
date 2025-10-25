var registro = "<tr><th>Nombre</th><th>Email</th><th>Intereses</th><th>Mascotas</th><th>Fecha de Nacimiento</th><th>Color</th><th>Satisfacción</th></tr>";
var estilo = 0;

function resultados(){
    if(document.getElementById("nombre").value == false){
        alert("Nombre vacío. Incluya su nombre completo.");
    }else if(document.getElementById("email").value == false){
        alert("Email vacío. Incluya su Email");
    }else if(document.getElementById("fdn").value == false){
        alert("Fecha de Nacimiento vacía. Incluya su Fecha de nacimiento.");
    }else{
        //checkbox
        intereses = document.querySelectorAll('input[name=intereses]:checked');
        cons = "<td>";
        for(var v of intereses){
            cons += v.value + "<br>";
        }
        cons += "</td>";

        //radio
        z = document.querySelector("input[name=mascota]:checked");
        if(z != null){
            cons += "<td>" + z.value + "</td>";
        }else{
            alert("Selecciona una opción en la sección de Mascota.");
        }

        //fecha
        fecha = "<td>" + document.getElementById('fdn').value + "</td>";

        //Satisfacción
        sat = document.getElementById("numero").value;
        if(sat < 25){
            valorsat = "Muy mal";
        }else if(sat <=25 && sat<50){
            valorsat = "Mal";
        }else if(sat <=50 && sat<75){
            valorsat= "Regular";
        }else if(sat<=75 && sat<90){
            valorsat = "Bien"
        }else{
            valorsat = "Muy Bien";
        }
        //Campos llenos
         if(estilo % 2 ==0){
            registro += "<tr class=\"renglon1\">";
        } else {
            registro += "<tr class=\"renglon2\">";
        }
        estilo++;

        registro += "<td>" + document.getElementById("nombre").value + "</td>";
        registro += "<td>" + document.getElementById("email").value + "</td>";
        registro += cons; //intereses y mascota
        registro += fecha;
        registro += "<td>" + document.getElementById("color").value + "</td>";
        registro += "<td>" + valorsat + "</td>";

        document.getElementById("respuestas").innerHTML = registro;
        document.getElementById("formulario").reset();
    }

}