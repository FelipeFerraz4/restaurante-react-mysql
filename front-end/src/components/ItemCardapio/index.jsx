import PropTypes from 'prop-types';

import { useState } from 'react';
import { InputItemCardapio, ItemCardapioContainer, ItemCardapioInfo } from './style';

export default function ItemCardapio({id, name, description, price}) {
    const [itemQuantity, setItemQuantity] = useState(1);
    
    function changeItemQuantity(event) {
        if (event.target.value < 0) {
            setItemQuantity(0);
        } else {
            setItemQuantity(event.target.value);
        }

    }

    function handleUpdateItem() {
        // let item = {
        //     id: id,
        //     name: name,
        //     quantity: itemQuantity
        // }
        // pedido.push(item)
        // setPedido(pedido)
    }

    return(
        <ItemCardapioContainer className='my-2'>
            <ItemCardapioInfo className='m-2'>
                <h4 className='mx-2'>{id}:</h4>
                <h4 className='mx-2'>{name}:</h4>
                <h4 className='mx-2'>{description}</h4>
            </ItemCardapioInfo>
            <ItemCardapioInfo className='m-2'>
                <h4 className='mx-2'>R$ {price}</h4>
                <InputItemCardapio type="number" value={itemQuantity} className='mx-2' onChange={(event) => changeItemQuantity(event)}/>
            </ItemCardapioInfo>
            <ItemCardapioInfo className='m-2'>
                <button onClick={handleUpdateItem} type="button" className="btn btn-primary mx-2">Atualizar</button>
                <button type="button" className="btn btn-primary mx-2">Remover</button>
            </ItemCardapioInfo>
        </ItemCardapioContainer>
    )
}

ItemCardapio.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
};