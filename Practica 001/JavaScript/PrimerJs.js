// ------Las variables de escriben con la palabra "var" seguido del nombre que esta va a tener

var nombre; 
var edad;

// ------prompt es para que el usuriaingrese texto, al menos hace falta unas comillas, las segunda son opsionales (es el texto dentro del cuadro donde escribis)

//nombre = prompt("Ingresa tu nombre", "Como te llamas?");
//edad = prompt("Cuantos años tenes?");

// ------ Vasrias forma de mostrar texto en la pagina
// ------ Console.log no muestra el texto directamente, aparece en la consola (todabia no se como aplicarlo)
// ------ Document.write escribe directamente en la pagina
// ------ Alert muestra el texto en una ventana emergente

//console.log(nombre);
//document.write(nombre +" " + edad);
//alert(nombre + " Sos un capo");



//var numero = prompt("elegi un numero");

//Array: pueden tener valores de cualquier tipo dentro del mismo array (meszclando texto con numeros o cosas asi)
var amigos = ["Luis" ,"Gonzalo", "Agustin"];
//alert(amigos[numero]);

//amigos[1] = "Castor"; //  Aca le cambie el valor al segundo elemento del array (Gonzalo ==> Castor)


//amigos[3] = "Leito"; //  agrego al Array el elemento Leito a la pocicion 3 (Que antes no existia)


//alert("El array tiene " + amigos.length + " elementos");

//amigos.push("Pepe" , "Rogelio");

//alert("El array tiene " + amigos.length + " elementos");

//amigos.pop();

//alert("El array tiene " + amigos.length + " elementos");

//var amigos2 = ["Ochoa" ,"Arroyo", "Sanches"];

//var amigos3 = amigos.concat(amigos2);

//alert(amigos3);

var amigos2 = amigos.sort();
alert(amigos2);