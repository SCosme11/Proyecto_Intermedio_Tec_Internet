// Usamos esta función para esperar a que se cargue todo el html
document.addEventListener('DOMContentLoaded', () => {
    // Referencias a los elementos del DOM
    const categoriaunidad = document.getElementById('categoria');
    const valorinput = document.getElementById('inputcon');
    const unidadinput = document.getElementById('unidad-e');
    const valoroutput = document.getElementById('resultado');
    const unidadoutput = document.getElementById('unidad-s');
    const displayres = document.getElementById('display-res');
    const convertBtn = document.getElementById('convertir'); 


    const unidades = {
        temperatura: {
            celsius: { nombre: 'Celsius (°C)', aBase: c => c, deBase: c => c },
            fahrenheit: { nombre: 'Fahrenheit (°F)', aBase: f => (f - 32) * 5 / 9, deBase: c => (c * 9 / 5) + 32 },
            kelvin: { nombre: 'Kelvin (K)', aBase: k => k - 273.15, deBase: c => c + 273.15 }
        },
 
        distancia: {
             metros: { nombre: 'Metros (m)', aBase: m => m, deBase: m => m },
             kilometros: { nombre: 'Kilómetros (km)', aBase: km => km * 1000, deBase: m => m / 1000 },
             millas: { nombre: 'Millas (mi)', aBase: mi => mi * 1609.34, deBase: m => m / 1609.34 },
             pies: { nombre: 'Pies (ft)', aBase: ft => ft * 0.3048, deBase: m => m / 0.3048 },
             pulgadas: { nombre: 'Pulgadas (in)', aBase: inch => inch * 0.0254, deBase: m => m / 0.0254 }
        },
        tiempo: {
             segundos: { nombre: 'Segundos', aBase: s => s, deBase: s => s },
             horas: { nombre: 'Horas', aBase: h => h * 3600, deBase: s => s / 3600 },
             dias: { nombre: 'Días', aBase: d => d * 86400, deBase: s => s / 86400 },
             anos: { nombre: 'Años', aBase: a => a * 31536000, deBase: s => s / 31536000 }
        },
        moneda: {
             mxn: { nombre: 'Peso Mexicano (MXN)', aBase: mxn => mxn / 18.4, deBase: usd => usd * 18.4 },
             usd: { nombre: 'Dólar (USD)', aBase: usd => usd, deBase: usd => usd },
             eur: { nombre: 'Euro (EUR)', aBase: eur => eur * 1.17, deBase: usd => usd / 1.17 }
        }
    };

    function hacerConversion() {
     
        const value = parseFloat(valorinput.value);
        if (isNaN(value)) {
            displayres.textContent = 'Por favor, introduce un número válido.';
            valoroutput.value = '';
            return;
        }

        const categoria = categoriaunidad.value;
        const unidadInput = unidadinput.value;
        const unidadOutput = unidadoutput.value;

        const valueInBaseUnit = unidades[categoria][unidadInput].aBase(value);
        const finalValue = unidades[categoria][unidadOutput].deBase(valueInBaseUnit); 

        valoroutput.value = finalValue.toFixed(4);
        displayres.textContent = `${value} ${unidades[categoria][unidadInput].nombre} es igual a ${finalValue.toFixed(4)} ${unidades[categoria][unidadOutput].nombre}.`;
    }

    function actualizarSelectores() {
        const categoriaactual = categoriaunidad.value;
        const unidadesCategoria = unidades[categoriaactual];

        unidadinput.innerHTML = '';
        unidadoutput.innerHTML = '';

        for (const unitKey in unidadesCategoria) {
            const unitInfo = unidadesCategoria[unitKey];
            const option1 = document.createElement('option');
            option1.value = unitKey;
            option1.textContent = unitInfo.nombre; 
            
            const option2 = document.createElement('option');
            option2.value = unitKey;
            option2.textContent = unitInfo.nombre; 
            
            unidadinput.appendChild(option1);
            unidadoutput.appendChild(option2);
        }
        
        if (unidadoutput.options.length > 1) {
            unidadoutput.selectedIndex = 1;
        }
    }

    //Usamos event listeners en vez de llamar a las funciones desde el html
    categoriaunidad.addEventListener('change', actualizarSelectores);
    convertBtn.addEventListener('click', hacerConversion); 

    // Carga inicial
    actualizarSelectores();
});