<div className="mapeo">
          {precios.map((servicio, precio, index) => (<div key={index}><h1>[servicio]</h1>, <h2>[precio]</h2></div> ))}
        </div>





/*---"SrvMap.js"---*/

import SrvList from "./SrvList";

const SrvMap = () => {
/*const [listaServ, setListaServ] = useState ([])
const [cargando, setCargando] = useState ([false])
*/
const precios = [
  {
    servicio: 'Armado de PC básica',
    id: 1,
    precio: 7000
  },
  {
      servicio: 'Armado de PC gamer',
      id: 2,
      precio: 10000
  },
  {
      servicio: 'Backup c/100 GB',
      id: 3,
      precio: 1500
  },
  {
      servicio: 'Cambio de componentes c/u',
      id: 4,
      precio: 2250
  },
  {
      servicio: 'Diagnostico',
      id: 5,
      precio: '1500'
  }
]

/*const getServ = new Promise ((resolve, reject) => {
  let condition = true
  setTimeout(() => {
      if (condition) {resolve (precios)
    }else {
      reject("Ni en pedo, flaco")
    }
  },2000)
})
*/

/*const getServ = () => {
  let condition = true 
  if (condition) {precios}
  else {console.log("Ni en pedo, flaco")}
}*/


/*useEffect(() =>{
  setCargando (true)
  getServ
  .then((resp) => setListaServ(resp))
  .catch((err) => console.log(err))
  .finally(() => setCargando(false))
}, [])

console.log(listaServ)*/

console.log("Tarda, eh")
console.log({precios})


  return(
  <SrvList srv={precios} />
  )
}

export default SrvMap


/*SimpleCount.js*/

function suma (a, b) {
  return( a + b );
}
let resultado = suma(2, 5)


let suma = () => srv.reduce((a, p) => a= a+p.precio, 0)