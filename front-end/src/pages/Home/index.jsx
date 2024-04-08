import { useEffect, useState } from 'react';
import AdicionarItemCardapio from '../../components/AdicionarItemCardapio';
// import Cardapio from '../../components/Cardapio';
import ItemCardapio from '../../components/ItemCardapio';
import ClientName from '../../components/NameClient';
import Preferencia from '../../components/Preferencia';
import { getItemCardapios } from '../../services/requests/cardapio';
import { Container } from "./style";

function Home() {
    // const [action, setAction] = useState('add');
    const [index, setIndex] = useState(0);
  
    const [cardapio, setCardapio] = useState([]);

    async function getCardapio() {
        const res = await getItemCardapios();
        console.log(res);
        setCardapio(res);
    }
  
    useEffect(() => {
      getCardapio();
    }, [setCardapio]);

    return (
        <Container>
            <AdicionarItemCardapio
                index={index}
                setIndex={setIndex}
                cardapio={cardapio} 
                />
            <section>
                <h2>Cardapio</h2>
                {cardapio.sort((a, b) => a.idItemCardapio - b.idItemCardapio).map((item, idx) => (
                    <div key={item.idItemCardapio}>
                        <ItemCardapio 
                            idx={idx}
                            id={item.idItemCardapio} 
                            name={item.nome} 
                            description={item.descricao} 
                            price={item.valor}
                            setIndex={setIndex}
                            cardapio={cardapio} 
                            />
                    </div>
                    ))}
            </section>
            <Preferencia />
            <ClientName />
        </Container>
    )
}

export default Home;
