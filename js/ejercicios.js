// /*  1 Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
// Pediremos al usuario que figura queremos calcular su área y según lo introducido
// pedirá los valores necesarios para calcular el área. Para ello has de crear un método
// por cada figura para calcular cada área, este devolverá un número real. Muestra el
// resultado por consola. */

// const Circulo = () => {
//     let radio = parseInt(prompt('Introduce el radio del circulo'))
//     console.log(((radio ** 2) * Math.PI))
// }
// const Triangulo = () => {
//     let base = parseInt(prompt('Introduce la base'));
//     let altura = parseInt(prompt('Introduce la altura'))
//     console.log(base * altura) / 2
// }

// const Cuadrado = () => {
//     let lado = parseInt(prompt('Introduce el lado'))
//     console.log(lado *= lado);
// }

// let select = prompt('Para saber el area, escribe (Circulo, Triangulo, Cuadrado)');

// switch (select) {
//     case 'Circulo':
//         Circulo();
//         break;

//     case 'Triangulo':
//         Triangulo()
//         break;

//     case 'Cuadrado':
//         Cuadrado()
//         break;

//     default:
//         console.log('Esa figura no esta disponible');
//         break;
// }
//----------------------------------------------------------------------------------------

// /*
//  2 Crea una aplicación que nos genere una cantidad de números enteros aleatorios
// pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
// entre que números queremos que los genere, podemos pedirlas al usuario antes de
// generar los números. Este método devolverá un número entero aleatorio. Muestra
// estos números por consola.
// */
// const RandomNumber = () => {
//     let cantidad = parseInt(prompt('Indica cuantos numeros quieres generar'));
//     let min = parseInt(prompt('Indica el valor minimo'));
//     let max = parseInt(prompt('Indica el valor maximo'));
//     for (let i = 0; i < cantidad; i++) {
//         console.log(Math.floor(Math.random() * (max - min) + min))
//     }
// }

// RandomNumber();

// /*
//  3 Crea una aplicación que nos pida un número por prompt y con un método se lo
// pasamos por parámetro para que nos indique si es o no un número primo, debe
// devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
// entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
// embargo, 17 si es primo.
// */

// let numero = parseInt(prompt('Introduce un numero'));
// const Primo = (numero) => {
//     // Comprobamos que el numero no es par, y es diferente a 2. Solo el 2 es un par primo,descartamos nº 1
//     if (numero < 2 || (numero % 2 == 0 && numero!=2)) {
//         return false;
//     }
//     //9 no es primo, los anteriores impares si, evaluamos el modulo entre el numero y el iterador 
//     for (let i = 3; i*i<=numero ; i+=2) {
//         if(numero % i == 0){
//             return false;
//         }
//     }
//     return true
// }

// console.log(Primo(numero));


// /*
//  4 Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
// realizara mediante un método al que le pasamos el número como parámetro. Para
// calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
// ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.
//  */

// let numero = parseInt(prompt('Introduce un numero para calcular su factorial))

// const Factorial = (numero) => {
//     for (let i = (numero -1) ; i > 0; i--) {
//         numero *= i;
//     }
//     return numero
// }

// console.log(Factorial(5))


// /*
//  5 Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
// realizará un método al que le pasaremos el número como parámetro, devolverá un
// String con el numero convertido a binario. Para convertir un número decimal a
// binario, debemos dividir entre 2 el número y el resultado de esa división se divide
// entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
// cada división formara el número binario, de abajo a arriba.
// */

// const EnteroAbinario = (numero) => {
//     let binario = [];
//     // Bucle para ir dividiendo entre 2 hasta llegar a 0
//     while (numero !== 0) {
//         let dividendo = Math.floor(numero / 2)
//         let resto = parseInt(numero%2);
//         numero = dividendo;
//         binario.push(resto);
//     }
//     // Damos la vuelta al array
//     return binario.reverse();
// }

// console.log(EnteroAbinario(20));

// /*
//  6 Crea una aplicación que nos cuente el número de cifras de un número entero positivo
// (hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
// pasando el número por parámetro devolverá el número de cifras.
// */


// let numero = parseInt(prompt('Introduce un numero entero positivo'))

// const ContarCifras = (num) => {
//     console.log(Math.sign(num))
//     if(Math.sign(num) != 1){
//         console.log('El dato introducido no es un numero entero positivo');
//     }else{
//         let numeroContar = "";
//         numeroContar += num
//         return numeroContar.length
//     }

// }

// console.log(ContarCifras(numero))

// /*
//   7 Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
//     a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
//     parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
//     devolverá ningún valor, mostrará un mensaje indicando el cambio.
// */

// let cantidad = parseInt(prompt('Introduce la cantidad de € a cambiar'));
// let divisa = prompt('Introduce una de las siguientes divisas (dolar,yenes,libras)');

// const CambioDivisa = (cantidad, divisa) => {
//     let cambio = 0
//     switch (divisa) {
//         case 'libras':
//             cambio = cantidad * 0.86;
//             console.log(cantidad + '€ son ' + cambio + ' libras')
//             break;
//         case 'dolar':
//             cambio = cantidad * 1.28611;
//             console.log(cantidad + '€ son ' + cambio + ' dolares')
//             break;
//         case 'yenes':
//             cambio = cantidad * 129.852;
//             console.log(cantidad + '€ son ' + cambio + ' yenes')
//             break;
//         default:
//             'La divisa introducida no es correcta';
//             break;
//     }
// }

// CambioDivisa(cantidad, divisa);

// /*
//     8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra
//     por consola el índice y el valor al que corresponde. Haz dos métodos, uno para
//     rellenar valores y otro para mostrar.
// */



// const RellenarValores = () => {
//     let array = [];
//     for (let i = 0; i < 10; i++) {
//         let numero = parseInt(prompt('Introduce un numero'));
//         array.push(numero);
//     }
//     return array;
// }

// const MostrarNumeros = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         let indice = i + 1
//         console.log('Indice ' + indice + ' : ' + array[i])
//     }
// }

// MostrarNumeros(RellenarValores());

/*
    9. Crea un array de números donde le indicamos por prompt el tamaño del array,
    rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
    el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
    método para rellenar el array(que tenga como parámetros los números entre los que
    tenga que generar) y otro para mostrar el contenido y la suma del array.
*/


const CrearValores = () => {
    let number = parseInt(prompt('Indica el tamaño del array'));
    let array = [];
    for (let i = 0; i < number; i++) {
        let nRandom = Math.floor(Math.random() * (0, 9))
        array.push(nRandom);
    }
    return array;
}

const MostrarSumar = (array) => {
    array.map(number => console.log(number))
    let suma = 0; 
    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    }
    console.log('La suma total es: ' + suma);
}

MostrarSumar(CrearValores());