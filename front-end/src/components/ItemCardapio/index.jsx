import PropTypes from 'prop-types';

// import { useState } from 'react';
import { ItemCardapioAction, ItemCardapioContainer, ItemCardapioInfo } from './style';

export default function ItemCardapio({id, name, description, price, setAdicionar}) {
    // const [itemQuantity, setItemQuantity] = useState(1);
    
    // function changeItemQuantity(event) {
    //     if (event.target.value < 0) {
    //         setItemQuantity(0);
    //     } else {
    //         setItemQuantity(event.target.value);
    //     }
    // }

    function handleUpdateItem() {
        setAdicionar(id);
    }

    return(
        <ItemCardapioContainer className='my-2'>
            <ItemCardapioInfo className='m-2'>
                <h5 className='mx-2'>{id}:</h5>
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
                <button type="button" className="btn btn-primary mx-2">Remover</button>
            </ItemCardapioAction>
        </ItemCardapioContainer>
    )
}

ItemCardapio.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    setAdicionar: PropTypes.func,
    // adicionar: PropTypes.number
};