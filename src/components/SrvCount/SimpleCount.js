/*import { precios } from "../Precios";*/

import { precios } from "../Precios";
import SrvList from "../SrvMap/SrvList";

const SimpleCount = () => {

    const srv = [
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
            precio: 1500
        }
    ]
    function suma (a, b) {
        return( a + b );
    }
    let resultado = suma(srv.precio[0], 5)

    return(
        <p>{resultado}</p>
    )
}

export default SimpleCount