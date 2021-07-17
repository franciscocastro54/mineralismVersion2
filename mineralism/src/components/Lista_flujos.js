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
                    className={'btn '}    data-bs-target={"#Modal" + type} onClick={() => {/*addCelda()*/; openCelda() }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                  </svg></button>
                </div>
            </div>
            <div className={'row'}>
                <div className={'col border px-0'} style={{minHeight: '15em',maxHeight:'15em'}}>
                <ul className={'list-group scrollspy-example'}>
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