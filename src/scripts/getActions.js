import attack from './attack';
import magic from './magic';
import health from './health';
import sur from './sur';

const getActions = (youData, enemyData) => {
    return {
        attack,
        magic,
        health,
        sur
    }
}

export default getActions;