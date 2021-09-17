//Código del cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;

// console.log("Los lados del cuadrado miden: " + ladoCuadrado);

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
} 
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado)

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: "+ areaCuadrado + "cm2")

console.groupEnd();
//Código del triángulo
console.group("Triangulo")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(`Los lados del Triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm `);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del Triangulo es: "+ perimetroTriangulo)

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del Triangulo es: "+ areaTriangulo + "cm2")

console.groupEnd();

console.group("Circulo")
const radioCirculo = 4;
const diametroCirculo= radioCirculo * 2;
const PI = Math.PI;

//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del Circulo es: "+ perimetroCirculo)

const areaCirculo = (radioCirculo * radioCirculo)*PI;
console.log("El área del Circulo es: "+ areaCirculo + "cm2")

console.groupEnd();