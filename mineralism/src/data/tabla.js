import React from 'react'
import DataTable from 'react-data-table-component'


const vectores=[{"nombre":"C R1"            
,"densidad":123
,"porcSolido":1
,"ley":1
,"caudalP":2
,"MPulpa":3
,"MSolido":4
,"Fino":5
,"tipo":"tipo1"
},
{"nombre":"R R1"           
,"densidad":123
,"porcSolido":1
,"ley":2
,"caudalP":2
,"MPulpa":3
,"MSolido":4
,"Fino":2
,"tipo":"tipo1"
}]

const recuperacionM=[
    {   concComun:116.789,
        alimentacion:184.029,
        recuperacion:63.46
    }
]
const recuperacionL=[
    {   concComun:76.32,
        alimentacion:65.559,
        rechazo:47,
        recuperacion:63.299   
    }
]
const alimentacion=
    {   nombre:'alimentacion'        
        ,porcSolido:20.03
        ,ley:65.45
        ,MPulpa:918.788
        ,MSolido:184.033
    }

const relave=
    {   nombre:'relave'        
        ,porcSolido:34.57
        ,ley:47
        ,MPulpa:194.509
        ,MSolido:67.241
    }

const concentrado=
    {   nombre:'concentrado'        
        ,porcSolido:16.12
        ,ley:76.22
        ,MPulpa:724.353
        ,MSolido:116.765
    }

const balanceS=[alimentacion,relave,concentrado]

const error=[
    {
        id: "Masa Pulpa(t/h)",
        diferencia: -0.73,
        porcError: 0.007 
    },
    {
        id: "Masa sólido(t/h)",
        diferencia: -0.26,
        porcError: 0.14 
    },
    {
        id: "Masa Fino(t/h)",
        diferencia: 0.13,
        porcError: 0.01 
    }
]

const columnasV=[
    {
        name: 'ID',
        selector: 'nombre',
        sortable: 'true'
    },
    {
        name: 'Densidad(ton/m3)',
        selector: 'densidad',
        sortable: 'true'
    },
    {
        name: 'Porcentaje de sólido(%)',
        selector: 'porcSolido',
        sortable: 'true'
    },
    {
        name: 'Ley(%)',
        selector: 'ley',
        sortable: 'true'
    },
    {
        name: 'Caudal(m3/hr)',
        selector: 'caudalP',
        sortable: 'true'
    },
    {
        name: 'Masa pulpa(ton/hr)',
        selector: 'MPulpa',
        sortable: 'true'
    },
    {
        name: 'Masa solido(ton/hr)',
        selector: 'MSolido',
        sortable: 'true'
    },
    {
        name: 'Fino(ton/hr)',
        selector: 'Fino',
        sortable: 'true'
    }
]

const columnasRecuM=[
    {
        name: 'Concentrado común(ton/hr)',
        selector: 'concComun',
        sortable: 'false'
    },
    {
        name: 'Alimentación(ton/hr)',
        selector: 'alimentacion',
        sortable: 'false'
    },
    {
        name: 'Recuperacion',
        selector: 'recuperacion',
        sortable: 'false'
    }
]

const columnasRecuL=[
    {
        name: 'Concentrado común(%)',
        selector: 'concComun',
        sortable: 'false'
    },
    {
        name: 'Alimentación(%)',
        selector: 'alimentacion',
        sortable: 'false'
    },{
        name:'Rechazo(%)',
        selector: 'rechazo' ,
        sortable: 'false'
    },
    {
        name: 'Recuperacion(%)',
        selector: 'recuperacion',
        sortable: 'true'
    }
]
const columnasBalanceS=[
    {
        name: 'Sólido(%)',
        selector: 'porcSolido',
        sortable: 'true'
    },
    {
        name: 'Masa Pulpa(ton/hr)',
        selector: 'MPulpa',
        sortable: 'true',
    },
    {
        name: 'Masa Sólido(ton/hr)',
        selector: 'MSolido',
        sortable: 'true'
    },
    {
        name: 'Ley(%)',
        selector: 'ley',
        sortable: 'true'
    }
]

const columnasError=[
    {
        name: 'ID',
        selector: 'id',
        sortable: 'false'
    },
    {
        name: 'Diferencia(T/h)',
        selector: 'diferencia',
        sortable: 'true'
    },
    {
        name: 'Porcentaje de error',
        selector: 'porcError',
        sortable: 'true'
    }
]

const paginacionOpciones={
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

function TableVector(){
    return(
        <div className="table-responsive">
            <DataTable                 
                columns={columnasV}
                data={vectores}
                title="Flujos ingresados"
                pagination
                paginationComponentOptions={paginacionOpciones}
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}

function TableRecupM(){
    return(
        <div className="table-responsive">
            <DataTable 
                columns={columnasRecuM}
                data={recuperacionM}
                title="Recuperación por Masa"
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}

function TableRecupL(){
    return(
        <div className="table-responsive">
            <DataTable 
                columns={columnasRecuL}
                data={recuperacionL}
                title="Recuperación por leyes"
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}

function TableBalanceS() {
    return(
        <div className="table-responsive">
            <DataTable 
                columns={columnasBalanceS}
                data={balanceS}
                title="Recuperación por leyes"
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}
//tabla diferencia por hacer

function TableError() {
    return(
        <div className="table-responsive">
            <DataTable 
                columns={columnasError}
                data={error}
                title="Error"
                fixedHeader
                fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}





/*

function viewVector(vector){
    return(
        <tr>
            <td>{Truncate(vector.nombre)}</td>
            <td>{Truncate(vector.densidad)}</td>
            <td>{Truncate(vector.porcSolido)}</td>
            <td>{Truncate(vector.ley)}</td>
            <td>{Truncate(vector.caudalP)}</td>
            <td>{Truncate(vector.MPulpa)}</td>
            <td>{Truncate(vector.MSolido)}</td>
            <td>{Truncate(vector.Fino)}</td>
        </tr>
    )
}

function listarV(listarV) {
    for (const vector in listaVector) {
        viewVector(vector)
    }

}

function tablaVector(...listaVector){
    return(
        <>
        <table>
            
            <thead>
                <th>id</th>
                <th>Densidad(ton/m3)</th>
                <th>Porcentaje de sólido(%)</th>
                <th>Ley(%)</th>
                <th>Caudal(m3/hr)</th>
                <th>Masa pulpa(ton/hr)</th>
                <th>Masa solido(ton/hr)</th>
                <th>Fino(ton/hr)</th>
                <script>
                    {% for  vector in listaVector %} 
                        <>viewVector(vector)</>
                    {%endfor%}
                </script>
            </thead>
            
        </table>
        </>
    )
}

function tablaBalance(listaVectores) {
    
}

*/
export {
TableVector as default,
TableBalanceS,
TableRecupL,
TableRecupM,
TableError
}  

