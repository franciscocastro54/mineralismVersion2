import React,{useState} from 'react';

const Tabla_diferencia=()=>{

return <table className=' col-3'  border = "1">
<thead><tr><th colSpan = {"3"} ><p align='center'>Diferencia(T/h)</p></th><th><p align='right'>%Error</p></th></tr></thead>
<tbody>
<tr><td colSpan = {"2"}>Masa pulpa</td><td>{'null'}</td><td align='right'>{'null'}</td></tr>
<tr><td colSpan = {"2"}>Masa solido</td><td>{'null'}</td><td align='right'>{'null'}</td></tr>
<tr><td colSpan = {"2"}>Masa Fino</td><td>{'null'}</td><td align='right'>{'null'}</td></tr>
<tr><td colSpan = {"2"}></td><td>-</td><td align='right'>-</td></tr>
</tbody>
</table>



}



export default Tabla_diferencia;