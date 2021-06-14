
/*
function Vector(densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0){

    const densidadP= densidadP1;
    const porcSolido=porcSolido1/100;
    const ley=ley1/100;
    const caudalP=caudalP1;


    const calMPulpa = ()=>(caudalP*densidadP)    
    const calMSolido = () => (calMPulpa()*porcSolido)
    const calFino = () => (ley*calMSolido())
    
    const MPulpa= calMPulpa();
    const MSolido= calMSolido();
    const Fino= calFino();
    const data= [MPulpa,MSolido,Fino]

    return data;
    //this.MostrarDatos= function(){   return [this.calMPulpa,this.calMSolido,this.calFino]   }

}
*/
function Vector(nombre1="nn",densidadP1=0,porcSolido1=0,ley1=0,caudalP1=0,tipo=""){
    
    const calMPulpa = ()=>(caudalP1*densidadP1)    
    const calMSolido = () => (calMPulpa()*porcSolido1/100)
    const calFino = () => (ley1*calMSolido()/100) 

    const MPulpa1= calMPulpa();
    const MSolido1= calMSolido();
    const Fino1= calFino();

    return  {nombre:nombre1            
            ,densidad:densidadP1
            ,porcSolido:porcSolido1
            ,ley:ley1
            ,caudalP:caudalP1
            ,MPulpa:MPulpa1
            ,MSolido:MSolido1
            ,Fino:Fino1
            ,tipo:tipo
        }
}

function Celda(nombre="celda",VEntrada,VConcentrado,VRelave){
    return {nombre:nombre,
            VEntrada:VEntrada,
            VConcentrado:VConcentrado,
            VRelave:VRelave
            }
}

const sumaParam=(lista,param)=>{

    const suma= lista.map(vector=> vector[ `${param}` ]).reduce((total,vec)=>total+vec,0);       
    return suma
}

function RecupMasa(listaVAlim,listaVConcentrado){
    
    const concComun=sumaParam(listaVConcentrado,'MSolido')
    const alimentacion=sumaParam(listaVAlim,'MSolido')
    const recuperacion=(concComun/alimentacion)*100
    return {concComun:concComun,
            alimentacion:alimentacion,
            recuperacion:recuperacion
    }
}
function RecupLey(listaVAlim,listaVRelave,listaVConcentrado){
    console.log(listaVAlim,listaVRelave,listaVConcentrado)
    let concComun=0
    for (let i = 0; i < listaVConcentrado.length; i++) {
        concComun+=(listaVConcentrado[i].MPulpa)*(listaVConcentrado[i].ley)
        
    }
    concComun/=sumaParam(listaVConcentrado,"MPulpa")

    let alimentacion=0
    for (let i = 0; i < listaVAlim.length; i++) {
        alimentacion+=(listaVAlim[i].MPulpa)*(listaVAlim[i].ley)
    }
    alimentacion/=sumaParam(listaVAlim,"MPulpa")
    let rechazo=0
    for (let i = 0; i < listaVRelave.length; i++) {
        rechazo+=(listaVRelave[i].MPulpa)*(listaVRelave[i].ley)
    }
    rechazo/=sumaParam(listaVRelave,"MPulpa")

    const recuperacion = ((alimentacion-rechazo)/(concComun-rechazo))*100

console.log(concComun,alimentacion,rechazo,recuperacion)
    return{ concComun:concComun,
            alimentacion:alimentacion,
            rechazo:rechazo,
            recuperacion:recuperacion   
        }
}

function findVector(id,listado){ 
    const lista=listado.filter(vector=>vector.tipo==id)
    return lista
}



export { 
Vector as default,
Celda,
sumaParam,
RecupMasa,
RecupLey
};