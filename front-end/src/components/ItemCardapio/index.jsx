import PropTypes from 'prop-types';

// import { useState } from 'react';
import { deleteItemCardapios } from '../../services/requests/cardapio';
import { ItemCardapioAction, ItemCardapioContainer, ItemCardapioInfo } from './style';

export default function ItemCardapio({id, name, description, price, setIndex, idx}) {
    function handleUpdateItem() {
        setIndex(id);
        console.log('update' + (idx+1));
        // setAction('update');
    }
    function handleDeleteItem() {
        console.log(id);
        deleteItemCardapios(id);
    }

    return(
        <ItemCardapioContainer className='my-2'>
            <ItemCardapioInfo className='m-2'>
                <h5 className='mx-2'>{idx}:</h5>
                <h5 className='mx-2'>{name}:</h5>
            </ItemCardapioInfo>
            <ItemCardapioInfo>
                <h6 className='mx-2'>{description}</h6>
            </ItemCardapioInfo>
            <ItemCardapioAction className='m-2'>
                <h4 className='mx-2'>R$ {price}</h4>
                {/* <InputItemCardapio type="number" value={itemQuantity} className='mx-2' onChange={(event) => changeItemQuantity(event)}/> */}
            </ItemCardapioAction>
            <ItemCardapioAction className='m-2'>
                <button onClick={handleUpdateItem} type="button" className="btn btn-primary mx-2">Atualizar</button>
                <button onClick={handleDeleteItem} type="button" className="btn btn-primary mx-2">Remover</button>
            </ItemCardapioAction>
        </ItemCardapioContainer>
    )
}

ItemCardapio.propTypes = {
    idx: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    setIndex: PropTypes.func,
};