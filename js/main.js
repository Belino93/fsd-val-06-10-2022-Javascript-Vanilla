// let dia = 'Jueves';

// var mes = 'Octubre';

// function Fecha(){
//     let dia = 'Miercoles';
//     var mes = 'Noviembre'
//     console.log(dia);
//     console.log(mes);
// }

// Fecha();
// console.log(dia);
// console.log(mes);

// const cocaCola = "azucar";

// // Esto generaria un error, dado que cocaCola ha sido declarado previamente como constante por lo tanto no es posible actualizar su valor
// cocaCola = 'agua';

// console.log(cocaCola);

// Function VS Arrow-Functions

// function Multiplicar(num1, num2) {
//     return num1 * num2;
// }

// const Multiplicar2 = (num1, num2) => {return num1*num2};

// console.log(Multiplicar2(2,5));

// const Dividir = (num1, num2) => num1/num2
// console.log(Dividir(10,2))

// const Exponente = numero => numero**2;

// console.log(Exponente(3))

// ------------------MAL----------------------------
// const Pokemon = nombre => {monster : nombre};
// ------------------BIEN-----------PARA DEVOLVER OBJETOS TIENE QUE IR ENTRE PARENTESIS-----------------
// const Pokemon2 = nombre => ({monster : nombre});

// let boton = Pokemon2('Charmander');
// console.log(boton)

// Uso practico arrow functions

// let fruta = ['manzana', 'pera', 'fresa', 'platano', 'albaricoque']

// let frutasPlurales = fruta.map(postre => postre + 's')

// console.log(frutasPlurales)

// let numeros = [25, 38, 42, 57, 112];

// let numerosMapeados = numeros.map(cifra => cifra * 3)

// console.log(numerosMapeados);

// const precioFinalImpuesto = (precio, impuesto = 1.21) => precio * impuesto

// console.log(precioFinalImpuesto(1200))

// const NombreRobot = (prefijo = 'RX') => prefijo + (parseInt(Math.random() *999))

// console.log(NombreRobot())


// /* SPREAD*/
// const Esparcir = (name, ps, atk, def, speed) => {
//     console.log("Nombre: ", name);
//     console.log("Vida: ", ps);
//     console.log("Ataque: ", atk);
//     console.log("Defensa: ", def);
//     console.log("Velocidad: ", speed);
// }
// let Pokemon = ["Pikachu", 35, 55, 40, 90];
// let conquitador = ["Raditz", 40, 66, 30, 99];

// //-----------------MAL--------------------------
// // esparcir(Pokemon[0], Pokemon[1], Pokemon[2], Pokemon[3],Pokemon[4])

// //---------------BIEN-------------
// /* La propiedad spread reparte las distintas posiciones del array 
//     en los argumentos de la funcion. siempre por orden.*/
// Esparcir(...Pokemon);
// Esparcir(...conquitador);

// //--------------REST---------------

// const Agrupar = (...argumentos) => {
//     console.log(argumentos);
// };

// Agrupar(1,2,3,4,5);
// Agrupar(1,2);
// Agrupar(1,1,1,1,1,1,1,1,1,1,1,1);

// // Se propone generar una funcion que usando REST. Le pasamos varios argumentos, correspondiente a las habilidades de un luchador o luchadora y posteriormente las mostrará por console.log, a cada habilidad le sumara un valor random del 1 al 10.
// const habilidades = (...argumentos) => {
//     let aleatorio = (Math.floor(Math.random() * 10));

//     let nuevoArray = argumentos.map(numero => numero + aleatorio);
//     console.log(nuevoArray)
// }

// habilidades(50, 60, 40, 30);

// /* STRINGS LITERALES */
// let favorito = prompt('Dime tu compañero favorito');

// console.log(`Hola ${favorito}`);


/* DESESTRUCTURIZACION DE OBJETO */
// let comida = ['spaghetti', 'sushi', 'paella', 'arroz al horno', 'pizza'];

// let [uno, dos, tres, cuatro, cinco] = comida;

// console.log(tres)

let objeto = {
    grupo1 : 'Pink Floyd',
    grupo2 : 'Joan Macarra',
    grupo3 : 'Bad Bunny'
}

// Creo la desestructuracion de objeto

let {grupo1: rock, grupo2: punk, grupo3:trap_latino} = objeto;

console.log(rock, punk, trap_latino);