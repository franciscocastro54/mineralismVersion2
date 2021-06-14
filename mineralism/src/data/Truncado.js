



const Truncate=(num,dec=3)=>{
const resultado= (Math.trunc((num* Math.pow(10,dec))))/( Math.pow(10,dec))


return resultado;
}

export default Truncate;