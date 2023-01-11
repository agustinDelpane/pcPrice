import Srv from "./Srv";

const SrvList = () => {

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

      return(
    <div className="srvLM">
        {precios.map (s => <Srv servicio={s.servicio} precio={s.precio} id={s.id} />)}
    </div>)
}

export default SrvList