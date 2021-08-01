import React from 'react';
import Panel_Circuito from '../components/Panel_Circuito'
import Sidebar from '../components/Sidebar';
import Lista_Flujos_circuito from '../components/Lista_Flujos_circuito'
const Sistema_circuto=()=>{





return <div className={'container-xxl'}>
<Sidebar  />
<div className={'row'}>
    


    <div className={'col-8'}>
        <Panel_Circuito/>
    </div>
    
    <div className={'col-4'}>
        <Lista_Flujos_circuito/>
    </div>

</div>

</div>


}







export default Sistema_circuto