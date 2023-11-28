import axios from 'axios';

export async function getCards() {
    const cards = await axios
        .get(
            'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json'
        )
        .then((data) => {
            return data.data;
        });

        return cards;
}
