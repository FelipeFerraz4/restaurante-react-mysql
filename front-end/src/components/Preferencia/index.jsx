import { useEffect, useState } from 'react';
import { getItemPreferred } from '../../services/requests/cardapio';
export default function Preferencia(){
    const [preferred, setPreferred] = useState('Hello World');

    useEffect(() => {
        async function getPreferred() {
            const res = await getItemPreferred();
            console.log(preferred);
            console.log(res[0].nome);
            setPreferred(res[0].nome);
        }
        getPreferred();
        // setPreferred(res);
    }, [preferred])
    

    return(
        <section className="m-3">
            <h2>Item Preferido pelos Clientes: {preferred}</h2>
        </section>
    );
}