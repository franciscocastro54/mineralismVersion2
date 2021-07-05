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
    break;

    case 2:
     /*
      ReactDOM.render(
        <Sistema_circuto/>,
        document.getElementById('Pantalla_central')
      );*/
      document.getElementById('celda').style.display='none'
      document.getElementById('circuito').style.display='block'
     default:
    break;
}


}

  return <div className="accordion Barra" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Diagramas</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <a onClick={()=>load(1)}><p>Balance Polpaico</p></a>
          <a onClick={()=>load(2)}><p>Circuito Completo</p></a>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Reportes</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          {/*Aqui van los reportes */}
        </div>
      </div>
    </div>

  </div>

}





export default Barra