const Vector = {
  'id': '1',
  'Grafico': {
    'id': '',
    'type': '',
    'source': '',
    'target': '',
    'animated': true,
    'label': ''
  },
  'data': {
    'nombre': 'default',
    'densidad': 0,
    'porcSolido': 0,
    'ley': 0,
    'caudalP': 0,
    'MPulpa': 0,
    'MSolido': 0,
    'Fino': 0,
    'tipo': ''
  },
}
const GElemento = {
  'id': '',
  'type': '',
  'data': { 'label': '' },
  'position': { 'x': 0, 'y': 0 },
  'style':{'border': '1px solid #777'}
}
const Elementos = {
  'id': 'celda1',
  'focus':true,
  'Nombre': 'Default',
  'Grafico': GElemento,
  'Data': []
}
const Circuito = []
export {
  Circuito as default,
  Elementos,
  GElemento,
  Vector
}