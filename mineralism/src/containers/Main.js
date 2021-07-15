import React,{useState} from 'react';
import Barra from '../components/Barra_lateral';
import Sistem_celda from './Sistema_celda';
import F_cargar_celda from '../context/F_cargar_celda';
import F_Elements from '../context/F_Elements';
import Sistema_circuto from './Sistema_circuitos';
import Circuito from '../data/Circuito';
import Generacion_Reportes from './Generacion_Reportes';
import F_Balance from '../context/F_Balance';
const Main=()=>{
const [value,setvalue]=useState(Circuito)
const [value2,setvalue2]=useState(Circuito)
const [elments,setElements]=useState([])
const aux=[value,setvalue]
const aux2=[elments,setElements]
const aux3=[value2,setvalue2]
return <div className={'container-xxl'}>
     <F_cargar_celda.Provider value={aux}>
          <F_Elements.Provider value={aux2}>
               <F_Balance.Provider value={aux3}>
<div className={'row'}>
   
<div className={'col-2 h-100 d-inline-block sinpadd'}>
<Barra/>
</div>
<div id={'Pantalla_central'}className={'col-10 sinpadd'}>
<div id={'celda'} style={{display:'none'}}><Sistem_celda/></div>
<div id={'circuito'}style={{display:'none'}}><Sistema_circuto/></div>
<div id={'reportes'} style={{display:'none'}}><Generacion_Reportes/></div>
</div>
 </div>
 </F_Balance.Provider>
 </F_Elements.Provider>
 </F_cargar_celda.Provider>
 </div>
}





export default Main