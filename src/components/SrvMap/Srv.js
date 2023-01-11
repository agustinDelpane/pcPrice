const Srv = ({servicio, precio, id}) => {
    return(
        <div className="svp">
            <h1>Servicio: {servicio}</h1> <br/>
            <h2>Precio: ${precio}</h2> <br/>
            <p>ID: {id}</p><br />
        </div>
    )
}

export default Srv