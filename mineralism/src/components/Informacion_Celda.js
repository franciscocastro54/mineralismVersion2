import React, { useState, useEffect, useContext,useCallback } from 'react';
import { Elementos } from '../data/Circuito';
import F_cargar_celda from '../context/F_cargar_celda';
import F_Elements from '../context/F_Elements';
import icono_edit from '../Graficos/Icono_panel.png'

const Informacion_Celda = ({ Celda = Elementos }) => {
    const [circuito, setCircuito] = useContext(F_cargar_celda)
    const [elements,setElements]= useContext(F_Elements)
    const onChange = (event) => {
        const onClick = () => {
            Celda.focus = (Celda.focus) ? false : true
        }
        const value = event.target.value
        console.log(event.target.value)
        Celda.Grafico.data.label = <><button className={'btn btn-info'} onClick={() => onClick(Celda)}><img src={icono_edit} /></button><strong>{value}</strong></>
       setCircuito((circuito) => circuito.map((celda) => (celda.id == Celda.id) ? Celda : celda))
       console.log(elements)
    }/*
const onChangetype=(event)=>{
    const value=event.target.value
    console.log(value.toString())
    Celda.Grafico.type=value
    setCircuito((circuito)=>circuito.map((celda)=>(celda.id==Celda.id)? Celda:celda))
console.log( Celda.Grafico.type)

}*/
    const onChangeColor = (event) => {
        const value = event.target.value

        Celda.Grafico.style = { border: '1px solid ' + value }
        setCircuito((circuito) => circuito.map((celda) => (celda.id == Celda.id) ? Celda : celda))
   
    //  actualizar()


    }
   const actualizar= useCallback(()=>(setElements(c=>[...c,{id:'1',data:<h2>asd</h2>}])),[setElements])

    const [nombre, setNombre] = useState('')
    const [densidad, setDensidad] = useState(0)
    const [solido, setSolido] = useState(0)
    const [ley, setLey] = useState(0)
    const [caudal, setCaudal] = useState(0)

    const loadCelda = (vector) => {
        console.log(vector)
        setNombre(vector.nombre)
        /* document.getElementById("densidad"+Celda.id).innerHTML='123'
         console.log( document.getElementById("densidad"+Celda.id))
         document.getElementById('solido'+Celda.id).innerHTML=vector.porcSolido
         document.getElementById('ley'+Celda.id).innerHTML=vector.ley
         document.getElementById('caudal'+Celda.id).innerHTML=vector.caudalP
         */

    }
    return <>
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col'}>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="Propiedades">
                            <button class="nav-link active" id="pills-Propiedades-tab" data-bs-toggle="pill" data-bs-target={"#pills-Propiedades" + Celda.id} type="button" role="tab" aria-controls="pills-Propiedades" aria-selected="true">Propiedades</button>
                        </li>
                        <li class="nav-item" role="Datos">
                            <button class="nav-link" id="pills-Datos-tab" data-bs-toggle="pill" data-bs-target={"#pills-Datos" + Celda.id} type="button" role="tab" aria-controls="pills-Datos" aria-selected="false">Datos</button>
                        </li>
                    </ul>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id={"pills-Propiedades" + Celda.id} role="Propiedades" aria-labelledby="pills-Propiedades-tab">
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col-6'}>
                                    <h6>Nombre:</h6><input id={'Celda_Nombre'} type={'text'} placeholder={Celda.Nombre} onInput={(c) => onChange(c)} />
                                </div>
                                <div className={'col-6'}>
                                    <h6>Color:</h6><input type={'color'} id={'colorCelda'} onChange={(event) => onChangeColor(event)} />
                                </div>
                            </div></div>
                    </div>
                    <div class="tab-pane fade" id={"pills-Datos" + Celda.id} role="Datos" aria-labelledby="pills-Datos-tab">
                        <div className={'container'}>
                            <div className={'row'}>
                                <div className={'col'}>
                                    <h3 className={'text-center'}>Flujos</h3>
                                </div>
                                <div className={'row'}>
                                    <div className={'col'}>
                                        <ul className={'text-center'} style={{ listStyle: 'none' }}>
                                            {
                                                Celda.Data.map(vector => (
                                                    <li><button type="button" className={'btn btn-primary'}
                                                        onClick={() => loadCelda(vector.data)} data-bs-toggle="modal" data-bs-target={'#Input_List_C' + Celda.id}>{vector.data.nombre}</button></li>
                                                )
                                                )}
                                        </ul>
                                    </div>
                                </div>
                            </div></div>
                        <div class="modal fade" id={"Input_List_C" + Celda.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{nombre}</h5>
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
                                                    <input type="text" id={"densidad" + Celda.id} class="form-control" placeholder="12.345" />
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
                                                    <input type="text" id={"solido" + Celda.id} class="form-control" placeholder="12.345" />
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
                                                    <input type="text" id={"ley" + Celda.id} class="form-control" placeholder="12.345" />
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
                                                    <input type="text" id={"caudal" + Celda.id} class="form-control" placeholder="12.345" />
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
        </div>
    </>

}











export default Informacion_Celda;