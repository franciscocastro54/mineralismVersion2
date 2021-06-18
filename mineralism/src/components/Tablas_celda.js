import React, { useState } from 'react';
import TableVector from '../data/tabla';
import Tabla_diferencia from '../data/Tabla_diferencia';
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
    let listb = []
    const cargar = () => {
        setRow([])
        for (let i = 0; i < types.length; i++) {
            console.log(sessionStorage.getItem('listaVectores' + types[i]))
            if (sessionStorage.getItem('listaVectores' + types[i]) != null) {
                const list = ListaVectores()

                list.vectores = list.updateList(JSON.parse(sessionStorage.getItem('listaVectores' + types[i])))

                setRow(row => [...row, list])
                listb = [...listb, list.vectores]
                console.log(listb)
            }
        }
        setListaRecupMasa(ListaRecupMasa(listb[0], listb[2]))
        setListaRecupLey(ListaRecupLey(listb[0], listb[1], listb[2]))
        setListaError(ListaError(listb[0], listb[1], listb[2]))
    }

    return <>
        <div className={'container-xxl'}>
            <div className={'row'}>
                <div className={'col border'}>
                    {row.map((ro) => {

                        return ro.view(ro.vectores)

                    })}
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