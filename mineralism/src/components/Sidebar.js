import React from 'react';

export default ()=>{

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
      };




return (
    <aside>
      <div className={'container-xxl'}>
        <div className={'row'}>
      <div className="col"><h4><strong>Arrastre una parte del circuito</strong></h4></div>
      </div>
      <div className="list-group-item" onDragStart={(event) => onDragStart(event, 'Alimentacion')} draggable>
        Alimentacion
      </div>
      <div className="list-group-item" onDragStart={(event) => onDragStart(event, 'Celda')} draggable>
        Celda
      </div>
      <div className="list-group-item" onDragStart={(event) => onDragStart(event, 'Nodo')} draggable>
        Nodo
      </div>
      <div className="list-group-item" onDragStart={(event) => onDragStart(event, 'ColaFinal')} draggable>
        Cola Final
      </div>
      <div className="list-group-item" onDragStart={(event) => onDragStart(event, 'ConcentradoFinal')} draggable>
        Concentrado Final
      </div>
      </div>
    </aside>
  );
};



