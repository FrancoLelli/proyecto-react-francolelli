import axios from "axios";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer () {

    const [ celular, setCelu ] = useState([]);

    const query = new URLSearchParams(window.location.search);

    let iphoneID = query.get('iphoneID');

    useEffect(() => {
        axios.get(`https://api.mercadolibre.com/items?ids=${iphoneID}`)
        .then( resp => {
            const celu = resp.data;
            celu.map( ( Onecelu, key ) => { setCelu(Onecelu. body); } )
        })
        .catch(err => console.log(err))
    }, [iphoneID]);

    return (
        <>
            <ItemDetail celular={ celular } />
        </>

    )
}

export default ItemDetailContainer;