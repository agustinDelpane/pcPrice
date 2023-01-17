const Srv = ({servicio, precio, id, cat}) => {

    const onAdd = () => {
        console.log({precio})
    }
    
    return(
        <div className="svp">
            <h1>Servicio: {servicio}</h1> <br/>
            <h2>Precio: ${precio}</h2> <br/>
            <p>ID: {id}</p><br />
            <h6>Cat: {cat} </h6>
            <button onClick={(onAdd)}>Ver precio</button>
        </div>
    )
}

export default Srv