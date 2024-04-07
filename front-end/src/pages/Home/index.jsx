import AdicionarItemCardapio from '../../components/AdicionarItemCardapio';
import Cardapio from '../../components/Cardapio';
import { Container } from "./style";

function Home() {
    // const [pedido, setPedido] = useState([]);
  
    return (
        <Container>
            <AdicionarItemCardapio />
            <Cardapio />
        </Container>
    )
}

export default Home;
