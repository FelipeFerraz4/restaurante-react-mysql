import PropTypes from 'prop-types';

export default function Pedido({Pedido}) {
    return(
        <section>
            <h2>Pedido</h2>
            {Pedido.map((item) => (
                <h2 key={item.id}>{item.name}</h2>
            ))}
        </section>
    );
}

Pedido.propTypes = {
    // setPedido: PropTypes.func,
    Pedido: PropTypes.array
};