import { Link } from "react-router-dom";

function ItemList(props) {
  return (
    <>
      <h2 align="center" className="mt-3">
        Listado de Iphone
      </h2>

      <div className="row m-5">
        {props.celulares.map(( oneCelu , key) => {
          return (
            <div className="col-3 mt-2" key={key}>
              <div className="card">
                <img
                  src={oneCelu.thumbnail}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {oneCelu.title.substring(0, 80)}
                  </h5>
                  <p className="card-text">Precio: $
                    {oneCelu.price}
                  </p>
                  <Link
                    className="btn btn-dark"
                    to={`/detalle?iphoneID=${oneCelu.id}`}
                  >
                    Ver Mas
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ItemList;
