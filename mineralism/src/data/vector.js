import React, { useState } from "react";
//v1
function Vector(nombre1 = "nn", densidadP1 = 0, porcSolido1 = 0, ley1 = 0, caudalP1 = 0, tipo = "") {

    const calMPulpa = () => (caudalP1 * densidadP1)
    const calMSolido = () => (calMPulpa() * porcSolido1 / 100)
    const calFino = () => (ley1 * calMSolido() / 100)

    const MPulpa1 = calMPulpa();
    const MSolido1 = calMSolido();
    const Fino1 = calFino();


    return {
        nombre: nombre1
        , densidad: densidadP1
        , porcSolido: porcSolido1
        , ley: ley1
        , caudalP: caudalP1
        , MPulpa: MPulpa1
        , MSolido: MSolido1
        , Fino: Fino1
        , tipo: tipo
    }
}

function Celda(nombre = "celda", VEntrada, VConcentrado, VRelave) {
    return {
        nombre: nombre,
        VEntrada: VEntrada,
        VConcentrado: VConcentrado,
        VRelave: VRelave
    }
}



function RecupMasa(listaVAlim, listaVConcentrado) {

    const concComun = sumaParam(listaVConcentrado, 'MSolido')
    const alimentacion = sumaParam(listaVAlim, 'MSolido')
    const recuperacion = (concComun / alimentacion) * 100
    return {
        concComun: concComun,
        alimentacion: alimentacion,
        recuperacion: recuperacion
    }
}
function RecupLey(listaVAlim, listaVRelave, listaVConcentrado) {
    console.log(listaVAlim, listaVRelave, listaVConcentrado)
    let concComun = 0
    for (let i = 0; i < listaVConcentrado.length; i++) {
        concComun += (listaVConcentrado[i].MPulpa) * (listaVConcentrado[i].ley)

    }
    concComun /= sumaParam(listaVConcentrado, "MPulpa")

    let alimentacion = 0
    for (let i = 0; i < listaVAlim.length; i++) {
        alimentacion += (listaVAlim[i].MPulpa) * (listaVAlim[i].ley)
    }
    alimentacion /= sumaParam(listaVAlim, "MPulpa")
    let rechazo = 0
    for (let i = 0; i < listaVRelave.length; i++) {
        rechazo += (listaVRelave[i].MPulpa) * (listaVRelave[i].ley)
    }
    rechazo /= sumaParam(listaVRelave, "MPulpa")

    const recuperacion = ((alimentacion - rechazo) / (concComun - rechazo)) * 100

    console.log(concComun, alimentacion, rechazo, recuperacion)
    return {
        concComun: concComun,
        alimentacion: alimentacion,
        rechazo: rechazo,
        recuperacion: recuperacion
    }
}

function findVector(id, listado) {
    const lista = listado.filter(vector => vector.tipo == id)
    return lista
}


//v2

const sumaParam = (lista, param) => {

    const suma = lista.map(vector => vector[`${param}`]).reduce((total, vec) => total + vec, 0);
    return suma
}

const ListaVectores = () => {

    let vectores = []

    const addVector = (nombre1, densidadP1, porcSolido1, ley1, caudalP1, tipo = "") => {

        const calMPulpa = () => (caudalP1 * densidadP1)
        const calMSolido = () => (calMPulpa() * porcSolido1 / 100)
        const calFino = () => (ley1 * calMSolido() / 100)

        const MPulpa1 = calMPulpa();
        const MSolido1 = calMSolido();
        const Fino1 = calFino();

        const newVector = {
            nombre: nombre1,
            densidad: densidadP1,
            porcSolido: porcSolido1,
            ley: ley1,
            caudalP: caudalP1,
            MPulpa: MPulpa1,
            MSolido: MSolido1,
            Fino: Fino1,
            tipo: tipo
        }
        vectores = ([...vectores, newVector])
        console.log(vectores)
        return vectores;
    }

    const removeVector = (name) => {

        const newVector = vectores.filter((vector) => vector.nombre !== name)
        return (newVector)

    }

    const updateVector = (oldName, newName, densidadP1, porcSolido1, ley1, caudalP1, tipo = "") => {

        const newVector = vectores.map((vector) => {
            if (vector.nombre === oldName) {
                const calMPulpa = () => (caudalP1 * densidadP1)
                const calMSolido = () => (calMPulpa() * porcSolido1 / 100)
                const calFino = () => (ley1 * calMSolido() / 100)

                const MPulpa1 = calMPulpa();
                const MSolido1 = calMSolido();
                const Fino1 = calFino();

                vector = {
                    nombre: newName,
                    densidad: densidadP1,
                    porcSolido: porcSolido1,
                    ley: ley1,
                    caudalP: caudalP1,
                    MPulpa: MPulpa1,
                    MSolido: MSolido1,
                    Fino: Fino1,
                    tipo: tipo
                }
            }
            return vector

        })
        return (newVector)
    }

    const findName = (name) => { 
        const listado = lista.reduce((acc,el)=>( { ...acc,[el.nombre]:el,} ),{})
        return listado[name]=true ?? false
    }

    const view = () =>{
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Densidad (T/m3)</th>
                        <th>Porcentaje de sólido (%)</th>
                        <th>Ley (%)</th>
                        <th>Caudal (m3/hr)</th>
                        <th>Masa pulpa (T/hr)</th>
                        <th>Masa sólido (T/hr)</th>
                        <th>Fino (T/hr)</th>
                    </tr>
                    <tbody>
                        {
                            vectores.map(
                                (vector)=>{
                                    <tr>
                                        <td>{vector.nombre}</td>
                                        <td>{vector.densidad}</td>
                                        <td>{vector.porcSolido}</td>
                                        <td>{vector.ley}</td>
                                        <td>{vector.caudalP}</td>
                                        <td>{vector.MPulpa}</td>
                                        <td>{vector.MSolido}</td>
                                        <td>{vector.Fino}</td>
                                    </tr>
                                }
                            )
                        }

                    </tbody>
                </thead>
            </table>
        )
    }

    return { vectores, addVector, removeVector, updateVector,findName , view }

}

const ListaRecupLey = ([listaVAlim], [listaVRelave], [listaVConcentrado]) => {
  

    let concComun = 0
    for (let i = 0; i < listaVConcentrado.length; i++) {
        concComun += (listaVConcentrado[i].MPulpa) * (listaVConcentrado[i].ley)
    }
    concComun /= sumaParam(listaVConcentrado, "MPulpa")

    let alimentacion = 0
    for (let i = 0; i < listaVAlim.length; i++) {
        alimentacion += (listaVAlim[i].MPulpa) * (listaVAlim[i].ley)
    }
    alimentacion /= sumaParam(listaVAlim, "MPulpa")

    let rechazo = 0
    for (let i = 0; i < listaVRelave.length; i++) {
        rechazo += (listaVRelave[i].MPulpa) * (listaVRelave[i].ley)
    }
    rechazo /= sumaParam(listaVRelave, "MPulpa")

    const recuperacion = ((alimentacion - rechazo) / (concComun - rechazo)) * 100

    const recupLey = {
        concComun: concComun,
        alimentacion: alimentacion,
        rechazo: rechazo,
        recuperacion: recuperacion
    }

    

    const view = () => {
        
        return (

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Porcentaje</th>
                    </tr>
                    <tbody>
                        <tr>
                            <th>Concentrado común</th>
                            <th>{recupLey.concComun}</th>
                        </tr>

                        <tr>
                            <th>Alimentación</th>
                            <th>{recupLey.alimentacion}</th>
                        </tr>

                        <tr>
                            <th>Rechazo</th>
                            <th>{recupLey.rechazo}</th>
                        </tr>

                        <tr>
                            <th>Recuperación</th>
                            <th>{recupLey.recuperacion}</th>
                        </tr>

                    </tbody>
                </thead>
            </table>
        )
    }
    return {view, recupLey}

}

const ListaRecupMasa = ([listaVAlim], [listaVConcentrado]) => {

    const concComun = sumaParam(listaVConcentrado, 'MSolido')
    const alimentacion = sumaParam(listaVAlim, 'MSolido')
    const recuperacion = (concComun / alimentacion) * 100

    const recupMasa = {
        concComun: concComun,
        alimentacion: alimentacion,
        recuperacion: recuperacion
    }




    const view = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>T/hr</th>
                    </tr>
                    <tbody>
                        <tr>
                            <th>Concentrado común</th>
                            <th>{recupMasa.concComun}</th>
                        </tr>

                        <tr>
                            <th>Alimentación</th>
                            <th>{recupMasa.alimentacion}</th>
                        </tr>

                        <tr>
                            <th>Recuperación</th>
                            <th>{recupMasa.recuperacion}</th>
                        </tr>

                    </tbody>
                </thead>
            </table>
        )
    }
    return {view,recupMasa}
}

const ListaError = ([listaVAlim], [listaVRelave], [listaVConcentrado]) => {



    const difPulpa = sumaParam(listaVAlim, 'MPulpa') - (sumaParam(listaVConcentrado, 'MPulpa') + sumaParam(listaVRelave, 'MPulpa'))
    const difSolido = sumaParam(listaVAlim, 'MSolido') - (sumaParam(listaVConcentrado, 'MSolido') + sumaParam(listaVRelave, 'MSolido'))
    const difFino = sumaParam(listaVAlim, 'Fino') - (sumaParam(listaVConcentrado, 'Fino') + sumaParam(listaVRelave, 'Fino'))

    const porcPulpa = (sumaParam(listaVAlim, 'MPulpa') / (sumaParam(listaVConcentrado, 'MPulpa') + sumaParam(listaVRelave, 'MPulpa'))) * 100
    const porcSolido = (sumaParam(listaVAlim, 'MSolido') / (sumaParam(listaVConcentrado, 'MSolido') + sumaParam(listaVRelave, 'MSolido'))) * 100
    const porcFino = (sumaParam(listaVAlim, 'Fino') / (sumaParam(listaVConcentrado, 'Fino') + sumaParam(listaVRelave, 'Fino'))) * 100

    const Error = {
        masaPulpa: {
            diferencia: difPulpa,
            porcError: porcPulpa
        }
        , masaSolido: {
            diferencia: difSolido,
            porcError: porcSolido
        }
        , masaFino: {
            diferencia: difFino,
            porcError: porcFino
        }
    }

        

    
    const view = () => {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Diferencia (T/hr)</th>
                        <th>Porcentaje de error</th>
                    </tr>
                    <tbody>
                        <tr>
                            <th>Masa Pulpa</th>
                            <th>{Error.masaPulpa.diferencia}</th>
                            <th>{Error.masaPulpa.porcError}</th>
                        </tr>

                        <tr>
                            <th>Masa Sólido</th>
                            <th>{Error.masaSolido.diferencia}</th>
                            <th>{Error.masaSolido.porcError}</th>
                        </tr>

                        <tr>
                            <th>Masa Fino</th>
                            <th>{Error.masaFino.diferencia}</th>
                            <th>{Error.masaFino.porcError}</th>
                        </tr>


                    </tbody>
                </thead>
            </table>
        )
    }
    return {view, Error}

}



export {
    Vector as default,
    Celda,
    sumaParam,
    RecupMasa,
    RecupLey,
    ListaVectores,
    ListaRecupLey,
    ListaRecupMasa,
    ListaError
};