
let nUniversidades = Number(prompt(`Ingrese el número de universidades participantes`));


while (nUniversidades > 0) {
    let aceptan = 0
    let rechazan = 0
    let blancos = 0
    let nulos = 0
    let nombreUniversidad = prompt(`Ingrese el Nombre de la universidad`)
    let voto = String(prompt(`Ingrese la inicial de su voto sea (A = aceptar,R = rechazar ,N = nulo,B = blanco)`))
    if (voto=='A') {
        aceptan+=1
    }
    else if (voto=='R')
    rechazan+=1

    else if (voto=='B')
    blancos+=1
    
    else if (voto=='N')
    blancos+=1 
    
    while (voto!='X') {
        
        voto = String(prompt(`Ingrese la inicial de su voto sea (A = aceptar,R = rechazar ,N = nulo,B = blanco)`))

        if (voto=='A') {
            aceptan+=1
        }
        else if (voto=='R')
        rechazan+=1

        else if (voto=='B')
        blancos+=1
        
        else if (voto=='N')
        blancos+=1

        else continue
    }
    alert(`Universidad: ${nombreUniversidad}
    Aceptan:${aceptan},
    Rechazan:${rechazan},
    Blancos:${blancos},
    Nulos:${nulos}`)

    nUniversidades--
}



