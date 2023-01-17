import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [srvList, setSrvList] = useState([])
    const addSrv = srv =>{
        const srvInCart = srvList.find((tjo) => tjo.id === srv.id)
        if (srvInCart){
            const upCart = srvList.map((tjo) =>{
                if(tjo.id === srv.id){
                    return{
                        ...tjo, qty: srv.qty + tjo.qty
                    }
                }
                else{return tjo}
        })
        setSrvList(upCart)

        }else{
            setSrvList([...srvList, srv])
        }
    }

    const clear = () =>{
        setSrvList([])
    }
    const del1 = (id) =>{
        setSrvList(srvList.filter((tjo) => tjo.id !== id))
    }
    const qtyInCart = () =>{
        return srvList.reduce((acc, tjo) => acc += tjo.qty, 0)
    }
    const totalPrice = () =>{
        return srvList.reduce((acc, tjo) => acc += tjo.qty * tjo.precio, 0)
    }

    return(
        <CartContext.Provider value={{srvList, addSrv, clear, del1, qtyInCart, totalPrice}}>
            { children }
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartContextProvider