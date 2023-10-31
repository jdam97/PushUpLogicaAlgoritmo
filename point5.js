let samDaily=Number(prompt(`number to problems that sam solved: `))
let kellyDaily=Number(prompt(`number to problems that Kelly solved: `))
let difference = Number(prompt(`difference: `))
let minNum = (samDaily,kellyDaily,difference)=>{
    let total = (kellyDaily*difference)/samDaily
    if (total<0) {  
        return -1
    }
    else return total
}  

alert(`Kelly can reach sam at ${minNum=(samDaily,kellyDaily,difference)} day`)





