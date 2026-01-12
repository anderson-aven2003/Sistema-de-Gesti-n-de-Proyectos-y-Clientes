let map = new Map([
    ["nike",{precio: 2000, stock: 5}],
    ["adidas",{precio: 1500, stock: 10}],
    ["puma",{precio: 1000, stock: 8}]
]);

for(let [key, value] of map){
    console.log(`Marca: ${key} - Precio: ${value.precio} - Stock: ${value.stock}`);
}

console.log(map)