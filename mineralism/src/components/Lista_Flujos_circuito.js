import React, { useState, useContext, useEffect } from 'react';
import Lista_flujos from './Lista_flujos';
import Input_vector from './Input_vector';
import Informacion_Celda from './Informacion_Celda';
import Circuito, { Elementos } from '../data/Circuito';
import F_cargar_celda from '../context/F_cargar_celda';
const Lista_Flujos_circuito = () => {
    const [circuito, setCircuito] = useContext(F_cargar_celda)
    const [focus, setfocus] = useState(Object.create(circuito))

    useEffect(() => {
        setfocus(() => {
            let aux = []
            circuito.map((c) => {

          if (c.focus == true) aux.push(c)

        
        
        
        })
console.log(aux)
            return aux
        })
    
   console.log("useEffect")
    }
        , [circuito])
const deletefocus=(celdaId)=>{
    setfocus(() => {
        let aux = []
        circuito.map((c) => {

            if (c.id == celdaId) {c.focus=false}
            else if (c.focus == true) aux.push(c)
        })

        return aux
    })
}

    return <div className={'container '}>
        <div className={'row'}>
            <div className={'col'}>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    {focus.map((celda) => (
                        <li class="nav-item p-1" role={celda.id}>
                          <button class="nav-link" id={'home-tab' + celda.id} data-bs-toggle="tab" data-bs-target={"#home" + celda.id} type="button" role="tab" aria-controls="home" aria-selected="true">{celda.Nombre}<button type='button' className='btn btn-danger col-1' onClick={(event)=>deletefocus(celda.id)}>X </button></button>
                        </li>))}
                </ul>
                <div class="tab-content" id="myTabContent">
                    {focus.map((celda) => (
                        <div class="tab-pane fade" id={"home" + celda.id} role="tabpanel" aria-labelledby="home-tab">
                            <Informacion_Celda Celda={celda} />
                        </div>
                    ))}
                </div>
                <div class="modal fade" id="Input_List_C" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
-                        <div class="modalcontent">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">

                                <div class="p-3 bg-light border border-primary col">
                                    <div class="p-2 d-flex justify-content-center">
                                        <h3>Ingrese datos de Concentrado</h3>
                                    </div>
                                    <div class="mb-3 row">

                                        <div class="col-3">
                                            <label for="densidad" class="col-sm-2 col-form-label">Densidad: </label>
                                        </div>

                                        <div class="col-6">
                                            <input type="text" id="densidad" class="form-control" placeholder="12.345" />
                                        </div>

                                        <div class="col-auto">
                                            <span id="unidadDensidad" class="form-text">
                                                (T/m3)
                                            </span>
                                        </div>
                                    </div>


                                    <div class="mb-3 row">

                                        <div class="col-3">
                                            <label for="solido" class="col-sm-2 col-form-label">Sólido: </label>
                                        </div>

                                        <div class="col-6">
                                            <input type="text" id="solido" class="form-control" placeholder="12.345" />
                                        </div>

                                        <div class="col-auto">
                                            <span id="unidadPorcentaje" class="form-text">
                                                (%)
                                            </span>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">

                                        <div class="col-3">
                                            <label for="ley" class="col-sm-2 col-form-label">Ley: </label>
                                        </div>

                                        <div class="col-6">
                                            <input type="text" id="ley" class="form-control" placeholder="12.345" />
                                        </div>

                                        <div class="col-auto">
                                            <span id="unidadPorcentaje" class="form-text">
                                                (%)
                                            </span>
                                        </div>

                                    </div>

                                    <div class="mb-3 row">

                                        <div class="col-3">
                                            <label for="caudal" class="col-sm-2 col-form-label">Caudal: </label>
                                        </div>

                                        <div class="col-6">
                                            <input type="text" id="caudal" class="form-control" placeholder="12.345" />
                                        </div>

                                        <div class="col-auto">
                                            <span id="unidadVolumen" class="form-text">
                                                (m3/h)
                                            </span>
                                        </div>

                                    </div>


                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}


export default Lista_Flujos_circuito