import { useEffect, useState } from 'react';
import { getClienteName } from '../../services/requests/cliente';

export default function ClientName(){
    const [clientName, setClientName] = useState([]);

    useEffect(() => {
        async function getClientName() {
            const res = await getClienteName();
            setClientName(res);
            console.log(clientName);
            // setPreferred(res[0].nome);
        }
        getClientName();
        // setPreferred(res);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setClientName])
    

    return(
        <section className="m-3">
            <h2>Nome dos clientes</h2>
            {clientName.map((item) => (
                <div key={item.id}>
                    <h4>{item.nome}</h4>
                </div>
            ))}
        </section>
    );
}