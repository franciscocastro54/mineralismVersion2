import React, { useState, useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import Input_vector from './Input_vector';
import F_cargar_celda from '../context/F_cargar_celda';
import { findVector,ListaVectores } from '../data/vector';




const Lista_flujos = ({ type = 'Alimentacion' }) => {
    const context = useContext(F_cargar_celda);
    const Titulo = type;
    const [list, setList] = useState([]);
    const [vector, setVector] = useState('prueba');
    const cargarLista=()=>{
    if(sessionStorage.getItem('ListaBalance'+type)!=null){
        setList(JSON.parse(sessionStorage.getItem('ListaBalance'+type)))
    
    }
    }
    const guardarLista=()=>{

sessionStorage.setItem('ListaBalance'+type,JSON.stringify(list))


    }
    useEffect(()=>cargarLista(),[])
    useEffect(()=>guardarLista(),[list])
   
    /*

    const addCelda=()=>{

    setList((list)=>[...list,'R2'])
    console.log(type+'Nombre')
}*/
    const openCelda = (list) => {


        setVector(list)
      
        if (sessionStorage.getItem('listaVectores'+type) != null) {
            const listt= ListaVectores()
            listt.updateList(JSON.parse(sessionStorage.getItem('listaVectores'+type)))
         if(listt.findName(list)){
            const vector=listt.findVector(list)
            document.getElementById('inputNombre' + type).value = vector.nombre
            document.getElementById('inputdDensidad' + type).value = vector.densidad
            document.getElementById('inputSolido' + type).value = vector.porcSolido
            document.getElementById('inputLey' + type).value = vector.ley
            document.getElementById('inputCaudal' + type).value = vector.caudalP
        }else{  document.getElementById('inputNombre' + type).value = ''
        document.getElementById('inputdDensidad' + type).value = ''
        document.getElementById('inputSolido' + type).value = ''
        document.getElementById('inputLey' + type).value = ''
        document.getElementById('inputCaudal' + type).value = ''}
    }else {
            document.getElementById('inputNombre' + type).value = ''
            document.getElementById('inputdDensidad' + type).value = ''
            document.getElementById('inputSolido' + type).value = ''
            document.getElementById('inputLey' + type).value = ''
            document.getElementById('inputCaudal' + type).value = ''
        }
    }

    return <>
        <div className={'container-xxl border '}  >
            <div className={'row'}>
                <div className={'col-10'}>
                    <h4 >{Titulo}</h4></div>
                <div className={'col-2'}>
                    <button data-bs-toggle={"modal"}
                        data-bs-target={"#Modal" + type} onClick={() => {/*addCelda()*/; openCelda() }}>+</button>
                </div>
            </div>
            <div className={'row'}><div className={'col border '} >
                <ul className={'list-group'}>
                    {list.map(
                        (list) => {
                            return <li><button type={"button"} className={"btn btn-primary"} data-bs-toggle={"modal"}
                                data-bs-target={"#Modal" + type} onClick={() => openCelda(list)}>{list}</button></li>
                        }
                    )}
                </ul>
            </div></div>
            <Input_vector f={[list, setList]} id={vector} type={Titulo} />

        </div>
    </>

}




export default Lista_flujos;