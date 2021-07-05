import React, { useState } from 'react';
import Lista_flujos from './Lista_flujos';
import Input_vector from './Input_vector';
import Informacion_Celda from './Informacion_Celda';
import Circuito from '../data/Circuito';
const Lista_Flujos_circuito = () => {
  const [circuito, setCircuito] = useState(Circuito)

  return <div className={'container'}>
    <div className={'row'}>
      <div className={'col'}>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          {circuito.map((celda) =>(
            <li class="nav-item" role={celda.id}>
              <button class="nav-link" id={'home-tab'+celda.id} data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">{celda.Nombre}</button>
            </li>))}
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
            {circuito.map((celda)=>(
            <Informacion_Celda Celda={celda} />
            ))}
          </div>

        </div>
      </div>
    </div>
  </div>
}


export default Lista_Flujos_circuito