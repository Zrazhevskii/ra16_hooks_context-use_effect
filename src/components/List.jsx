import { useContext } from 'react';
import '../style/List.css';
import Context from './Context';
import PropTypes from 'prop-types';

export const List = ({ elem }) => {
    const value = useContext(Context);

    const hendlerClick = (id) => {
        value.addCard(id);
    };

    const { id, name } = elem;
    return (
        <button
            type='button'
            className='list-box'
            onClick={() => hendlerClick(id)}
        >
            {name}
        </button>
    );
};

List.propTypes = {
    elem: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired,
    })
}
