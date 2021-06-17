propMenu = {
    burgen_menu: document.getElementById('burgen_menu'),
    close: document.querySelector('.menu__close'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu__content a')
}

metMenu = {
    inicioMenu: function(){
        propMenu.burgen_menu.addEventListener('click', metMenu.toggleMenu);
        propMenu.close.addEventListener('click', metMenu.ocultarMenu);

        for (var i = 0; i < propMenu.elem_menu.length; i++) {
			propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
		}
    },
    toggleMenu: function(){
        if (propMenu.menu_activo == false){ 
            propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
        } else {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className =  propMenu.slideMenu.className.replace('active', '');
        }
    },
   ocultarMenu: function () {
		propMenu.menu_activo = false;
		propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
	}
}

metMenu.inicioMenu();
