//Reto 1 Nfibonacci
let n = prompt(`Ingrese un número(n)`)
//let m = prompt(`¿cuantos numeros de secuencia desea ver de fibonacci? (m) `)

let nfibonacci = function (n,m){
    if (n>40) { // no acepta números mayores a 40
        return alert(`${n} No es un numero de fibonacci`)
    }
    else{
        if (n<=1) {return n}

        else return nfibonacci(n-1)+nfibonacci(n-2);
        
    }
}
alert(`Número fibonacci: ${nfibonacci(n)}`);
