document.addEventListener ('DOMContentLoaded'), function () {
    const button = document.getElementById('button');

    function chamandoButton () {
        console.log ('fui clicado');
    }
    button.addEventListener ( 'click, chamandoButton');
};







function Convertorparacelsius (fahrenheit) { return (fahrenheit - 32)* 5 / 9 };

let temperatutafahrenheit = prompt
let temperaturaparacelsius = Convertorparacelsius (temperatutafahrenheit);
console.log (temperaturaparacelsius);