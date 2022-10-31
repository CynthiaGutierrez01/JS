// Variables a utilizar

let nombreCliente = 0;
let cobertura = 0;
let relleno = 0;
let precioAlfrajor = 0;
let precioTotal =0;


let nombreCliente = prompt ("ingrese su nombre");
alert("Bienvenido/a "+ nombreCliente + " a La Alfajorera");

let cobertura= prompt("¿Qué baño querés que tengan tus alfajores? Elija 1- Para Chocolate Negro, o, 2- Para Chocolate Blanco");

while (cobertura !="ESC"){
    switch (cobertura){
        case "1":
            alert ( nombreCliente + ' elegiste Chocolate Negro para la cobertura');
            break;
        case "2":
            alert( nombreCliente + " elegiste Chocolate Blanco para la cobertura");
            break;
        default: alert ("Opción invalida")
    }
    cobertura = prompt ("¿Qué baño querés que tengan tus alfajores? Elija 1- Para Chocolate Negro, o, 2- Para Chocolate Blanco");
};

let relleno = prompt (nombreCliente + " ahora toca elegir el relleno");

if(relleno === "dulce de leche"){
    alert ("Relleno elegido: " +relleno);
} else if ( relleno === "nutella"){
    alert ("Relleno elegido: "+ relleno);
} else {
    alert ("no disponemos de ese relleno");
}

// function sumar (cobertura, relleno){
//     return (cobertura + relleno);
// }

    // let relleno = parseInt(prompt ("Ahora vamos a elegir el relleno"));
    
    // if (relleno === "ddl"){
    //     alert ("Ahora vamos a elegir el relleno")}
    
    // else if (gusto == "c"){
    // alert ("Ahora vamos a elegir el relleno")}

    // else (gusto == "m"){
    // alert ("Muchas gracias por su compra!")}

    // let relleno = prompt ("");
    //     do{
    //         switch (relleno){
    //         case "Dulce de leche";
    //         break;

    //         case "Nutella";
    //         break;
    //     }
    //         // // relleno = parseInt(prompt("Qué rellleno le gustaría?");
    //         //                 prompt ("1- Dulce de leche");
    //         //                 prompt ("2- Nutella");
    //         //                 prompt ("3-Salir");
    //     }while (relleno !=3);

    // while (relleno !=="1" && relleno !== "2"){
    //     switch (gusto){
    //         case "Dulce de leche";
    //         break;

    //         case "Nutella";
    //         break;
    //     }
    // }

// let g = prompt ("chocolate");
// switch (g){
//     case "chocolate negro":
//         alert("interior de chocolate");
//         break;
//     case "vainilla";
//         alert("interior de vainilla");
//         break;
// }

