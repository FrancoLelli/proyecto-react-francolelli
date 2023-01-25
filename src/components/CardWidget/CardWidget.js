import logo from './assets/cart-icon.png';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';

function CardWidget () {
    const {totalProd} = useCartContext();
    return (
        <div className='d-flex align-items-start'>
            <Link to='/carro' className=''><img src={logo} alt='carro'></img></Link>
            <p>{ totalProd() }</p>
        </div>
    )
}

export default CardWidget;