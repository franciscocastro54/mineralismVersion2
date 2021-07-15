import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import TableToExcel from '../data/TableToExcel';
import F_cargar_celda from '../context/F_cargar_celda';
import Truncate from '../data/Truncado';
import Circuito from '../data/Circuito';
import F_Balance from '../context/F_Balance';
const Generacion_Reportes = () => {


    const style1 = { color: 'cornsilk', background: '#0053A4', border: '1px solid black' };
    const style2 = { color: 'rgb(250, 246, 240)', background: 'rgb(61, 96, 161)', border: '1px solid black' }
    const [circuitoCompleto, setCircuitoCompleto] = useContext(F_cargar_celda)
    const [circuitoCajaNegra, setCircuitoCajaNegra] = useContext(F_Balance)
    const [circuito, setCircuito] = useState(Circuito)



    const CambiarFuente = (event) => {
        console.log(event)
        switch (event.target.id) {
            case 'flexRadioDefault1':
setCircuito(circuitoCajaNegra)
                break;
            case 'flexRadioDefault2':
                setCircuito(circuitoCompleto)
                break;


        }

    }

    return <div className={'container-xxl'}>
        <div className={'row'}>

            <div className={'col'}>
                <div class="p-3 bg-primary text-white border border-primary  ">
                    <div class="d-flex justify-content-center">
                        <h2>Reportes</h2>
                    </div>
                    <div class="p-4 mb-3 row d-flex justify-content-center">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onFocus={(event) => CambiarFuente(event)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Circuito Polpaico
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onFocus={(event) => CambiarFuente(event)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Circuito Completo
                            </label>
                        </div>
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


                </div>


            </div>





        </div>
        <div className={'row'}>
            <div className={'col'}>



                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Tabla de Flujos</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Recuperacion por leyes</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Recuperación másica</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Balance de sólidos" type="button" role="tab" aria-controls="contact" aria-selected="false">Balance de sólidos</button>
                    </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                    <div class="tab-pane fade " id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                            return <tr><td style={style2}>{vector.id}</td><td style={style2}>{data.densidad}</td><td style={style2}>{data.porcSolido}</td>
                                                <td style={style2}>{data.ley}</td><td style={style2}>{data.caudalP}</td><td style={style2}>{Truncate(data.MPulpa)}</td>
                                                <td style={style2}>{Truncate(data.MSolido)}</td><td style={style2}>{Truncate(data.Fino)}</td></tr>

                                        })


                                    })


                                }
                            </tbody>
                        </table></div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                </div>


            </div>
        </div>

    </div>
}







export default Generacion_Reportes