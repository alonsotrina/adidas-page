// alert('page contador');

addEventListener('DOMContentLoaded', ()=> {

    const contadores = document.querySelectorAll('.contador__cantidad')
    const velocidad = 1000


    const animarContadores = () => {
        for( const contador of contadores){
            const actulizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal, // convertir el valor  enteros
                valor_actual = +contador.innerText,
                incremento = cantidad_maxima / velocidad

                if(valor_actual < cantidad_maxima){
                    contador.innerText =  Math.ceil(valor_actual + incremento) // redondea el numero al entero mas cerano
                    setTimeout(actulizar_contador, 15)
                } else {
                    contador.innerText = cantidad_maxima
                }

            }
            actulizar_contador()
        }
    }

    // API - IntersectionObserver 

    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            // condicion para ver si el elemento se ve en la pantalla
            if(elemento.isIntersecting){
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')

                // ejecutar la función
                setTimeout(animarContadores,1000)
            }
        });
    }

    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 // mostrar los elemntos al 75% de la pantalla  -- 0 -1 
    })

    const elementosHtml = document.querySelectorAll('.contador')
    elementosHtml.forEach(elementoHtml => {
        observer.observe(elementoHtml)
    })
}) 





// var hola = document.getElementById('hola');
// var dos = document.querySelector('.imageSeccion');


// hola.addEventListener('click', function(){
//     dos.classList.add('newClass');
// });