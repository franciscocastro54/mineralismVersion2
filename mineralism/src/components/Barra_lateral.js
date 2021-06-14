import React from 'react';








const Barra=()=>{




return <div class="accordion Barra" id="accordionExample">
<div class="accordion-item">
  <h2 class="accordion-header" id="headingOne">
    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Diagramas</strong>
    </button>
  </h2>
  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    <div class="accordion-body">
    <a onClick={()=>{console.log('hola mundo')}}><p>Caja Negra</p></a>
    <a onClick={()=>{console.log('hola mundo')}}><p>Circuito Completo</p></a>
    </div>
  </div>
</div>
<div class="accordion-item">
  <h2 class="accordion-header" id="headingTwo">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
   <strong>Reportes</strong>
    </button>
  </h2>
  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
      {/*Aqui van los reportes */}
    </div>
  </div>
</div>

</div>

}





export default Barra