//EJERCICIO 1


let topping;
let precio;
let precioFinal;
const helado = 25; // Valor numérico del helado

if (topping === "Oreo") {
  precio = 10;
} else if (topping === "KitKat") {
  precio = 15;
} else if (topping === "Kinder") {
  precio = 25;
} else {
  console.log("No tenemos este topping.");
}

if (precio !== undefined) {
  precioFinal = helado + precio;
  console.log("El helado cuesta $" + precioFinal);
}


//EJERCICIO 2


// Simulación de pedido con switch
let pedido = "verdura"; // Tipo de pedido: carne, pescado o verdura

switch (pedido) {
  case "carne":
    console.log("Como bebida, le ofrecemos vino tinto.");
    break;
  case "pescado":
    console.log("Como bebida, le ofrecemos vino blanco.");
    break;
  case "verdura":
    console.log("Como bebida, le ofrecemos agua.");
    break;
  default:
    console.log("Por favor, elija carne, pescado o verdura.");
}

// Recorriendo un array con for
let datos = ["dato1", "dato2", "dato3"];

for (let i = 0; i < datos.length; i++) {
  console.log("Elemento: " + datos[i]);
}

// Recorriendo un array nuevamente con for
for (let i = 0; i < datos.length; i++) {
  console.log("Elemento: " + datos[i]);
}

// Ciclo while con una variable incrementada
let numero = 1;

while (numero < 11) {
  console.log(numero + " es más chico que 11");
  numero++;
}