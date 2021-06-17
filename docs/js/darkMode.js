// const bdark = document.querySelector('#bdark');
// const body = document.querySelector('body');

// load();

// bdark.addEventListener('click', e => {
//     body.classList.toggle('dark__mode');
//     store(body.classList.contains('dark__mode'));
// });

// function load(){
//     const darkmode = localStorage.getItem('darkmode');

//     if(!darkmode){
//         store('false');
//     } else if (darkmode == 'true'){
//         body.classList.toggle('dark__mode');
//     }

// }

// function store(value){
//     localStorage.setItem('darkmode', value);
// }


//////////////



var propDarkMode = {
    bdark: document.querySelector('#bdark'),
    body:  document.querySelector('body')
}

var metDarkMode = {
    modoDark: function(){
        propDarkMode.bdark.addEventListener('click', metDarkMode.inicioDark, metDarkMode.load);
    },
    inicioDark: function(){
        propDarkMode.body.classList.toggle('dark__mode');
        metDarkMode.store(propDarkMode.body.classList.contains('dark__mode'));
    },
    load: function(){
        darkmode = localStorage.getItem('darkmode');
        if(!darkmode){
            store('false');
        } else if (darkmode == 'true'){
            propDarkMode.body.classList.toggle('dark__mode');
        }
    },
    store: function(value){
        localStorage.setItem('darkmode', value);
    }
}

metDarkMode.modoDark();
metDarkMode.load();

