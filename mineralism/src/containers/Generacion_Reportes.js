import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import TableToExcel from '../data/TableToExcel';
import F_cargar_celda from '../context/F_cargar_celda';
import Truncate from '../data/Truncado';
import Circuito from '../data/Circuito';
import F_Balance from '../context/F_Balance';

import vector, {
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

const Generacion_Reportes = () => {


    const style1 = {'background': 'rgb(84, 97, 155)', 'text-align':'center'};
    const style2 = { color: '#FFF', background: 'rgb(89, 131, 221)', border: '1px solid black' }
    const [circuitoCompleto, setCircuitoCompleto] = useContext(F_cargar_celda)
    const [circuitoCajaNegra, setCircuitoCajaNegra] = useContext(F_Balance)
    const [circuito, setCircuito] = useState(Circuito)



    const CambiarFuente = (event) => {

        let alimentacion = []
        let concentrado = []
        let relave = []
        switch (event.target.id) {
            case 'flexRadioDefault1':
                setCircuito(circuitoCajaNegra)
                console.log(circuitoCajaNegra)
                circuitoCajaNegra.map((celda) =>

                    celda.Data.map((vector => {
                        switch (vector.data.tipo) {
                            case 'Alimentación_F':
                                alimentacion.push(vector.data)
                                break;
                            case 'Cola_T':
                                relave.push(vector.data)
                                break;
                            case 'Concentrado_C':
                                concentrado.push(vector.data)
                                break;
                        }



                    }
                    ))
                )




                break;
            case 'flexRadioDefault2':
                setCircuito(circuitoCompleto)


                circuitoCompleto.map((celda) =>
                    celda.Data.map((vector => {
                        switch (vector.data.tipo) {
                            case 'alimentacion':
                                alimentacion.push(vector.data)
                                break;
                            case 'cola':
                                relave.push(vector.data)
                                break;
                            case 'concentrado':
                                concentrado.push(vector.data)
                                break;
                        }



                    }
                    ))
                )

                break;


        }
        console.log(alimentacion, concentrado, relave)
        let recupley = ListaRecupLey(alimentacion, relave, concentrado).recupLey
        let recupM = ListaRecupMasa(alimentacion, concentrado).recupMasa
        let ListError = ListaError(alimentacion, relave, concentrado).Error;
        let recuperacionL = document.getElementById("recuperacionL");
        let concentradoComunL = document.getElementById("concentradoComunL");
        let alimentacionL = document.getElementById("alimentacionL");
        let rechazoL = document.getElementById("rechazoL");
        recuperacionL.innerHTML = ("<td >" + Truncate(recupley.recuperacion) + "</td>");
        concentradoComunL.innerHTML = ("<td >" + Truncate(recupley.concComun) + "</td>");
        alimentacionL.innerHTML = ("<td >" + Truncate(recupley.alimentacion) + "</td>");
        rechazoL.innerHTML = ("<td >" + Truncate(recupley.rechazo) + "</td>");
        let recuperacionM = document.getElementById("recuperacionM");
        let concentradoComunM = document.getElementById("concentradoComunM");
        let alimentacionM = document.getElementById("alimentacionM");
        recuperacionM.innerHTML = ("<td >" + Truncate(recupM.recuperacion) + "</td>");
        concentradoComunM.innerHTML = ("<td >" + Truncate(recupM.concComun) + "</td>");
        alimentacionM.innerHTML = ("<td >" + Truncate(recupM.alimentacion) + "</td>");
        let Balance_Mpulpa = document.getElementById('Balance_Mpulpa');
        let Balance_MpulpaP = document.getElementById('Balance_Mpulpa%');
        let Balance_MFino = document.getElementById('Balance_MFino');
        let Balance_MFinoP = document.getElementById('Balance_MFino%');
        let Balance_Msolido = document.getElementById('Balance_Msolido');
        let Balance_MsolidoP = document.getElementById('Balance_Msolido%');
        Balance_Mpulpa.innerHTML = ("<td >" + Truncate(ListError.masaPulpa.diferencia) + "</td>");
        Balance_MpulpaP.innerHTML = ("<td >" + Truncate(ListError.masaPulpa.porcError) + "</td>");
        Balance_MFino.innerHTML = ("<td >" + Truncate(ListError.masaFino.diferencia) + "</td>");
        Balance_MFinoP.innerHTML = ("<td >" + Truncate(ListError.masaFino.porcError) + "</td>");
        Balance_Msolido.innerHTML = ("<td >" + Truncate(ListError.masaSolido.diferencia) + "</td>");
        Balance_MsolidoP.innerHTML = ("<td >" + Truncate(ListError.masaSolido.porcError) + "</td>");
    }

    return <div className={'container-xxl'}>
        <div className={'row'}>

            <div className={'col'}>
                <div class="shadow-sm p-3 mb-5 bg-body rounded container">

                    <h3>Reportes</h3>
                    <div class={'p-3 container'} csstag="opciones" >

                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onFocus={(event) => CambiarFuente(event)} />
                            <label class="form-check-label" for="flexRadioDefault1">
                                Circuito unitario
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onFocus={(event) => CambiarFuente(event)} />
                            <label class="form-check-label" for="flexRadioDefault2">
                                Circuito Completo
                            </label>
                        </div>
                    </div>
                    <div class="p-3 container" csstag="contenido">
                        <div className={'row'}>
                            <div class='p-3 col-3'>
                                
                                 Tabla de flujos
                                 </div>
                            

                                <div class="p-2 col-auto">
                                    <button id="tablaFlujos" class="btn btn-primary" onClick={() => (TableToExcel('tableFlujos', 'flujos', 'tablaFlujos.xls'))} value="Export to Excel">Generar reporte</button>
                                </div>
                           
                        </div>
                        <div className={'row'}>
                        <div class='p-3 col-3'>
                                   Recuperación por leyes
                            </div>
                            <div class="p-2 col-auto">
                                    <button id="tablaRecupLey" class="btn btn-primary" onClick={() => (TableToExcel('tableRecupLey', 'Recuperación por leyes', 'RecuperacionLey.xls'))} value="Export to Excel">Generar reporte</button>
                                </div>
                        
                        </div>
                        <div className={'row'}>
                            <div class='p-3 col-3'>
                              Recuperación másica
                              </div>
                                <div class="p-2 col-auto">
                                    <button id="tablaRecupMasa" class="btn btn-primary" onClick={() => TableToExcel('tableRecupMasa', 'Recuperación masica', 'RecuperacionMasa.xls')} value="Export to Excel">Generar reporte</button>
                                </div>
                         
                        </div>
                        <div className={'row'}>
                            <div class='p-3 col-3'>
                               Balance de sólidos
                               </div>
                               <div class="p-2 col-auto">
                                    <button id="tablaBalanceSolidos"class="btn btn-primary" onClick={() => TableToExcel('tableBalanceSol', 'BalanceDeSolidos', 'BalanceDeSolidos.xls')} value="Export to Excel">Generar reporte</button>
                                </div>
                         
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
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#Balance_de_sólidos" type="button" role="tab" aria-controls="contact" aria-selected="false">Balance de sólidos</button>
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
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <table id="tableRecupLey">
                            <caption>Recuperacion por ley</caption>
                            <thead>
                                <tr>
                                    <th class="ID" scope="col"  style={style1}>ID</th>
                                    <th class="unidadLey" scope="col"  style={style1}>%</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="name" style={style2}>Concentrado comun</td>
                                    <td id="concentradoComunL" style={style2} ></td>
                                </tr>
                                <tr>
                                    <td class="name" style={style2}>Alimentacion</td>
                                    <td id="alimentacionL" style={style2}></td>
                                </tr>
                                <tr>
                                    <td class="name" style={style2}>Rechazo</td>
                                    <td id="rechazoL" style={style2}></td>
                                </tr>
                                <tr>
                                    <td class="name" style={style2}>Recuperacion</td>
                                    <td id="recuperacionL" style={style2}></td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <table id="tableRecupMasa">
                            <caption>Recuperacion masica</caption>
                            <thead>


                                <tr>
                                    <th class="ID" scope="col"  style={style1}>ID</th>
                                    <th class="unidadMasa" scope="col"  style={style1}>T/h</th>

                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td class="name" style={style2} >Concentrado comun</td>
                                    <td id="concentradoComunM" style={style2} ></td>
                                </tr>
                                <tr>
                                    <td class="name" style={style2} >Alimentacion</td>
                                    <td id="alimentacionM" style={style2}></td>
                                </tr>
                                <tr>
                                    <td class="name" style={style2}>Recuperacion</td>
                                    <td id="recuperacionM" style={style2}></td>
                                </tr>
                            </tbody>

                        </table>

                    </div>
                    <div class="tab-pane fade" id="Balance_de_sólidos" role="tabpanel" aria-labelledby="contact-tab">
                        <table id={'tableBalanceSol'}  >
                            <caption>Balance de sólido</caption>
                            <thead>
                                <tr>
                                    <th style={style1}>ID</th>
                                    <th style={style1}>Diferencia (T/hr)</th>
                                    <th style={style1}>Porcentaje de error</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th style={style2}>Masa Pulpa</th>
                                    <th id={'Balance_Mpulpa'} style={style2}></th>
                                    <th id={'Balance_Mpulpa%'} style={style2}></th>
                                </tr>

                                <tr>
                                    <th style={style2}>Masa Sólido</th>
                                    <th id={'Balance_Msolido'} style={style2}></th>
                                    <th id={'Balance_Msolido%'} style={style2}></th>
                                </tr>

                                <tr>
                                    <th style={style2}>Masa Fino</th>
                                    <th id={'Balance_MFino'} style={style2}></th>
                                    <th id={'Balance_MFino%'} style={style2}></th>
                                </tr>


                            </tbody>

                        </table>

                    </div>
                </div>


            </div>
        </div>

    </div>
}







export default Generacion_Reportes