// evento LOAD - cunado carge la página , me realizra la siguiente función
window.addEventListener('load', function () {

    new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        },
        responsive: [{
                // screens greater than >= 775px
                breakpoint: 450,
                settings: {
                    slidesToShow: '3',
                    slidesToScroll: '3'
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4.5
                }
            }
        ]
    });


    new Glider(document.querySelector('.carousel__l'), {
        slidesToShow: 1.2,
        slidesToScroll: 1.2,
        dots: '.carousel__i',
        draggable: true,
        arrows: {
            prev: '.anterior--two',
            next: '.siguiente--two'
        },
        responsive: [{
                // screens greater than >= 775px
                breakpoint: 450,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: '3',
                    slidesToScroll: '3'
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 4.5
                }
            }
        ]
    });

    const input = document.querySelectorAll('.carousel .carousel__controladores');

    for(var i = 0; i < input.length; i++){
        console.log(input[i].ariaDisabled);

        if(input[i].ariaDisabled == 'true' ){
            input[i].style.display = 'none';
        }
       
        input[i].addEventListener('click', function () {
            for(var i = 0; i < input.length; i++){
                if(input[i].ariaDisabled == 'false'){
                    input[i].style.display = 'block';
                } else if (input[i].ariaDisabled == 'true')   {
                    input[i].style.display = 'none';
                } 
            }
        });
    
    }

    // flechaAnterior.setAttribute('class', 'hola');
    // flechaAnterior = document.querySelector('.carousel--anterior');
    // var flechaSiguiente = document.getElementsByClassName('carousel__controladores');

    // button = document.querySelector('.button');
    // // button2 = button.length;

    // for(i=0; i < flechaSiguiente.length; i++){
    //         console.log(flechaSiguiente[i]);
    // }

    // button.addEventListener('click', function(){
    //     for(i=0; i < button.length; i++){
    //         console.log(button[i]);
    //         alert('hola');
    //     }


    // });


    // uno = flechaAnterior.style.display = 'none';
    // uno = false

    // flechaSiguiente.addEventListener('click', function(){
    //     // for(i=0; i<1; i++){

    //     // }
    //     console.log(flechaSiguiente);

    //     // for(i=0; i < flechaSiguiente.length; i++){
    //     //     console.log(flechaSiguiente[i]);
    //     // }

    //     // if (uno == false ){
    //     //     flechaAnterior.style.display = 'block';
    //     // } 
    //     // else if (  == true){
    //     //     flechaAnterior.style.display = 'none';
    //     // }
    // });
});

////////////
var acc = document.getElementsByClassName("acordeon__title");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("accordion__active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}