//numeros amistosos
let arraysuma=[]
for (let i=1000; i<1500; i++) {
    let sum = 0
    for (let j=1; j<i; j++) {
        if (i%j===0) {    
            sum+=j 
        }    
    }
    arraysuma.push(sum)
}








