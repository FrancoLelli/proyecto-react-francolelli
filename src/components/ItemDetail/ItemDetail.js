import { Link } from "react-router-dom";
import './ItemDaetail.css';
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { useCartContext } from "../../context/CartProvider";
import swal from "@sweetalert/with-react";
function ItemDetail (props) {

    const [ irACarro, setIrACarro ] = useState(false);

    const { addProd } = useCartContext();

    const onAdd = (cant) => {
        setIrACarro(true)
        addProd(props.celular, cant);
        swal('Producto agregado al carro')
    }
    return (
        <div className="m-5">
            <h2 align='center' className="mb-5">Detalle de Celular</h2>
            <div className="row" key={props.celular.id}>
                <div className="col-4">
                    <img src={props.celular.thumbnail} className="img" alt="pelicula" />
                </div>
                <div className="col-6">
                    <h3>{props.celular.title}</h3>
                    <p>
                        Precio: ${props.celular.price}
                    </p>
                    {
                        irACarro 
                        ?  <Link className="btn btn-dark m-5" to='/carro'>Terminar Compra</Link>
                        : <ItemCount initial={1} stock={props.celular.available_quantity} onAdd={onAdd}/> 
                    }
                    <Link className="btn btn-dark m-5" to='/productos'>Volver</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;