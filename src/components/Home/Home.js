import './Home.css'
import { Link } from 'react-router-dom';

function Home () {
    return (
        <div className='todo'>
            <div className="fondo">
                <div className='cont'>
                    <h2>Bienvenidos!</h2>
                    <p>Aqui encontraras los mejores Iphones</p>
                    <Link className="btn btn-dark m-2" to='/productos'>Encontrar el mio</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Home;