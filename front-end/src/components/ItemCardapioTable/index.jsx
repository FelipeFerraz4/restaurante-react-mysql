import PropTypes from 'prop-types';

// import { ItemCardapioContainer, ItemCardapioInfo } from './style';

export default function ItemCardapio() {
    return(
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">Número</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
    </table>
    )
}

ItemCardapio.propTypes = {
    itensCardapio: PropTypes.any
};