import React,{useState} from 'react';
import Barra from '../components/Barra_lateral';
import Sistem_celda from './Sistema_celda';
import F_cargar_celda from '../context/F_cargar_celda';
import Sistema_circuto from './Sistema_circuitos';


const Main=()=>{
const [value,setvalue]=useState(['asd'])
const aux=[value,setvalue]
return <div className={'container-xxl'}>
     <F_cargar_celda.Provider value={aux}>
<div className={'row'}>
   
<div className={'col-2 h-100 d-inline-block sinpadd'}>
<Barra/>
</div>
<div id={'Pantalla_central'}className={'col-10 sinpadd'}>
<div id={'celda'} style={{display:'none'}}><Sistem_celda/></div>
<div id={'circuito'}style={{display:'none'}}><Sistema_circuto/></div>
</div>
 </div>
 
 </F_cargar_celda.Provider>
 </div>
}





export default Main