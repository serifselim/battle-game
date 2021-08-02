import enemyAction from './enemyAction';

const attack = (youData, enemyData) => {
    let dmg = Math.floor(Math.random() * 10 + 5);
    enemyData.health -= dmg;

    setTimeout(() => {
        enemyAction(youData, enemyData);
    }, 1000);
}

export default attack;
