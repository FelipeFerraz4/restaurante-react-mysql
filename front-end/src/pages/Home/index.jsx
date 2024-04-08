import { useEffect, useState } from 'react';
import AdicionarItemCardapio from '../../components/AdicionarItemCardapio';
import Cardapio from '../../components/Cardapio';
import { getItemCardapios } from '../../services/requests/cardapio';
import { Container } from "./style";

function Home() {
    const [adicionar, setAdicionar] = useState(0);
  
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
                adicionar={adicionar}
                setAdicionar={setAdicionar}
                cardapio={cardapio} 
                />
            <Cardapio setAdicionar={setAdicionar} cardapio={cardapio}/>
        </Container>
    )
}

export default Home;
