import enemyAction from './enemyAction';

const magic = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 15 + 5);

    enemyData.health -= rndm * 2;
    youData.mana -= rndm * 3;
    youData.isYourTurn = false;

    setTimeout(() => {
        enemyAction(youData, enemyData);
        youData.isYourTurn = true;
    }, 1000);
}

export default magic;
