import enemyAction from './enemyAction';

const magic = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 12 + 5);
    enemyData.health -= rndm * 2;
    youData.mana -= rndm * 3;
    enemyAction(youData, enemyData);
}

export default magic;
