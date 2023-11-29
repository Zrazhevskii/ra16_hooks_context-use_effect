import axios from 'axios';

const url =
    'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/';

export async function getCards() {
    const cards = await axios.get(url + 'users.json').then((data) => {
        return data.data;
    });

    return cards;
}

export async function getItemCard(id) {
    const itemCard = await axios.get(url + `${id}` + '.json').then((data) => {
        return data.data;
    });

    return itemCard;
}
