import React from 'react';
import Lista_flujos from '../components/Lista_flujos';
import Tabla_celda from '../components/Tablas_celda';



const Caja_negra=()=>{



return <div className={'container-xxl'}>
<div className={'row'}>
<div className={'col sinpadd'}><Lista_flujos/></div>
<div className={'col sinpadd'}><Lista_flujos/></div>
<div className={'col sinpadd'}><Lista_flujos/></div>
</div>
<div className={'row'}>
<div className={'col sinpadd'}>
    <Tabla_celda/>
</div>
</div>
</div>
}



 export default Caja_negra