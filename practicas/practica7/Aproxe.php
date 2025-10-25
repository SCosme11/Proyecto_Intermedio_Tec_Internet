<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aproximación e</title>
    <link rel="stylesheet" href="../../css/main.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div class="header-logo">
            <a href="../../index.html">
                <img src="../../images/house.svg" alt="Volver a inicio">
            </a>
        </div>

        <div class="header-titulo">
            <h1>Portafolio Santiago Cosme Cervera</h1>
        </div>

        <div class="header-placeholder"></div>
    </header>

    <?php 
        function factorial($n){
            $fact = 1;
            if($n == 0 || $n == 1){
                return $fact;
            }else{
                for($i=$n; $i>0; $i--){
                    $fact *= $i;
                }
        }
            return $fact;
        }

        function aproximare($n) {
            $suma = 0.0;
            $iteraciones = [];
            for($k=0; $k<$n; $k++){
                $suma += 1 / factorial($k);
                $iteraciones[] = $suma;
            }
            return $iteraciones;
        }

        if($_SERVER["REQUEST_METHOD"] == "POST"){
            $limite = $_POST["limite"];

            if($limite !== false && $limite > 0){
                $res = aproximare($limite);    
            }else{
                echo "<p>Ingrese un valor entero mayor a 0 </p>";
            }
        }
    ?>
    <h1>Aproximación e</h1>
    <img src="./img/e.png" alt="Fórmula Aproximación e">

    <form action="" method="post">
        <label for="limite">Limite superior (n) = </label>
        <input type="number" name="limite" id="limite" min="1" required> <br>
        <input type="submit" value="Calcular e">
    </form>
    <?php
    if (!empty($res)) {
        $resultado_final = end($res);
        echo "<h3>Resultado:</h3>";
        echo "<p>Para n = " . htmlspecialchars($limite) . ", la aproximación de e es: <strong>" . $resultado_final . "</strong></p>";
        echo "<p>Valor real de e: <strong>" . M_E . "</strong></p>";

        echo "<h3>Tabla de Iteraciones:</h3>";
        echo "<table>";
        echo "<thead><tr><th>Iteración (n)</th><th>Aproximación (x)</th></tr></thead>";
        echo "<tbody>";

        foreach($res as $iteracion => $valor){
            echo "<tr>";
            echo "<td>" . ($iteracion + 1) . "</td>";
            echo "<td>" . $valor . "</td>";
            echo "</tr>";
        }
    }
        echo "</table>"
    ?>
     
   <a href="index.html" class="boton-regreso" >Regresar a Práctica 7</a> <br>
    <footer>
        <p>&copy; 2025 Portafolio Santiago Cosme Cervera.</p>
        <p>santiago_cosme@anahuac.mx</p>
    </footer>
</body>
</html>