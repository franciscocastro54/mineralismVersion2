import React from 'react';
import ReactDOM from 'react-dom';
import Sistema_celda from '../containers/Sistema_celda';
import Sistema_circuto from '../containers/Sistema_circuitos';





const Barra = () => {


const load =(num)=>{

switch (num) {
  case 1:
  /*  ReactDOM.render(
      <Sistema_celda/>,
      document.getElementById('Pantalla_central')
    );*/
    document.getElementById('celda').style.display='block'
    document.getElementById('circuito').style.display='none'
    document.getElementById('reportes').style.display='none'
    break;

    case 2:
     /*
      ReactDOM.render(
        <Sistema_circuto/>,
        document.getElementById('Pantalla_central')
      );*/
      document.getElementById('celda').style.display='none'
      document.getElementById('circuito').style.display='block'
      document.getElementById('reportes').style.display='none'
      break;
      case 3:
        document.getElementById('celda').style.display='none'
      document.getElementById('circuito').style.display='none'
      document.getElementById('reportes').style.display='block'
      break;
     default:
    break;
}


}

  return<div className="accordion Barra" id="accordionExample" >
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button csstag="item-menu" className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Diagramas</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body" csstag="menu-body">
          <button className={'py-1'} csstag="bar-button" onClick={()=>load(1)} style={{color: 'white'}}>Circuito unitario</button>
          <button className={'py-1'} csstag="bar-button" onClick={()=>load(2)}style={{color: 'white'}}>Circuito Completo</button>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button csstag="item-menu" className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Reportes</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body" csstag="menu-body">
        <button className={'py-1'} csstag="bar-button" onClick={()=>load(3)}style={{color: 'white'}}>Reportes</button>
        </div>
      </div>
    </div>

  </div>

}





export default Barra