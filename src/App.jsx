import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { Details } from './components/Details';
import { Lists } from './components/Lists';
import Context from './components/Context';
import { getCards, getItemCard } from './api';

function App() {
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState(null);

    useEffect(() => {
        getCards().then((data) => {
            setCards(data);
        });
    }, []);

    const addCard = useMemo(() => {
        return (id) => {
            getItemCard(id).then((data) => {
                setCard(data);
            });
        };
    }, [card]);

    const value = {
        cards,
        card,
        addCard,
    };

    return (
        <Context.Provider value={value}>
            <div className='main-wrapper'>
                <Lists />
                <Details />
            </div>
        </Context.Provider>
    );
}

export default App;
