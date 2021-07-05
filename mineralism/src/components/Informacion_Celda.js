import React, { useState, useEffect, useContext } from 'react';
import { Elementos } from '../data/Circuito';



const Informacion_Celda = ({ Celda = Elementos }) => {



    return <>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="Propiedades">
                            <button class="nav-link active" id="pills-Propiedades-tab" data-bs-toggle="pill" data-bs-target="#pills-Propiedades" type="button" role="tab" aria-controls="pills-Propiedades" aria-selected="true">Propiedades</button>
                        </li>
                        <li class="nav-item" role="Datos">
                            <button class="nav-link" id="pills-Datos-tab" data-bs-toggle="pill" data-bs-target="#pills-Datos" type="button" role="tab" aria-controls="pills-Datos" aria-selected="false">Datos</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-Propiedades" role="Propiedades" aria-labelledby="pills-Propiedades-tab">
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-6'}>
                                    <h6>Nombre:</h6><input type={'text'} placeholder={'Nombre de celda'} />
                                </div>
                                <div className={'col-6'}>
                                    <h6>Tipo:</h6> <select name="TipoCelda" id="TipoCelda">
                                        <option value="Alimentacion">Alimentación</option>
                                        <option value="Celda">Celda</option>
                                        <option value="Nodo">Nodo</option>
                                        <option value="ColaFinal">Cola Final</option>
                                        <option value="ConcentradoFinal">Concentrado Final</option>
                                    </select>
                                </div>
                            </div></div>
                    </div>
                    <div class="tab-pane fade" id="pills-Datos" role="Datos" aria-labelledby="pills-Datos-tab">
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col'}>
                                    <h3 className={'text-center'}>Flujos</h3>
                                </div>
                                <div className={'row'}>
                                <div className={'col'}>
                                    <ul className={'text-center'}>
                                        {
                                            Celda.Data.map( c => (
                                                <li><button type="button" className={'btn btn-primary'}
                                                data-bs-toggle="modal" data-bs-target="#Input_List_C">{c.data.nombre}</button></li>
                                            )
                                            )}
                                    </ul>
                                </div>
                                </div>
                            </div></div>

                    </div>
                </div>

                <div class="modal fade" id="Input_List_C" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
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
                        <input type="text" id="densidad" class="form-control" placeholder="12.345"/>
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
                    <input type="text" id="solido" class="form-control" placeholder="12.345"/>
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
                    <input type="text" id="ley" class="form-control" placeholder="12.345"/>
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
                    <input type="text" id="caudal" class="form-control" placeholder="12.345"/>
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
    </>

}











export default Informacion_Celda;