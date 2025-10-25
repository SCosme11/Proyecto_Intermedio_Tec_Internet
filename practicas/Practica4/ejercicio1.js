function categorias(){
    x = document.getElementById("numero").value; 
    if(x >=0 && x<6){
        document.getElementById("resultado").innerHTML = "NA";
    }else if(x >=6 && x<7.5){
        document.getElementById("resultado").innerHTML = "S";
    }else if(x >=7.5 && x<9){
        document.getElementById("resultado").innerHTML = "B";
    }else if(x >=9 && x<10){
        document.getElementById("resultado").innerHTML = "MB";
    }else if(x == 10){
        document.getElementById("resultado").innerHTML = "LAP";
    }else{
        alert("Ingrese un valor entre 0 y 10");
        document.getElementById("resultado").innerHTML = "";
    }
}