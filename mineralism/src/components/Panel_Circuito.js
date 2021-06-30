import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
} from 'react-flow-renderer';
import nodeType from './nodeType';






const initialElements = [
  /*{
    id: '1',
    type: 'special',
    data: { label: 'Celda' },
    position: { x: 250, y: 5 },
  },*/
];

let id = 0;
const getId = () => `dndnode_${id++}`;
const Borrador3=()=>{
     
  
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => { params.animated=true;
    params.type='smoothstep'
    return addEdge(params, els)});
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

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
        label=<><button data-bs-toggle="modal" data-bs-target="#Input_List_C">X</button><strong>{type}</strong></> 
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