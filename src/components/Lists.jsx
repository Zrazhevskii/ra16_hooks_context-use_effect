import { useContext } from 'react';
import Context from './Context';
import '../style/Lists.css';
import { List } from './List';

export const Lists = () => {
    const value = useContext(Context);

    return (
        <div className='lists-wrapper'>
            {value.cards.map((elem) => {
                return <List elem={elem} key={elem.id} />;
            })}
        </div>
    );
};
