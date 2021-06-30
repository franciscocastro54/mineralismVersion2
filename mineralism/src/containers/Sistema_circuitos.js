import React from 'react';
import Panel_Circuito from '../components/Panel_Circuito'
import Sidebar from '../components/Sidebar';
import Lista_Flujos_circuito from '../components/Lista_Flujos_circuito'
const Sistema_circuto=()=>{





return <div className={'container-xxl'}>
<div className={'row'}>
    
    <div className={'col-9'}>
    <Panel_Circuito/>
</div>



<div className={'col-3'}>
        <Sidebar />
        </div>
</div>
<Lista_Flujos_circuito/>
</div>


}







export default Sistema_circuto