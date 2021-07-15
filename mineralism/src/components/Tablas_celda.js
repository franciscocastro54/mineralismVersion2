import React, { useState,useContext } from 'react';
import TableVector from '../data/tabla';
import Tabla_diferencia from '../data/Tabla_diferencia';
import {Elementos} from '../data/Circuito';
import F_Balance from '../context/F_Balance';
import Vector, {
    Celda,
    sumaParam,
    RecupMasa,
    RecupLey,
    ListaVectores,
    ListaRecupLey,
    ListaRecupMasa,
    ListaError,
    findVector
} from '../data/vector';

const Tabla_celda = ({ types = [] }) => {

    const [row, setRow] = useState([ListaVectores()])
    const vectorVacio = Vector('', 0, 0, 0, 0, '');
    const [listaRecupMasa, setListaRecupMasa] = useState(ListaRecupMasa([vectorVacio], [vectorVacio], [vectorVacio]))
    const [listaRecupLey, setListaRecupLey] = useState(ListaRecupLey([vectorVacio], [vectorVacio], [vectorVacio]))
    const [listaError, setListaError] = useState(ListaError([vectorVacio], [vectorVacio], [vectorVacio]))
    const [circuito,setCircuito]=useContext(F_Balance);
    let listb = []
    const cargar = () => {
        let flag=false;
        setRow([])
        setCircuito([Object.create(Elementos)])
        for (let i = 0; i < types.length; i++) {
            
            if (sessionStorage.getItem('listaVectores' + types[i]) != null) {
                const list = ListaVectores()
                list.vectores = list.updateList(JSON.parse(sessionStorage.getItem('listaVectores' + types[i])))
                

                list.vectores.map((vector)=>{
                    setCircuito(Circuito=> {
                        Circuito[0].Data.push({
                            'id': vector.nombre,
                            'Grafico': {
                              'id': '',
                              'type': '',
                              'source': '',
                              'target': '',
                              'animated': true,
                              'label': ''
                            },
                            'data': {
                              'nombre': vector.nombre,
                              'densidad': vector.densidad,
                              'porcSolido': vector.porcSolido,
                              'ley': vector.ley,
                              'caudalP': vector.caudalP,
                              'MPulpa': vector.MPulpa,
                              'MSolido': vector.MSolido,
                              'Fino': vector.Fino,
                              'tipo': vector.tipo
                            }});
                    
                            return Circuito   })
                    
                    })




                setRow(row => [...row, list])
                listb = [...listb, list.vectores]
               
            }else{
             flag=true;  
            }
        }

        setCircuito(c=>[...c,c])
        setCircuito(c=>{c.pop();
        return c})
        if(flag){ setRow([ListaVectores()]);
        }else{
        setListaRecupMasa(ListaRecupMasa(listb[0], listb[2]))
        setListaRecupLey(ListaRecupLey(listb[0], listb[1], listb[2]))
        setListaError(ListaError(listb[0], listb[1], listb[2]))
    
    }}

    return <>
        <div className={'container-xxl'}>
            <div className={'row'}>
                <div className={'col border'}>
                    <nav>
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <button class="nav-link" id="nav-0-tab" data-bs-toggle="tab" data-bs-target="#nav-0" type="button" role="tab" aria-controls="nav-0" aria-selected="false">Alimentación</button>
                            <button class="nav-link" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="false">Cola</button>
                            <button class="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Concentrado</button>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        {row.map((ro,index) => {

                            return (
                                <div class="tab-pane fade" id={`nav-${index}`} role="tabpanel" aria-labelledby={`nav-${index}-tab`}> 
                                {ro.view(ro.vectores)}
                                </div>
                            )

                        })}
                    </div>

                </div></div>
            <div className={'row'}>
                <div className={'col-4 border'}>
                    {listaRecupMasa.view()}
                </div><div className={'col-4 border'}>
                    {listaRecupLey.view()}
                </div>
                <div className={'col-4 border'}>
                    {listaError.view()}
                </div>
            </div>
            <div className={'row justify-content-center'}>
                <div className={'col-2'}>
                    <button className={'btn btn-primary'} onClick={cargar}>calcular</button>
                </div>
            </div>
        </div>
    </>
}







export default Tabla_celda;