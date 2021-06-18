import React,{useState} from 'react';
import TableVector from '../data/tabla';
import Tabla_diferencia from '../data/Tabla_diferencia';
import Vector,{Celda,
    sumaParam,
    RecupMasa,
    RecupLey,
    ListaVectores,
    ListaRecupLey,
    ListaRecupMasa,
    ListaError,
    findVector} from '../data/vector';

const Tabla_celda=({types=[]})=>{

 const [row,setRow]=useState([ListaVectores()])   
    
    const cargar=()=>{
setRow([])
for (let i = 0; i < types.length; i++) {
    console.log(sessionStorage.getItem('listaVectores'+types[i]))
    if (sessionStorage.getItem('listaVectores'+types[i]) != null){
        const list= ListaVectores()
       
        list.vectores= list.updateList(JSON.parse(sessionStorage.getItem('listaVectores'+types[i])))
       
            setRow(row=>[...row,list])
            
    
}}
    
console.log(row)
}


return <>

{row.map((ro)=>{

return ro.view(ro.vectores)

})}
<button onClick={cargar}>calcular</button>
</>
}







export default Tabla_celda;