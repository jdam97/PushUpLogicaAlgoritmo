let multiplicador = Number(prompt(`Ingrese multiplicador`));
let multiplicando = Number(prompt(`Ingrese multiplicando`));


let mRusa = function (multiplicador,multiplicando) {
    let sumador = 0
    while (multiplicador>=1) {
        if (multiplicador%2 !==0) {
            sumador+=multiplicando
        }
        multiplicador =Math.floor(multiplicador/2) //con floor
        multiplicando =multiplicando*2
    }
    return sumador
}
console.log(mRusa(37,12));
alert(mRusa(multiplicador,multiplicando));
