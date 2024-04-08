import PropTypes from 'prop-types';
import ItemCardapio from '../ItemCardapio';

export default function Cardapio({setAdicionar, cardapio}) {
    
    return(
        <section>
            <h2>Cardapio</h2>
            {cardapio.sort((a, b) => a.idItemCardapio - b.idItemCardapio).map((item) => (
                <div key={item.idItemCardapio}>
                    <ItemCardapio 
                        id={item.idItemCardapio} 
                        name={item.nome} 
                        description={item.descricao} 
                        price={item.valor}
                        // adicionar={adicionar}
                        setAdicionar={setAdicionar}
                        />
                </div>
                ))}
        </section>
    );
}

Cardapio.propTypes = {
    // adicionar: PropTypes.number,
    setAdicionar: PropTypes.array,
    cardapio: PropTypes.array
};