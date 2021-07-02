import React,{useState} from 'react';
import Barra from '../components/Barra_lateral';
import Sistem_celda from './Sistema_celda';
import F_cargar_celda from '../context/F_cargar_celda';



const Main=()=>{


return <div className={'container-xxl'}>
     <F_cargar_celda.Provider value={ useState([])}>
<div className={'row'}>
   
<div className={'col-2 h-100 d-inline-block sinpadd'}>
<Barra/>
</div>
<div id={'Pantalla_central'}className={'col-10 sinpadd'}>

</div>
 </div>
 
 </F_cargar_celda.Provider>
 </div>
}





export default Main