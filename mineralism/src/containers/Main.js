import React from 'react';
import Barra from '../components/Barra_lateral';
import Caja_negra from './Caja_negra';




const Main=()=>{


return <div className={'container-xxl'}>
<div className={'row'}>
   
<div className={'col-2 h-100 d-inline-block sinpadd'}>
<Barra/>
</div>
<div id={'Pantalla_central'}className={'col-10 sinpadd'}>
<Caja_negra/>
</div>
 </div>
</div>
}





export default Main