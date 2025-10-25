function resultados(){
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    edad = document.getElementById("edad").value;
    genero = document.getElementById("genero").value;
    fdn = document.getElementById("fdn").value;
    color = document.getElementById("color").value;

    document.getElementById("resultado").innerHTML = `Nombre: ${nombre} <br> Correo: ${correo} <br> Edad: ${edad} <br> Género: ${genero} <br> Fecha de Nacimiento: ${fdn} <br> Color: ${color}`;
}