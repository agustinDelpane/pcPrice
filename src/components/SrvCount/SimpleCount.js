import { precios } from "../Precios";

const SimpleCount = () => {
    
    return(
        <p>El precio total es de: ${precios.reduce((a, p) => a= a+p.precio, 0)} </p>
    )
}

export default SimpleCount