import { useContext } from "react"
import { CartContext } from "./CartContext"



const Cart = () =>{
    const cctx = useContext(CartContext)

    return(
        <button onClick={console.log("Soy Cart")}>":D"</button>
    )
}

export default Cart