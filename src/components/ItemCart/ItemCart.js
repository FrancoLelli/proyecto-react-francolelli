import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartProvider";

function ItemCart(props){

    const { removeProd } = useCartContext();

    console.log(props);

    return(
        <>
        <section class="h-100">
            <div class="container h-100 py-5">
                <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-10">

                <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Carrito de Compras</h3>
                </div>
        {
            props.celular.map( (onePhone) => {
                return(
                    <div class="card rounded-3 mb-4" key={onePhone.id}>
                            <div class="card-body p-4">
                                <div class="row d-flex justify-content-between align-items-center">
                                <div class="col-md-2 col-lg-2 col-xl-2">
                                    <img
                                    src={onePhone.thumbnail}
                                    class="img-fluid rounded-3" alt={onePhone.title} />
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-3">
                                    <p class="lead fw-normal mb-2">{onePhone.title}</p>
                                </div>
                                <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                    <p>Cantidad: {onePhone.cantidad}</p>
                                </div>
                                <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 class="mb-0">Precio: ${onePhone.price}</h5>
                                </div>
                                <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button type="button" class="btn btn-outline-danger" onClick={() => removeProd(onePhone.id)}>Eliminar</button>
                                </div>
                                </div>
                            </div>
                            </div>
                )           
            })
        }

                </div>
                </div>
            </div>
        </section>
            
        </>
    )
}

export default ItemCart;