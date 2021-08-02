import enemyAction from './enemyAction';

const health = (youData, enemyData) => {
    let healthValue = Math.floor(Math.random() * 15 + 5);
    let manaValue = Math.floor(Math.random() * 10 + 5);

    youData.health += healthValue;
    youData.mana -= manaValue;
    youData.isYourTurn = false;

    setTimeout(() => {
        enemyAction(youData, enemyData);
        youData.isYourTurn = true;
    }, 1000);
}

export default health;
