import enemyAction from './enemyAction';

const attack = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 10 + 5);
    enemyData.health -= rndm;
    youData.isYourTurn = false;

    setTimeout(() => {
        enemyAction(youData, enemyData);
        youData.isYourTurn = true;
    }, 1000);
}

export default attack;
