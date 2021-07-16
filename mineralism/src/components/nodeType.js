import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Handle
} from 'react-flow-renderer';
const edgeStyle ={
    color: '#FF3D13'

}
const customNodeStyles = {
    background: '#9CA8B3',
    color: '#FFF',
    padding: 10,
  };

const CustomNodeComponent = ({ data }) => {
    return (
      <div style={customNodeStyles}>
       
        <div>{data.label}</div>
        <Handle type="target" position="left" style={{ borderRadius: 5 }} />
        <Handle
          type="source"
          position="right"
          id="a"
          style={{ top: '30%', borderRadius: 5 ,background: 'green' }}
        />
        <Handle
          type="source"
          position="right"
          id="b"
          style={{ top: '70%', borderRadius: 5,background: 'orange' }}
        />
      </div>
    );
  };
  const NodeComponent = ({ data }) => {
    return (
      <div style={customNodeStyles}>
       
        <div>{data.label}</div>
        <Handle type="target" position="left" style={{ borderRadius: 5 }} />
        <Handle
          type="source"
          position="right"
         
          style={{ top: '50%', borderRadius: 5 }}
        />
        
      </div>
    );
  };
  
const AlimentacionNode= ({ data }) => {
    return (
      <div style={customNodeStyles}>
       
        <div>{data.label}</div>
        <Handle
          type="source"
          position="right"
         id='alimentacion'
          style={{ top: '50%', borderRadius: 5 }}
        />
      </div>
    );
  };

  const ColaNode= ({ data }) => {
    return (
      <div style={customNodeStyles}>
       
        <div>{data.label}</div>
        <Handle
        id='cola'
        type="target" position="left" style={{ borderRadius: 5 }} />
       
      </div>
    );
  };
  const ConcentradoNode= ({ data }) => {
    return (
      <div style={customNodeStyles}>
       
        <div>{data.label}</div>
        <Handle
        id='concentrado'
        type="target" position="left" style={{ borderRadius: 5 }} />
       
      </div>
    );
  };
  
 export default  { 
    special : CustomNodeComponent ,
    input : AlimentacionNode,
    output: ColaNode,
    Alimentacion:AlimentacionNode,
    Celda:CustomNodeComponent,
    Nodo:NodeComponent,
    ColaFinal:ColaNode,
    ConcentradoFinal:ConcentradoNode
  } ;