import React, { createContext, useState } from 'react';
import Lista_flujos from '../components/Lista_flujos';
import Tabla_celda from '../components/Tablas_celda';
import TableVector from '../data/tabla';
import Tabla_diferencia from '../data/Tabla_diferencia';
import Input_vector from '../components/Input_vector';
import F_cargar_celda from '../context/F_cargar_celda';
const Caja_negra = () => {

    return <div className={'container-xxl'}>

        <div className={'row'}>
            <div className={'col sinpadding'}><Lista_flujos type={'Alimentación_F'} /></div>
            <div className={'col sinpadding'}><Lista_flujos type={'Cola_T'} /></div>
            <div className={'col sinpadding'}><Lista_flujos type={'Concentrado_C'} /></div>
        </div>
        <div className={'row'}>
            <div className={'col sinpadd'}>
                <Tabla_celda types={['Alimentación_F', 'Cola_T', 'Concentrado_C']} />
            </div>

        </div>
        <div id={'info_vector'}></div>

    </div>
}



export default Caja_negra