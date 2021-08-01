import React from 'react';

export default () => {

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };




  return (
    <aside>
      <div className={'container-xxl'}>
        <h4><strong>Arrastre una celda al área de trabajo</strong></h4>

        <div className={'btn-group'} role='group' >
                 
          <button title='Celda usada para iniciar un circuito, es decir no posee entradas' type='button' className='btn btn-outline-primary p-2' onDragStart={(event) => onDragStart(event, 'Alimentacion')} draggable>
            <strong>Alimentación</strong>
          </button >
          <button title='Celda que posee una entrada y dos salidas' type='button' className='btn btn-outline-primary p-2' onDragStart={(event) => onDragStart(event, 'Celda')} draggable>
            <strong>Celda</strong>
          </button >
          <button title='Celda que posee multiples entradas y salidas' type='button' className='btn btn-outline-primary p-2' onDragStart={(event) => onDragStart(event, 'Nodo')} draggable>
            <strong>Nodo</strong>
          </button >
          <button title='Celda usada para finalizar circuito, por la que pasan los minerales sin interes económico, no posee salidas, solo entradas' type='button' className='btn btn-outline-primary p-2' onDragStart={(event) => onDragStart(event, 'ColaFinal')} draggable>
            <strong>Cola Final</strong>
          </button >
          <button title='Celda usada para finalizar circuito, por la que pasan los minerales de interes económico, no posee salidas, solo entradas' type='button' className='btn btn-outline-primary p-2' onDragStart={(event) => onDragStart(event, 'ConcentradoFinal')} draggable>
            <strong>Concentrado Final</strong>
          </button > 

        </div>
        

      </div>
    </aside>
  );
};



