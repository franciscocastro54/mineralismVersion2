import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import TableToExcel from '../data/TableToExcel';
import F_cargar_celda from '../context/F_cargar_celda';
const Sistema_Reportes = () => {


    const style1 = { color: 'cornsilk', background: '#0053A4', border: '1px solid black' };
    const [circuito, setCircuito] = useContext(F_cargar_celda)

    return <div className={'container-xxl'}>
        <div className={'row'}>

            <div className={'col'}>
                <div class="p-3 bg-primary text-white border border-primary col-6 ">
                    <div class="d-flex justify-content-center">
                        <h2>Reportes</h2>
                    </div>
                    <div class="p-4 mb-3 row d-flex justify-content-center">
                        <h4 class="col-6">
                            <label for="tablaFlujos" class="fw-bold">Tabla de flujos</label>
                        </h4>
                        <div class="col-auto">
                            <button id="tablaFlujos" class="btn btn-info fw-bold text-primary" onClick={() => (TableToExcel('tableFlujos', 'flujos', 'tablaFlujos.xls'))} value="Export to Excel">Generar reporte</button>
                        </div>
                    </div>

                    <div class="p-4 mb-3 row d-flex justify-content-center">
                        <h4 class="col-6">
                            <label for="tablaRecupLey" class="fw-bold">Recuperación por leyes</label>
                        </h4>
                        <div class="col-auto">
                            <button id="tablaRecupLey" class="btn btn-info  fw-bold text-primary  " onclick="tableToExcel('tableRecupLey', 'Recuperación por leyes', 'RecuperacionLey.xls')" value="Export to Excel">Generar reporte</button>
                        </div>
                    </div>

                    <div class="p-4 mb-3 row d-flex justify-content-center">
                        <h4 class="col-6">
                            <label for="tablaRecupMasa" class="fw-bold">Recuperación másica</label>
                        </h4>
                        <div class="col-auto">
                            <button id="tablaRecupMasa" class="btn btn-info  fw-bold text-primary  " onclick="tableToExcel('tableRecupMasa', 'Recuperación masica', 'RecuperacionMasa.xls')" value="Export to Excel">Generar reporte</button>
                        </div>
                    </div>

                    <div class="p-4 mb-3 row d-flex justify-content-center">
                        <h4 class="col-6">
                            <label for="tablaBalanceSolidos" class="fw-bold">Balance de sólidos</label>
                        </h4>
                        <div class="col-auto">
                            <button id="tablaBalanceSolidos" class="btn btn-info  fw-bold text-primary" onclick="tableToExcel('tableBalanceSol', 'BalanceDeSolidos', 'BalanceDeSolidos.xls')" value="Export to Excel">Generar reporte</button>
                        </div>
                    </div>
                    <table id="tableFlujos">
                        <caption>Tabla de Flujos</caption>
                        <thead>

                            <tr id="titulosFlujos">

                                <th style={style1} scope="col">ID</th>
                                <th style={style1} scope="col">Densidad (T/m3)</th>
                                <th style={style1} scope="col">Porcentaje de solido (%)</th>
                                <th style={style1} scope="col">Ley (%)</th>
                                <th style={style1} scope="col">Caudal (m3/hr)</th>
                                <th style={style1} scope="col">Masa pulpa (T/hr)</th>
                                <th style={style1} scope="col">Masa solido (T/hr)</th>
                                <th style={style1} scope="col">Fino (T/hr)</th>
                            </tr>
                        </thead>
                        <tbody id="listaV">
                            {
                                circuito.map((celda) => {
                                    return celda.Data.map((vector) => {
                                        let data = vector.data
                                        return <tr><td>{vector.id}</td><td>{data.densidad}</td><td>{data.porcSolido}</td>
                                            <td>{data.ley}</td><td>{data.caudalP}</td><td>{data.MPulpa}</td>
                                            <td>{data.MSolido}</td><td>{data.Fino}</td></tr>

                                    })


                                })


                            }
                        </tbody></table>

                </div>
            </div>

        </div>
    </div>

}







export default Sistema_Reportes