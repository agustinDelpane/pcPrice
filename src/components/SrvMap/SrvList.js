import Srv from "./Srv";
import { precios } from "../Precios";

const SrvList = () => {
      return(
    <div className="srvLM">
        {precios.map (s => <Srv key={s.id} servicio={s.servicio} precio={s.precio} id={s.id} cat={s.categoria} />)}
    </div>)
    
}

export default SrvList