//declarando variables
let num_uno=10;
let num_dos=4;
let nombre="Joseph Chipana";
let distrito="SJL"
let programador=true;
// probando la funcion prompt
let edad=prompt("Ingrese su edad");
let ciudad=prompt("Ingrese una Ciudad")

//impresion de variables con cada tipo de dato
console.log(nombre)
console.log(typeof nombre)
console.log(edad)
console.log(typeof edad)
console.log(ciudad)
console.log(typeof ciudad)
console.log(distrito)
console.log(typeof distrito)
console.log(programador)
console.log(typeof programador)

// concatenacion moderna
let mensaje=`Hola mi nombre es ${nombre} tengo ${edad} soy de la ciudad de ${ciudad} del distrito de ${distrito} y soy programdor ${programador}`;

//mostrando mensaje con la funcion Alert
alert(mensaje)
console.log(mensaje)

//Operaciones basicas en consola
console.log("Mostrando Operaciones basicas +,-,*,/")
console.log("-------------------------------------")
let suma = num_uno+num_dos;
let resta = num_uno-num_dos;
let mult = num_uno*num_dos;
let division = num_uno/num_dos;
console.log(`la suma de: ${Number(num_uno)} + ${Number(num_dos)} = ${suma}`)
console.log(`la suma de: ${Number(num_uno)} - ${Number(num_dos)} = ${resta}`)
console.log(`la suma de: ${Number(num_uno)} * ${Number(num_dos)} = ${mult}`)
console.log(`la suma de: ${Number(num_uno)} / ${Number(num_dos)} = ${division}`)