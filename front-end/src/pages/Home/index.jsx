import { useEffect, useState } from 'react';

import { getItemCardapios } from '../../services/requests/cardapio';

function Home() {
    const [cardapio, setCardapio] = useState([]);

    async function getCardapio() {
        const res = await getItemCardapios();
        console.log(res);
        setCardapio(res);
    }
  
    useEffect(() => {
      getCardapio();
    }, [setCardapio]);
  
    return(
        <section>
            {cardapio.map((item) => (
                <div key={item.idItemCardapio}>
                    <h2>{item.nome} - {item.descricao} - R$ {item.valor}</h2>
                </div>
                ))}
        </section>
    )
}

export default Home;
