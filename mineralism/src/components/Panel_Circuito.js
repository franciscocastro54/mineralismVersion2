import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';
import nodeType from './nodeType';
import F_cargar_celda from '../context/F_cargar_celda';
import {
  Elementos,
  GElemento,
  Vector
} from '../data/Circuito';
import { Celda } from '../data/vector';
import icono_edit from '../Graficos/Icono_panel.png'
import F_Elements from '../context/F_Elements';
const initialElements = [
];

let id = 0;
let id2 = 1;
const getId = () => `dndnode_${id++}`;
const getIdVector = () => `Flujo_${id2++}`;
const Borrador3 = () => {

  const [circuito, setCircuito] = useContext(F_cargar_celda)
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const [auxElments,setAuxElements]= useContext(F_Elements)
  setAuxElements(elements)
  console.log(elements)



  useEffect(()=>{

cargarLista()



  },[circuito])
  //--------------------------------------------

  const cargarLista=  useCallback(() => {
    const restoreFlow = async () => {
    
     setElements(c=>[...c,{
  'id': '0',
  'type': 'default',
  'data': { 'label': <h2>si estas leyendo esto hice mal mi trabajo</h2> },
  'position': { 'x': 0, 'y': 0 },
  'style':{'border': '1px solid #777'}
}])
setElements(c=>{
c.pop()
return c

})
    }
    restoreFlow()
    },[setElements])
  
  /*
    const guardarLista=()=>{
      if (reactFlowInstance) {
        const {elements} = reactFlowInstance.toObject();
      console.log(elements)
       elements.map((c,i)=>{
       for(let i=0;i<circuito.length;i++){
        if(circuito[i].id==c.id)
  
       }
  
      }
      )
      }
    
  
    }
   // useEffect(()=>cargarLista(),[])
   // useEffect(()=>guardarLista(),[elements])
  //----------------------------------------------
  */
  const onConnect = (params) => setElements((els) => {
    params.animated = true;
    params.type = 'smoothstep'
    if (params.sourceHandle == 'a') {
      params.style = { stroke: 'green' }
    } else if (params.sourceHandle == 'b') {
      params.style = { stroke: 'orange' }
    }
    setCircuito((circuito) => {
      circuito.map((celda) => {
        if (celda.id == params.source) {
          let aux = Object.create(Vector)
          console.log(aux)
          let newid=getIdVector()
          aux.id = newid
          params.id = newid
          let tipo='';
         if(params.sourceHandle=='alimentacion'){
          tipo='alimentacion'
         }
         if(params.targetHandle=='cola'){
tipo='cola'
         }
         if(params.targetHandle=='concentrado'){
          tipo='concentrado'
                   }
          aux.data={
            'nombre': newid,
            'densidad': 0,
            'porcSolido': 0,
            'ley': 0,
            'caudalP': 0,
            'MPulpa': 0,
            'MSolido': 0,
            'Fino': 0,
            'tipo': tipo
          }
          console.log(aux)
          console.log(aux.data)
          aux.Grafico = params
          params.label = (<>{aux.data.nombre}</>)
          celda.Data = [...celda.Data, aux]
          console.log(celda.Data)
        }
        console.log(params)
        return celda
      })

      return circuito
    })
    return addEdge(params, els)
  });
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => {

      setCircuito((circuitox) => {
        for (let i = 0; i < circuitox.length; i++) {
          if (circuitox[i].id == elementsToRemove[0].id) {
            circuitox.splice(i, 1);
        
          }
          for (let j = 0; j < circuitox[i].Data.length; j++) {
            if (circuitox[i].Data[j].id == elementsToRemove[0].id) {
              circuitox[i].Data.splice(j,1)
            }
          }
        }

        return circuitox
      }
      )
      return removeElements(elementsToRemove, els)
    });

  const onLoad = (_reactFlowInstance) => {
    setReactFlowInstance(_reactFlowInstance)
  
  }
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onClickName = () => {




  }
  useEffect(() => {setElements(e => e); console.log('refrescando grafico')}, [circuito.Grafico])
  const onDrop = (event) => {
    event.preventDefault();
    
   
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    let Nombre = ''
    switch (type) {
      case 'Alimentacion':
        Nombre = 'Alimentación'
        break;
      case 'Celda':
        Nombre = 'Celda'
        break;
      case 'Nodo':
        Nombre = 'Nodo'
        break;
      case 'ColaFinal':
        Nombre = 'Cola Final'
        break;
      case 'ConcentradoFinal':
        Nombre = 'Concentrado Final'
        break;
      default:
        Nombre = 'Error'
        break;
    }
    if(Nombre!='Error'){
    const id = getId();
    let newElement = Object.create(Elementos)
    newElement.id = id
    newElement.Nombre = Nombre
    newElement.focus = true
    const onClick = (element) => {
  
      element.focus = (element.focus) ? false : true
      setCircuito((c) => [...c,element])
      setCircuito((c) => {
        c.pop()
      return c
      })
    }

    const label = <><button className={'btn btn-info'}onClick={() => onClick(newElement)}><img src={icono_edit}/></button><strong>{Nombre}</strong></>

    const newNode = {
      id: id,
      type,
      position,
      data: { label: label },
      style: { border: '1px solid #777' }
    };
    newElement.Grafico = newNode

    setCircuito((c) => c.concat(newElement))

    setElements((es) => es.concat(newNode));
  }
  };
  //<button onClick={cargarLista}>cargar</button>
 
  return (
    <div className='border border-secondary'>
      <ReactFlowProvider>

        <div ref={reactFlowWrapper} >
          <div style={{ height: 500 }}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeType}
            >
              <Controls />
            </ReactFlow>
          </div>
        </div>



      </ReactFlowProvider>
    </div>
  );

}



export default Borrador3