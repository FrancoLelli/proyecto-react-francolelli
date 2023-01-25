import { useState } from "react";

function ItemCount(props) {

    const [ count, setCount ] = useState(props.initial);
    
    const sumar = () => {
        setCount(count + 1)
    }

    const restar = () => {
        setCount(count - 1)
    }

  return (
    <div>
      <button disabled={ count <= 1 } onClick={ restar }  type="button" className="btn btn-light m-2">
        -
      </button>
      <span> {count} </span>
      <button disabled={ count >= props.stock }  onClick={ sumar } type="button" className="btn btn-light m-2">
        +
      </button>
      <div>
        <button type="button" className="btn btn-success" onClick={() => { props.onAdd(count) } }>
          Agregar al carrito
        </button>{" "}
      </div>
    </div>
  );
}

export default ItemCount;
