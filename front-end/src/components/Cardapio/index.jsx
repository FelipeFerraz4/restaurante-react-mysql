import { useEffect, useState } from 'react';
import { getItemCardapios } from '../../services/requests/cardapio';
import ItemCardapio from '../ItemCardapio';

export default function Cardapio() {
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
            <h2>Cardapio</h2>
            {cardapio.sort((a, b) => a.idItemCardapio - b.idItemCardapio).map((item) => (
                <div key={item.idItemCardapio}>
                    <ItemCardapio id={item.idItemCardapio} name={item.nome} description={item.descricao} price={item.valor}/>
                </div>
                ))}
        </section>
    );
}

// Cardapio.propTypes = {
//     setPedido: PropTypes.func,
//     pedido: PropTypes.array
// };