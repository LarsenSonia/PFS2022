"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombre;
var nota;
var practica;
var ejercicios;
var teorica;
var notap; //para determinar los porcentajes
var notae;
var notat;
var stringVacio = false;
while (stringVacio == false) {
    nombre = rls.question("Ingrese el nombre del alumno: ");
    if (nombre != "") {
        stringVacio = false; //vacio
        practica = rls.questionFloat("Ingrese la nota de practica: ");
        ejercicios = rls.questionFloat("Ingrese la nota de ejercicios: ");
        teorica = rls.questionFloat("Ingrese la nota de teorica: ");
        notap = 10 * practica / 100;
        notae = 50 * ejercicios / 100;
        notat = 40 * teorica / 100;
        nota = notap + notae + notat;
        if ((practica >= 0) && (practica <= 10) && (ejercicios >= 0) && (ejercicios <= 10) && (teorica >= 0) && (teorica <= 10)) {
            console.log("Resultado: ", nota);
        }
        else {
            console.log("Error. Las notas deben estar comprendidas entre 0 y 10");
        }
    } //vacio 
    else {
        stringVacio = true;
    }
} //while
