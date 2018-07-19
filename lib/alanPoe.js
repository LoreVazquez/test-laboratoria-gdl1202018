"use strict";

//funcion anonima autoinvocadas --- para proteger la funcion y no ensuciar el codigo de donde sea requerido. 
(function () {
    var alanPoe = function alanPoe(number) {
        var crow = "";
        for (var i = 0; i < number; i++) {
            crow += "nunca mas";
        }
        return crow;
    };

    if (typeof window == "undefined") {
        console.log("consola");
        module.exports = alanPoe;
    } else {
        window.alanPoe = alanPoe;
    }
})();