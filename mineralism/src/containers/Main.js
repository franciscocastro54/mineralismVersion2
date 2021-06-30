import React from 'react';
import Barra from '../components/Barra_lateral';
import Sistem_celda from './Sistema_celda';




const Main=()=>{

 
return <div className={'container-xxl'}>
<div className={'row'}>
   
<div className={'col-2 h-100 d-inline-block sinpadd'}>
<Barra/>
</div>
<div id={'Pantalla_central'}className={'col-10 sinpadd'}>

</div>
 </div>
 
</div>
}





export default Main