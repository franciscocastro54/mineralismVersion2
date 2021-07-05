







const Vector={
'id':'1',
'data':{
    'nombre': 'default', 
    'densidad': 0, 
    'porcSolido': 0, 
    'ley': 0, 
    'caudalP': 0, 
    'MPulpa': 0, 
    'MSolido': 0, 
    'Fino': 0, 
    'tipo': ''},
'Grafico':{
    'id': '',
    'type': '',
    'source': '',
    'target': '',
    'animated': true,
    'label': ''
  }
}

const GElemento={
    'id': '',
    'type': '',
    'data': { 'label':''},
    'position': { 'x': 0, 'y': 0 },
  }
const Elementos={
    'id':'celda1',
    'Nombre':'Default',
    'Grafico':GElemento,
    'Data':[Vector]
    }
const Circuito=[Elementos]
export {
    Circuito as default,
    Elementos,
    GElemento,
    Vector
}

