import enemyAction from './enemyAction';

const attack = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 10 + 5);
    enemyData.health -= rndm;
    enemyAction(youData, enemyData);
}

export default attack;
