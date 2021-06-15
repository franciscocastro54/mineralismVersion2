import React,{useState,useEffect,useRef,useContext} from 'react';
import ReactDOM from 'react-dom';
import Input_vector from './Input_vector';
import F_cargar_celda from '../context/F_cargar_celda';




const Lista_flujos=({type='Alimentacion'})=>{
    const context=useContext(F_cargar_celda);
const Titulo=type;
const [list,setList]=useState(['R1']);
const [vector,setVector]=useState('prueba');


const addCelda=()=>{

    setList((list)=>[...list,'R1'])
}
const inputRef = useRef(null)
const openCelda=(list)=>{


setVector(list)
context[1]()
console.log(context[1])
}

    return <>    
    <div className={'container-xxl border'}>
<div className={'row'}>
    <div className={'col-10'}>
        <h4 >{Titulo}</h4></div>
        <div className={'col-2'}>
        <button onClick={addCelda}>+</button>            
        </div>
        </div>
<div className={'row'}><div className={'col border'}>
    <ul>
{ list.map(
(list)=>{ return<li><button type={"button"} className={"btn btn-primary"} data-bs-toggle={"modal"} 
data-bs-target={"#Modal"+vector+type} onClick={()=>openCelda(list)}>{list}</button></li>}
    )}
    </ul>
    
    </div></div>
<Input_vector  id={vector} type={Titulo}/>

    </div>
    </>

}




export default Lista_flujos;