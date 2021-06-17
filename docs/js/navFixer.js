// 
var propSubMenu = { 
    seccion2: document.getElementById('portada'),
    seccion: document.getElementById('nav_deporte'),
    recorrido: null,
    limite: null
} 

var metSubMenu ={ 
    inicio: function(){
        window.addEventListener('scroll', metSubMenu.scrollMenu);
    },

    scrollMenu: function(){
        propSubMenu.recorrido = window.pageYOffset;
        propSubMenu.limite = propSubMenu.seccion2.offsetHeight;

        if (propSubMenu.recorrido >= propSubMenu.limite){
            propSubMenu.seccion.style.position = 'fixed';
            propSubMenu.seccion.style.top = '0';
            propSubMenu.seccion.transition = '9s';
        } else {
            propSubMenu.seccion.style.position = '';
            propSubMenu.seccion.style.top = '';
        }

    }
} 

metSubMenu.inicio();
