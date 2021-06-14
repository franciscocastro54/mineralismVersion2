import React,{useState} from 'react';






const Lista_flujos=({type='Alimentacion'})=>{

const Titulo=type;
const [list,setList]=useState(['R1']);

const addCelda=()=>{

    setList((list)=>[...list,'R1'])
}
    return <>    
    <div className={'container-xxl border'}>
<div className={'row'}>
    <div className={'col-10'}>
        <h4>{Titulo}</h4></div>
        <div className={'col-2'}>
        <button onClick={addCelda}>+</button>            
        </div>
        </div>
<div className={'row'}><div className={'col border'}>
    <ul>
{ list.map(
(list)=>{ return<li><button>{list}</button></li>}
    )}
    </ul>
    
    </div></div>


    </div>
    </>

}




export default Lista_flujos;