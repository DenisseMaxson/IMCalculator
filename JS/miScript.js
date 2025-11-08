class CalculadoraIMC {


    //pequeña validacion de peso y altura
    calcular(peso, altura) {
        if (altura <= 0 || peso <= 0) {
            throw new Error("Peso y altura deben ser valores positivos.");
        }

        //formula para IMC
        return peso / (altura * altura);
    }
    

    //FUNCION PARA DETETMINAR LA CATEGORIA
    determinarCategoria(imc) {
        //aqui declare lo que se muestra cuando se determina la categoria
        let categoria, mensaje, imagen; 
         
        //aqui es donde dependiendo del indice de IMC se evalua el estado en el que se encuentra el usuario
        if (imc < 18.5) {
            categoria = "Bajo Peso";
            mensaje = "Estás bajo de peso, alimentate mejor ( • ᴖ • ｡)";
            imagen = "https://media.istockphoto.com/id/1400036056/vector/thumb-down-emoticon.jpg?s=170667a&w=0&k=20&c=-CxYLAm2SzPoYtHczqsZqIEXAazLS1BX4AP2WLgQSI0="; 

        } else if (imc < 25) {
            categoria = "Peso Normal";
            mensaje = "Tienes un peso saludable, ¡Felicidades! ⸜(｡˃ ᵕ ˂ )⸝♡";
            imagen = "https://media.tenor.com/vk8eiNAVqeQAAAAm/blue-thumbs-up-guy-blue.webp"; 

        } else if (imc < 30) {
            categoria = "Sobrepeso";
            mensaje = "Tienes sobrepeso, toca ir al gym 💪( ･ᴗ･💪)";
            imagen = "https://media.istockphoto.com/id/156817388/vector/threatening-emoticon.jpg?s=612x612&w=0&k=20&c=i_1F3t1Y7N31lbDNhEDB94mc8l10qFVbWypmuZq1wsw="

        } else {
            categoria = "Obesidad";
            mensaje = "Nivel de obesidad. Busca ayuda profesional (*￣∇￣)ノ";
            imagen = "https://http2.mlstatic.com/D_NQ_NP_991573-MLM81207529052_122024-O.webp"

        }

        //aqui se retorna finalmente cada valor de la categoria
        return { categoria, mensaje, imagen }; 
    }
}

const calculadora = new CalculadoraIMC();
const btnCalcular = document.getElementById('btn-calcular-imc');

btnCalcular.addEventListener('click', () => {
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        
        const spanValorIMC = document.getElementById('valor-imc');
        const spanCategoria = document.getElementById('categoria-imc');
        const imgIMC = document.getElementById('imagen-imc');

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            spanCategoria.textContent = "Ingresa datos válidos.";
            imgIMC.style.display = 'none';
            return;
        }

        // aqui se usan los metodos que ya definimos de calcular y determinarCategoria
        const imc = calculadora.calcular(peso, altura);
        const resultado = calculadora.determinarCategoria(imc);

        // Mostrar resultados en el DOM
        spanValorIMC.textContent = imc.toFixed(2);
        spanCategoria.innerHTML = `${resultado.categoria}: ${resultado.mensaje}`;

        imgIMC.src = resultado.imagen;
        imgIMC.alt = resultado.categoria;
        imgIMC.style.display = 'block';


    } 
);