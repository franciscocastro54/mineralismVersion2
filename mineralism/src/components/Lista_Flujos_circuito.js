import React from 'react';
import Lista_flujos from './Lista_flujos';
import Input_vector from './Input_vector';

const Lista_Flujos_circuito = () => {


  return <div class="modal fade" id="Input_List_C" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ingreso de flujos</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div className={'container'}>
            <div className={'row'}>
           

              <div className={'col-4 sinpadding'}><Lista_flujos type={'Alimentación_F'} /></div>
                <div className={'col-4 sinpadding'}><Lista_flujos type={'Cola_T'} /></div>
                <div className={'col-4 sinpadding'}><Lista_flujos type={'Concentrado_C'} /></div>
                     <Input_vector/>
            </div>

          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>


}


export default Lista_Flujos_circuito