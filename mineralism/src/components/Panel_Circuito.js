import React, { useState, useRef,useEffect,useCallback,useContext} from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';
import nodeType from './nodeType';
import F_cargar_celda from '../context/F_cargar_celda';





const initialElements = [
  {
    id: '1',
    type: 'special',
    data: { label: 'Celda' },
    position: { x: 250, y: 5 },
  },
];

let id = 0;
const getId = () => `dndnode_${id++}`;
const Borrador3=()=>{
     
  
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
const [loadElements,setLoadElements]=useContext(F_cargar_celda)
console.log(useContext(F_cargar_celda))
console.log(loadElements+'\n'+setLoadElements)
//--------------------------------------------
const cargarLista=  useCallback(() => {
  const restoreFlow = async () => {
  const flow =  sessionStorage.getItem('123');
    if (flow) {
      console.log(loadElements.elements)
     
      setElements(loadElements.elements);
     
    }
  }
  restoreFlow()
  },[setElements])
  const guardarLista=()=>{
    if (reactFlowInstance) {
      const flow = reactFlowInstance.toObject();
      console.log(flow)
      setLoadElements (flow);
    }
  

  }
 // useEffect(()=>cargarLista(),[])
 // useEffect(()=>guardarLista(),[elements])
//----------------------------------------------

  const onConnect = (params) => setElements((els) => { params.animated=true;
    params.type='smoothstep'
    if(params.sourceHandle=='a'){
    params.style={stroke:'green'}
  }else if(params.sourceHandle=='b'){
    params.style={stroke:'orange'}}
    return addEdge(params, els)});
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>{
    setReactFlowInstance(_reactFlowInstance)
  }
  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };
  const onClickName=()=>{




  }
  const onDrop = (event) => {
    event.preventDefault();
const id=getId();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    }); 
    let label=''
    switch (type) {
      case '':
        
        break;
                                
      default:
        label=<><button>X</button><strong>{type}</strong></> 
        break;
    }
    const newNode = {
      id: id,
      type,
      position,
      data: { label: label},
    };

    setElements((es) => es.concat(newNode));
  };
//<button onClick={cargarLista}>cargar</button>
  return (
    <div >
      <ReactFlowProvider>
        
        
        <div  ref={reactFlowWrapper} >
          <div style={{height:500}}>
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