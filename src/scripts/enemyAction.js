const attack = (youData, rndm) => {
    youData.health -= rndm;
}

const health = (enemyData, rndm) => {
    enemyData.health += rndm + 5;
    enemyData.mana -= rndm - 2;
}

const enemyAction = (youData, enemyData) => {
    let rndm = Math.floor(Math.random() * 10 + 5);
    if (enemyData.health < 50 && enemyData.mana >= rndm && rndm < 10) {
        health(enemyData, rndm);
    } else {
        attack(youData, rndm);
    }
    youData.isYourTurn = true;
}

export default enemyAction;