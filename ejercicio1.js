const vehiculos = [
    { marca: "Toyota", matricula: "ABC123", puertas: 4, precio: 20000, tipo: "Sedan" },
    { marca: "Honda", matricula: "DEF456", puertas: 2, precio: 18000, tipo: "Hatchback" },
    { marca: "Ford", matricula: "GHI789", puertas: 4, precio: 22000, tipo: "SUV" },
    { marca: "Chevrolet", matricula: "JKL012", puertas: 4, precio: 23000, tipo: "Pickup" },
    { marca: "Nissan", matricula: "MNO345", puertas: 2, precio: 21000, tipo: "Coupe" },
    { marca: "Mazda", matricula: "PQR678", puertas: 4, precio: 19000, tipo: "Convertible" },
    { marca: "Volkswagen", matricula: "STU901", puertas: 3, precio: 20000, tipo: "Wagon" },
    { marca: "Subaru", matricula: "VWX234", puertas: 4, precio: 24000, tipo: "Crossover" },
    { marca: "Kia", matricula: "YZA567", puertas: 4, precio: 17000, tipo: "Minivan" },
    { marca: "Hyundai", matricula: "BCD890", puertas: 5, precio: 18000, tipo: "Sedan" },
    { marca: "BMW", matricula: "EFG123", puertas: 2, precio: 35000, tipo: "Coupe" },
    { marca: "Audi", matricula: "HIJ456", puertas: 4, precio: 40000, tipo: "SUV" },
    { marca: "Mercedes", matricula: "KLM789", puertas: 4, precio: 45000, tipo: "Sedan" },
    { marca: "Tesla", matricula: "NOP012", puertas: 4, precio: 60000, tipo: "Electric" },
    { marca: "Volvo", matricula: "QRS345", puertas: 4, precio: 38000, tipo: "SUV" },
    { marca: "Jaguar", matricula: "TUV678", puertas: 4, precio: 55000, tipo: "Sedan" },
    { marca: "Land Rover", matricula: "WXY901", puertas: 4, precio: 65000, tipo: "SUV" },
    { marca: "Porsche", matricula: "ZAB234", puertas: 2, precio: 90000, tipo: "Coupe" },
    { marca: "Lexus", matricula: "CDE567", puertas: 4, precio: 42000, tipo: "Sedan" },
    { marca: "Infiniti", matricula: "FGH890", puertas: 4, precio: 45000, tipo: "SUV" },
    { marca: "Toyota", matricula: "IJK123", puertas: 2, precio: 18000, tipo: "Coupe" },
    { marca: "Chevrolet", matricula: "LMN456", puertas: 4, precio: 25000, tipo: "SUV" },
    { marca: "Nissan", matricula: "OPQ789", puertas: 3, precio: 22000, tipo: "Hatchback" },
    { marca: "Ford", matricula: "RST012", puertas: 4, precio: 32000, tipo: "Minivan" },
    { marca: "Kia", matricula: "UVW345", puertas: 2, precio: 15000, tipo: "Coupe" },
    { marca: "Honda", matricula: "XYZ678", puertas: 4, precio: 21000, tipo: "SUV" },
    { marca: "Mazda", matricula: "AAB901", puertas: 4, precio: 19000, tipo: "Sedan" },
    { marca: "BMW", matricula: "BCC234", puertas: 2, precio: 35000, tipo: "Convertible" },
    { marca: "Audi", matricula: "DDE567", puertas: 4, precio: 42000, tipo: "Wagon" },
    { marca: "Mercedes", matricula: "EFF890", puertas: 4, precio: 45000, tipo: "Sedan" },
    { marca: "Volkswagen", matricula: "GGH123", puertas: 3, precio: 20000, tipo: "Hatchback" },
    { marca: "Subaru", matricula: "HHI456", puertas: 4, precio: 26000, tipo: "Crossover" },
    { marca: "Hyundai", matricula: "IIJ789", puertas: 4, precio: 18000, tipo: "Sedan" },
    { marca: "Volvo", matricula: "JJK012", puertas: 4, precio: 35000, tipo: "SUV" },
    { marca: "Jaguar", matricula: "KLM345", puertas: 4, precio: 55000, tipo: "Sedan" },
    { marca: "Lexus", matricula: "LMN678", puertas: 4, precio: 43000, tipo: "SUV" },
    { marca: "Toyota", matricula: "MNO901", puertas: 4, precio: 25000, tipo: "Sedan" },
    { marca: "Chevrolet", matricula: "NOP234", puertas: 2, precio: 27000, tipo: "Coupe" },
    { marca: "Nissan", matricula: "OPQ567", puertas: 4, precio: 23000, tipo: "Sedan" },
    { marca: "Ford", matricula: "PQR890", puertas: 4, precio: 30000, tipo: "SUV" },
    { marca: "Honda", matricula: "QRS123", puertas: 3, precio: 22000, tipo: "Wagon" },
    { marca: "Mazda", matricula: "RST456", puertas: 4, precio: 24000, tipo: "Crossover" },
    { marca: "Volkswagen", matricula: "STU789", puertas: 4, precio: 26000, tipo: "Sedan" },
    { marca: "Subaru", matricula: "TUV012", puertas: 2, precio: 22000, tipo: "Coupe" },
    { marca: "Hyundai", matricula: "UVW345", puertas: 5, precio: 19000, tipo: "Hatchback" },
    { marca: "Volvo", matricula: "VWX678", puertas: 4, precio: 37000, tipo: "SUV" },
    { marca: "Jaguar", matricula: "XYZ901", puertas: 4, precio: 56000, tipo: "Sedan" },
    { marca: "Lexus", matricula: "YZA234", puertas: 4, precio: 45000, tipo: "SUV" },
    { marca: "Toyota", matricula: "ZAB567", puertas: 2, precio: 22000, tipo: "Coupe" }
];

/* filter: devuelve un nuevo array con los elementos que cumplan la condición indicada
Ejemplo: si tenemos un array llamado personas de objetos con nombre y edad
- obtener todos los llamados Pedro: personas.filter( p => p.nombre == "Pedro");
- obtener mayores de edad: personas.filter( p => p.edad >= 18);
- obtener las personas entre 18 y 67 años: personas.filter(p => p.edad >=18 && p.edad <= 67)
- obtener las personas cuyo nombre comience por a: personas.filter( p => p.nombre.starsWith("a"))
*/

console.log("Todos los vehiculos de la marca Toyota"); // son 4

console.log("Todos los vehiculos con 4 puertas"); // Son 33

console.log("Todos los vehiculos de más de 30000 euros"); // Son 21

console.log("Todos los vehiculos de la más de 3000 euros y menos de 50000"); //Son 15

console.log("Todos los vehiculos de 4 puertas y tipo SUV"); // Son 21

console.log("Todos los vehiculos de 4 puertas, tipo SUV y de Toyota"); // Son 2


/* map: devuelve un nuevo array con los elementos procesados según la función indicada
Ejemplo: si tenemos un array llamado personas de objetos con nombre y edad
- obtener todos los nombres: personas.map( p => p.nombre);
- obtener todos los nombres y un atributo mayor con el valor true si es mayor de edad y false si no:
    personas.map( p => { return {nombre: p.nombre, mayor: p.edad >= 18} })

    Ved que es necesario { } y el return en estos casos para devolver un nuevo objeto

- obtener las personas entre 18 y 67 años: personas.map(p => p.edad >=18 && p.edad <= 67)
- obtener las personas cuyo nombre comience por a: personas.filter( p => p.nombre.starsWith("a"))
*/

console.log("Todas las marcas (pueden aparecer repetidos)");

console.log("Todos los tipos (pueden aparecer repetidos)"); 

console.log("Todos las precios con un 21% de IVA");

console.log("Devolver objetos con la marca, puertas y precio");

// filter y luego map
console.log("Todos las marcas (pueden aparecer repetidos) con 4 puertas");

// filter y luego map
console.log("Devolver objetos con la matrículas, puertas y precio de los Ford");


/* every devuelve true si todos los elementos del array cumplen la condición indicada
Ejemplo: si tenemos un array llamado personas de objetos con nombre y edad
- comprobar si todas las personas tiene más de 30 años: personas.every( p => p.edad > 30);
- comprobar si todas las personas se llaman Pedro: personas.every( p => p.nombre == "Pedro");
*/

console.log("Si todos los vehículos tienen 4 puertas"); // false

console.log("Si todos los vehículos tienen 2 o más puertas"); // true

// Se puede hacer todo como every pero probar con un filter y luego every
console.log("Si todos los vehículos Toyota tienen 4 o más puertas"); // false


/* some devuelve true si alguno de los elementos del array cumplen la condición indicada
Ejemplo: si tenemos un array llamado personas de objetos con nombre y edad
- comprobar si alguna persona tiene más de 30 años: personas.some( p => p.edad > 30);
- comprobar si alguna persona se llama Pedro: personas.some( p => p.nombre == "Pedro");
*/

console.log("Si algún vehículo tiene 5 puertas"); // true

console.log("Si algún vehículo tiene 5 puertas y es de Hyundai"); // true

/* reduce devuelve un solo valor. La función recibe el primer y segundo elemento del array, devolvemos uno de ellos
y se le pasa al tercer elemento del array y así sucesivamente.
Ejemplo: si tenemos un array llamado personas de objetos con nombre y edad
- devolver la persona de mayor edad: personas.reduce((p1, p2) => p1.edad > p2.edad ? p1 : p2)
- devolver la mayor edad: personas.reduce((p1, p2) => p1.edad > p2.edad ? p1 : p2).edad
- devolver la suma de las edades: personas.map(p => p.edad).reduce((e1, e2) => e1 + e2)
*/

console.log("El vehículo más caro (el primero de ellos)");

console.log("El precio más barato (el primero de ellos)");

// filter y reduce
console.log("El vehículo más caro de Toyota (el primero de ellos)");

console.log("El vehículo más caro de Toyota con 4 puertas (el primero de ellos)");
