import axios from "axios";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {

    const api = 'https://api.mercadolibre.com/sites/MLA/search?q=Iphone';

    const [ celulares, setCelulares ] = useState([]);

    useEffect(() => {
        axios.get(api)
        .then( resp => {
            const datosCelulares = resp.data.results;
            setCelulares(datosCelulares);
        })
        .catch( err => console.log(err))
    }, [setCelulares]);

    return (
            <ItemList celulares={ celulares }/>
    )
}

export default ItemListContainer;