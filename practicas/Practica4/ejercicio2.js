function factorial(n){
    if(n<0){
        alert("El número debe de ser entero positivo")
        document.getElementById("resultado").innerHTML = "";
    }else{
        if(n == 0){
            return 1;
        }else{
            return n * factorial(n - 1);
        }
    }
}

function calcular(){
    x = document.getElementById("numero").value;
    resultado = factorial(x);
    document.getElementById("resultado").innerHTML = `${x}! = ${resultado}`;
}