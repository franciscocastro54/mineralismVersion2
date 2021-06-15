import { metaProperty } from '@babel/types';
import React,{useState,useEffect,useContext} from 'react';
import F_cargar_celda from '../context/F_cargar_celda';
import vector from '../data/vector';


const Input_vector=({f,id,type})=>{
  /*
const context=useContext(F_cargar_celda);
const[nombre,setNombre]=useState('');
const[densidad,setDensidad]=useState(0);
const[solido,setSolido]=useState(0);
const[ley,setLey]=useState(0);
const[caudal,setCaudal]=useState(0);

const cargar=()=>{
    const nombre=   sessionStorage.getItem(id+type+'Nombre')
    const densidad=  sessionStorage.getItem(id+type+'Densidad')
    const solido=    sessionStorage.getItem(id+type+'Solido')
    const ley=      sessionStorage.getItem(id+type+'Ley')
    const caudal=    sessionStorage.getItem(id+type+'Caudal')

setNombre(nombre)
setDensidad(densidad)
setSolido(solido)
setLey(ley)
setCaudal(caudal)
console.log(id,type,nombre)
console.log('cargar---',nombre,densidad,solido,ley,caudal)
}

*/


const Guardar=()=>{
 
const nombre=   document.getElementById('inputNombre'+type).value
const densidad= document.getElementById('inputdDensidad'+type).value
const solido=   document.getElementById('inputSolido'+type).value
const ley=      document.getElementById('inputLey'+type).value
const caudal=   document.getElementById('inputCaudal'+type).value
const vectorg =vector(nombre,densidad,solido,ley,caudal,type)
console.log(id+type+nombre)
if(id==undefined){
 f[1]((list)=>[...list, nombre])


  }else if(id!=nombre){
    f[1]((list)=>{
const aux=[]
for(let i=0;i<list.length;i++){

if(list[i]!=id)  aux[i]=list[i]
else aux[i]=nombre
}
return aux
    })
  }
  sessionStorage.setItem(nombre+type+'vector',JSON.stringify(vectorg));
}
return<>

<div className="modal fade" id={"Modal"+type} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Flujo</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <div className={'container-xxl'}>
           <div className={'row'}>
            <h4 className={'col-3'}>Nombre:</h4><input id={'inputNombre'+type}className={'col-7'} /><h4 className={'col-2'}></h4>
           </div>
           <div className={'row'}>
            <h4 className={'col-3'}>Densidad</h4><input id={'inputdDensidad'+type}className={'col-7'} /><h4 className={'col-2'}>(T/m3)</h4>
           </div>
           <div className={'row'}>
            <h4 className={'col-3'}>Solido</h4><input id={'inputSolido'+type}className={'col-7'} /><h4 className={'col-2'}>(%)</h4>
           </div>
           <div className={'row'}>
            <h4 className={'col-3'}>Ley</h4><input id={'inputLey'+type}className={'col-7'} /><h4 className={'col-2'}>(%)</h4>
           </div>
           <div className={'row'}>
            <h4 className={'col-3'}>Caudal</h4><input id={'inputCaudal'+type}className={'col-7'} /><h4 className={'col-2'}>(m3/h)</h4>
           </div>
       </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Guardar}>Save changes</button>
      </div>
    </div>
  </div>
</div>




</>


}







export default Input_vector