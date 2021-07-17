import { metaProperty } from '@babel/types';
import React,{useState,useEffect,useContext} from 'react';
import F_cargar_celda from '../context/F_cargar_celda';
import vector,{ListaVectores} from '../data/vector';


const Input_vector=({f,id,type='Flujo'})=>{
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
const list= ListaVectores()

if(sessionStorage.getItem('listaVectores'+type)!=null){

list.vectores=list.updateList(JSON.parse(sessionStorage.getItem('listaVectores'+type)))


}


if(id==undefined){
 f[1]((list)=>[...list, nombre])
 list.vectores=list.addVector(nombre,densidad,solido,ley,caudal,type)

  }else {
    f[1]((list)=>{
const aux=[]
for(let i=0;i<list.length;i++){

if(list[i]!=id)  aux[i]=list[i]
else aux[i]=nombre
}
return aux
    })
list.vectores=list.updateVector(id,nombre,densidad,solido,ley,caudal,type)

  }
 // {vectores,addVector,removeVector,updateVector}



  sessionStorage.setItem('listaVectores'+type,JSON.stringify(list.vectores));
}
const remove =()=>{

  const list= ListaVectores()

  if(sessionStorage.getItem('listaVectores'+type)!=null){
  
    f[1]((list)=>{
  
      const newList = list.filter((vector) => vector != id)
    
      return (newList)
      
          })

  list.vectores=list.updateList(JSON.parse(sessionStorage.getItem('listaVectores'+type)))
  



  list.vectores=list.removeVector(id);
  sessionStorage.setItem('listaVectores'+type,JSON.stringify(list.vectores));
  }




}

return<>

<div className="modal fade" id={"Modal"+type} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:'rgb(106, 135, 199)'}}>
        <h4 className="modal-title" id="exampleModalLabel" style={{color:'white', backgroundColor:'rgb(106, 135, 199)'}}>Flujo</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" style={{backgroundColor:'rgb(34, 122, 200)'}}>
       <div className={'container-xxl'} >
           <div className={'row p-2'}>
            <h6 className={'col-3 p-1'} style={{color:'white',fontWeight:'bold'}}>Nombre:</h6><input id={'inputNombre'+type}className={'col-7'} style={{height:'30px'}}/><h6 className={'col-2'}></h6>
           </div>
           <div className={'row p-2'}>
            <h6 className={'col-3 p-1'} style={{color:'white',fontWeight:'bold'}}>Densidad:<br/><code style={{color:'white'}} >(pulpa)</code></h6><input id={'inputdDensidad'+type}className={'col-7 '} style={{height:'30px'}}/><h6 className={'col-2 p-2'} style={{color:'white'}}>(T/m3)</h6>
           </div>
           <div className={'row p-1'}>
            <h6 className={'col-3 p-1'} style={{color:'white',fontWeight:'bold'}}>Sólido:</h6><input id={'inputSolido'+type}className={'col-7'} style={{height:'30px'}}/><h6 className={'col-2 p-2'} style={{color:'white'}}>(%)</h6>
           </div>
           <div className={'row p-2'}>
            <h6 className={'col-3 p-1'} style={{color:'white',fontWeight:'bold'}}>Ley:</h6><input id={'inputLey'+type}className={'col-7'} style={{height:'30px'}}/><h6 className={'col-2 p-2'} style={{color:'white'}}>(%)</h6>
           </div>
           <div className={'row p-2'}>
            <h6 className={'col-3 p-1'} style={{color:'white',fontWeight:'bold'}}>Caudal:<br/><code style={{color:'white'}} >(pulpa)</code></h6><input id={'inputCaudal'+type}className={'col-7'} style={{height:'30px'}} /><h6 className={'col-2 p-2'} style={{color:'white'}}>(m3/h)</h6>
           </div>
       </div>
      </div>
      <div className="modal-footer" style={{backgroundColor:'rgb(106, 135, 199)'}}>
        <button type="button" className={'btn btn-danger'} data-bs-dismiss="modal" onClick={remove}>Eliminar</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={Guardar}>Guardar cambios</button>
      </div>
    </div>
  </div>
</div>




</>


}







export default Input_vector