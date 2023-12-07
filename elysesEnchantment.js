const newArray = new Array();
newArray.push('Erick', 'Ana', 'Liz');
console.log(typeof(newArray[0]));
console.log(newArray.length);
newArray.splice(1)
console.log(newArray);
console.log(newArray.length);
newArray.length = 7;
console.log(newArray);
// Forma de validar si lo que tienes es un array
console.log(typeof newArray);
console.log(Array.isArray(newArray));
const object = {};
console.log(Array.isArray(object));


newArray.forEach((name) => {
    console.log(name);
})

